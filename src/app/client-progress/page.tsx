'use client'

import { 
  Box, 
  Text, 
  Flex, 
  HStack, 
  Button,
  Table,
  Badge
} from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react/progress'
import { FiFilter, FiChevronDown, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import DashboardLayout from '@/components/ui/DashboardLayout'

const clientData = [
  {
    name: 'Maria Salas',
    program: 'ESL Classes',
    sessions: 1245,
    status: 'On Track',
    statusColor: 'green',
    progress: 92,
    lastVisit: '2 days ago'
  },
  {
    name: 'Andres Parra',
    program: 'ESL Classes',
    sessions: 1245,
    status: 'Needs Support',
    statusColor: 'red',
    progress: 52,
    lastVisit: '2 days ago'
  },
  {
    name: 'Elena Vasquez',
    program: 'ESL Classes',
    sessions: 1245,
    status: 'At Risk',
    statusColor: 'orange',
    progress: 68,
    lastVisit: '2 days ago'
  },
  {
    name: 'Mamadouh Diallo',
    program: 'ESL Classes',
    sessions: 1245,
    status: 'On Track',
    statusColor: 'green',
    progress: 92,
    lastVisit: '2 days ago'
  },
  {
    name: 'Muhammad Imran',
    program: 'ESL Classes',
    sessions: 1245,
    status: 'On Track',
    statusColor: 'green',
    progress: 92,
    lastVisit: '2 days ago'
  }
]

export default function ClientProgressPage() {
  return (
    <DashboardLayout>
      <Box p={6}>
        {/* Page Header */}
        <Flex justify="space-between" align="center" mb={6}>
          <Box>
            <Text fontSize="2xl" fontWeight="bold" color="gray.800">
              Client Progress
            </Text>
            <Text fontSize="sm" color="gray.500" mt={1}>
              Last updated: Today at 9:41 AM
            </Text>
          </Box>
          
          <HStack gap={3}>
            <Button
              leftIcon={<FiFilter />}
              variant="outline"
              size="sm"
              fontSize="sm"
              color="gray.700"
            >
              Filters
            </Button>
            
            <Button
              rightIcon={<FiChevronDown />}
              variant="outline"
              size="sm"
              fontSize="sm"
              color="gray.700"
            >
              All Services
            </Button>
            
            <Button
              rightIcon={<FiChevronDown />}
              variant="outline"
              size="sm"
              fontSize="sm"
              color="gray.700"
            >
              Last 12 Months
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              fontSize="sm"
              color="blue.500"
            >
              More Filters
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              fontSize="sm"
              color="blue.500"
            >
              Reset
            </Button>
          </HStack>
        </Flex>

        {/* Clients Table */}
        <Box bg="white" borderRadius="lg" border="1px solid" borderColor="gray.200" overflow="hidden">
          <Box p={6}>
            <Text fontSize="lg" fontWeight="600" mb={2} color="gray.800">
              Active Clients
            </Text>
            <Text fontSize="sm" color="gray.500" mb={6}>
              Progress metrics and status updates.
            </Text>

            <Table.Root size="lg" variant="simple">
              <Table.Header>
                <Table.Row bg="gray.50">
                  <Table.ColumnHeader py={3} color="gray.600" fontSize="xs" fontWeight="600" textTransform="uppercase">
                    Client
                  </Table.ColumnHeader>
                  <Table.ColumnHeader py={3} color="gray.600" fontSize="xs" fontWeight="600" textTransform="uppercase">
                    Program
                  </Table.ColumnHeader>
                  <Table.ColumnHeader py={3} color="gray.600" fontSize="xs" fontWeight="600" textTransform="uppercase" textAlign="center">
                    Sessions
                  </Table.ColumnHeader>
                  <Table.ColumnHeader py={3} color="gray.600" fontSize="xs" fontWeight="600" textTransform="uppercase">
                    Status
                  </Table.ColumnHeader>
                  <Table.ColumnHeader py={3} color="gray.600" fontSize="xs" fontWeight="600" textTransform="uppercase" minW="200px">
                    Progress
                  </Table.ColumnHeader>
                  <Table.ColumnHeader py={3} color="gray.600" fontSize="xs" fontWeight="600" textTransform="uppercase">
                    Last Visit
                  </Table.ColumnHeader>
                  <Table.ColumnHeader py={3}></Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              
              <Table.Body>
                {clientData.map((client) => (
                  <Table.Row key={client.name} borderBottom="1px solid" borderColor="gray.100">
                    <Table.Cell py={4} fontWeight="500" color="gray.700">
                      {client.name}
                    </Table.Cell>
                    <Table.Cell py={4} color="gray.600">
                      {client.program}
                    </Table.Cell>
                    <Table.Cell py={4} textAlign="center" color="gray.700">
                      {client.sessions.toLocaleString()}
                    </Table.Cell>
                    <Table.Cell py={4}>
                      <HStack gap={2}>
                        <Box
                          w="8px"
                          h="8px"
                          borderRadius="full"
                          bg={`${client.statusColor}.500`}
                        />
                        <Text fontSize="sm" color="gray.700">{client.status}</Text>
                      </HStack>
                    </Table.Cell>
                    <Table.Cell py={4}>
                      <Box>
                        <HStack justify="space-between" mb={1}>
                          <Progress.Root value={client.progress} size="sm" w="120px">
                            <Progress.Track borderRadius="full" bg="gray.100" h="8px">
                              <Progress.Range 
                                bg={client.statusColor === 'green' ? 'green.500' : 
                                    client.statusColor === 'red' ? 'red.500' : 
                                    'orange.500'} 
                                borderRadius="full" 
                              />
                            </Progress.Track>
                          </Progress.Root>
                          <Text fontSize="sm" color="gray.700" fontWeight="500">
                            {client.progress}%
                          </Text>
                        </HStack>
                      </Box>
                    </Table.Cell>
                    <Table.Cell py={4} color="gray.500" fontSize="sm">
                      {client.lastVisit}
                    </Table.Cell>
                    <Table.Cell py={4}>
                      <Button
                        size="sm"
                        variant="ghost"
                        color="blue.500"
                        rightIcon={<FiExternalLink />}
                        fontSize="sm"
                      >
                        Details
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>

            {/* Pagination */}
            <Flex justify="space-between" align="center" mt={6} pt={4} borderTop="1px solid" borderColor="gray.200">
              <Text fontSize="sm" color="gray.500">
                Showing 1 to 5 of 10,600 clients
              </Text>
              
              <HStack gap={2}>
                <Button variant="ghost" size="sm" color="gray.400">
                  <FiChevronLeft />
                </Button>
                
                <Button variant="ghost" size="sm" color="blue.500" fontWeight="600">
                  1
                </Button>
                <Button variant="ghost" size="sm" color="gray.600">
                  2
                </Button>
                <Button variant="ghost" size="sm" color="gray.600">
                  3
                </Button>
                <Text color="gray.400" px={2}>...</Text>
                <Button variant="ghost" size="sm" color="gray.600">
                  142
                </Button>
                
                <Button variant="ghost" size="sm" color="gray.600">
                  <FiChevronRight />
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Box>
      </Box>
    </DashboardLayout>
  )
}