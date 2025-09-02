'use client'

import { 
  Box, 
  Text, 
  Flex, 
  HStack, 
  Button,
  Table,
  Icon
} from '@chakra-ui/react'
import { FiFilter, FiChevronDown, FiChevronRight } from 'react-icons/fi'
import DashboardLayout from '@/components/ui/DashboardLayout'

const serviceData = [
  {
    category: 'English as Second Language',
    clients: 876,
    sessions: 1245,
    avgSessions: 8.5,
    successRate: 84,
    change: 12,
    trend: 'up'
  },
  {
    category: 'Legal Cases',
    clients: 493,
    sessions: 782,
    avgSessions: 6.2,
    successRate: 76,
    change: 8,
    trend: 'up'
  },
  {
    category: 'Healthcare Enrollments',
    clients: 621,
    sessions: 845,
    avgSessions: 4.8,
    successRate: 92,
    change: 15,
    trend: 'up'
  },
  {
    category: 'Digital Safety Workshops',
    clients: 428,
    sessions: 612,
    avgSessions: 3.2,
    successRate: 88,
    change: 5,
    trend: 'up'
  }
]

export default function ServiceAnalysisPage() {
  const totalClients = serviceData.reduce((sum, item) => sum + item.clients, 0)
  const totalSessions = serviceData.reduce((sum, item) => sum + item.sessions, 0)
  const avgSessionsOverall = (totalSessions / totalClients).toFixed(1)
  const avgSuccessRate = Math.round(serviceData.reduce((sum, item) => sum + item.successRate, 0) / serviceData.length)

  return (
    <DashboardLayout>
      <Box p={6}>
        {/* Page Header */}
        <Flex justify="space-between" align="center" mb={6}>
          <Box>
            <Text fontSize="2xl" fontWeight="bold" color="gray.800">
              Service Analysis
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

        {/* Services Table */}
        <Box bg="white" borderRadius="lg" border="1px solid" borderColor="gray.200" overflow="hidden">
          <Box p={6}>
            <Text fontSize="lg" fontWeight="600" mb={2} color="gray.800">
              Services by Category
            </Text>
            <Text fontSize="sm" color="gray.500" mb={6}>
              Detailed breakdown of all client services and outcomes.
            </Text>

            <Table.Root size="lg" variant="simple">
              <Table.Header>
                <Table.Row bg="gray.50">
                  <Table.ColumnHeader py={3} color="gray.600" fontSize="xs" fontWeight="600" textTransform="uppercase">
                    Service Category
                  </Table.ColumnHeader>
                  <Table.ColumnHeader py={3} color="gray.600" fontSize="xs" fontWeight="600" textTransform="uppercase" textAlign="right">
                    Clients
                  </Table.ColumnHeader>
                  <Table.ColumnHeader py={3} color="gray.600" fontSize="xs" fontWeight="600" textTransform="uppercase" textAlign="right">
                    Sessions
                  </Table.ColumnHeader>
                  <Table.ColumnHeader py={3} color="gray.600" fontSize="xs" fontWeight="600" textTransform="uppercase" textAlign="right">
                    Avg. Sessions
                  </Table.ColumnHeader>
                  <Table.ColumnHeader py={3} color="gray.600" fontSize="xs" fontWeight="600" textTransform="uppercase" textAlign="right">
                    Success Rate
                  </Table.ColumnHeader>
                  <Table.ColumnHeader py={3} color="gray.600" fontSize="xs" fontWeight="600" textTransform="uppercase" textAlign="right">
                    YoY Change
                  </Table.ColumnHeader>
                  <Table.ColumnHeader py={3}></Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              
              <Table.Body>
                {serviceData.map((service) => (
                  <Table.Row key={service.category} borderBottom="1px solid" borderColor="gray.100">
                    <Table.Cell py={4} fontWeight="500" color="gray.700">
                      {service.category}
                    </Table.Cell>
                    <Table.Cell py={4} textAlign="right" fontWeight="500" color="gray.800">
                      {service.clients.toLocaleString()}
                    </Table.Cell>
                    <Table.Cell py={4} textAlign="right" color="gray.700">
                      {service.sessions.toLocaleString()}
                    </Table.Cell>
                    <Table.Cell py={4} textAlign="right" color="gray.700">
                      {service.avgSessions}
                    </Table.Cell>
                    <Table.Cell py={4} textAlign="right" color="gray.700">
                      {service.successRate}%
                    </Table.Cell>
                    <Table.Cell py={4} textAlign="right">
                      <Text color="green.500" fontWeight="500">
                        +{service.change}%
                      </Text>
                    </Table.Cell>
                    <Table.Cell py={4} textAlign="right">
                      <Icon color="gray.400" cursor="pointer" _hover={{ color: 'gray.600' }}>
                        <FiChevronRight />
                      </Icon>
                    </Table.Cell>
                  </Table.Row>
                ))}
                
                {/* Total Row */}
                <Table.Row bg="gray.50" fontWeight="600">
                  <Table.Cell py={4} color="gray.800">Total</Table.Cell>
                  <Table.Cell py={4} textAlign="right" color="gray.800">
                    {totalClients.toLocaleString()}
                  </Table.Cell>
                  <Table.Cell py={4} textAlign="right" color="gray.800">
                    {totalSessions.toLocaleString()}
                  </Table.Cell>
                  <Table.Cell py={4} textAlign="right" color="gray.800">
                    {avgSessionsOverall}
                  </Table.Cell>
                  <Table.Cell py={4} textAlign="right" color="gray.800">
                    {avgSuccessRate}%
                  </Table.Cell>
                  <Table.Cell py={4} textAlign="right">
                    <Text color="green.500">+8.6%</Text>
                  </Table.Cell>
                  <Table.Cell py={4}></Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Box>
        </Box>
      </Box>
    </DashboardLayout>
  )
}