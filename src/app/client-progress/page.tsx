'use client'

import { 
  Box, 
  Text, 
  Flex, 
  HStack, 
  Button,
  Input,
  Dialog,
  Portal,
  VStack
} from '@chakra-ui/react'
import { Table } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react/progress'
import { Menu } from '@chakra-ui/react'
import { 
  FiChevronDown, 
  FiExternalLink, 
  FiSearch,
} from 'react-icons/fi'
import { useState } from 'react'
import DashboardLayout from '@/components/ui/DashboardLayout'

type Client = {
  id: number;
  name: string;
  program: string;
  sessions: number;
  status: string;
  statusColor: string;
  progress: number;
  lastVisit: string;
  country: string;
  age: number;
  enrolled: string;
  phone: string;
  address: string;
}

const clientData = [
  {
    id: 1,
    name: 'Maria Salas',
    program: 'ESL Classes',
    sessions: 24,
    status: 'On Track',
    statusColor: 'green',
    progress: 92,
    lastVisit: '2 days ago',
    country: 'Mexico',
    age: 34,
    enrolled: 'Jan 2024',
    phone: '(555) 123-4567',
    address: 'Queens, NY 11105'
  },
  {
    id: 2,
    name: 'Andres Parra',
    program: 'Legal Services',
    sessions: 12,
    status: 'Needs Support',
    statusColor: 'red',
    progress: 52,
    lastVisit: '1 week ago',
    country: 'Colombia',
    age: 28,
    enrolled: 'Mar 2024',
    phone: '(555) 987-6543',
    address: 'Brooklyn, NY 11201'
  },
  {
    id: 3,
    name: 'Elena Vasquez',
    program: 'Healthcare Enrollment',
    sessions: 18,
    status: 'At Risk',
    statusColor: 'orange',
    progress: 68,
    lastVisit: '3 days ago',
    country: 'Venezuela',
    age: 41,
    enrolled: 'Feb 2024',
    phone: '(555) 456-7890',
    address: 'Manhattan, NY 10001'
  },
  {
    id: 4,
    name: 'Mamadouh Diallo',
    program: 'Digital Safety Workshop',
    sessions: 32,
    status: 'On Track',
    statusColor: 'green',
    progress: 95,
    lastVisit: '1 day ago',
    country: 'Mexico',
    age: 45,
    enrolled: 'Dec 2023',
    phone: '(555) 321-0987',
    address: 'Bronx, NY 10451'
  },
  {
    id: 5,
    name: 'Muhammad Imran',
    program: 'ESL Classes',
    sessions: 28,
    status: 'On Track',
    statusColor: 'green',
    progress: 87,
    lastVisit: '2 days ago',
    country: 'Colombia',
    age: 39,
    enrolled: 'Nov 2023',
    phone: '(555) 654-3210',
    address: 'Queens, NY 11106'
  },
  {
    id: 6,
    name: 'Carmen Rodriguez',
    program: 'Legal Services',
    sessions: 8,
    status: 'Needs Support',
    statusColor: 'red',
    progress: 35,
    lastVisit: '5 days ago',
    country: 'Venezuela',
    age: 52,
    enrolled: 'Apr 2024',
    phone: '(555) 789-0123',
    address: 'Staten Island, NY 10301'
  }
]

export default function ClientProgressPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')
  const [programFilter, setProgramFilter] = useState('All Programs')
  const [selectedClient, setSelectedClient] = useState<typeof clientData[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const programs = ['All Programs', ...Array.from(new Set(clientData.map(client => client.program)))]
  const statuses = ['All Status', ...Array.from(new Set(clientData.map(client => client.status)))]

  // Filter data
  const filteredData = clientData.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.program.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'All Status' || client.status === statusFilter
    const matchesProgram = programFilter === 'All Programs' || client.program === programFilter
    
    return matchesSearch && matchesStatus && matchesProgram
  })

  // Paginate data
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage)

  const openClientDetails = (client:Client) => {
    setSelectedClient(client)
    setIsModalOpen(true)
  }

  const resetFilters = () => {
    setSearchTerm('')
    setStatusFilter('All Status')
    setProgramFilter('All Programs')
    setCurrentPage(1)
  }

  return (
    <DashboardLayout>
      <Box p={{ base: 4, md: 6 }}>
        {/* Page Header */}
        <Flex 
          justify={{ base: "center", md: "space-between" }} 
          align="center" 
          mb={6}
          direction={{ base: "column", md: "row" }}
          gap={{ base: 2, md: 0 }}
        >
          <Box textAlign={{ base: "center", md: "left" }}>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="brand.primary">
              Client Progress
            </Text>
            <Text fontSize="sm" color="brand.secondary" mt={1}>
              Last updated: Today at 9:41 AM
            </Text>
          </Box>
        </Flex>

        {/* Clients Table */}
        <Box 
          bg="white" 
          borderRadius="lg" 
          boxShadow="0 1px 2px -1px rgba(0, 0, 0, 0.10), 0 1px 3px 0 rgba(0, 0, 0, 0.10)"
          overflow="hidden"
        >
          <Box p={{ base: 3, md: 5 }}>
            <Text fontSize={{ base: "sm", md: "md" }} fontWeight="600" mb={1} color="brand.primary">
              Active Clients
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }} color="brand.secondary" mb={6}>
              Progress metrics and status updates.
            </Text>

            {/* Filters */}
            <Flex 
              gap={4} 
              mb={6} 
              wrap="wrap"
              direction={{ base: "column", md: "row" }}
            >
              <Box position="relative" flex="1" maxW={{ base: "100%", md: "300px" }}>
                <Input
                  placeholder="Search clients or programs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  pl={10}
                  size={{ base: "sm", md: "sm" }}
                  fontSize="sm"
                />
                <Box position="absolute" left={3} top="50%" transform="translateY(-50%)">
                  <FiSearch color="#9CA3AF" />
                </Box>
              </Box>

              <HStack gap={2} w={{ base: "100%", md: "auto" }}>
                <Menu.Root>
                  <Menu.Trigger asChild>
                    <Button
                      variant="outline"
                      size={{ base: "xs", md: "sm" }}
                      fontSize="sm"
                      color="brand.primary"
                      _hover={{ bg: "brand.bg" }}
                      flex={{ base: 1, md: "none" }}
                    >
                      {statusFilter} <FiChevronDown />
                    </Button>
                  </Menu.Trigger>
                  <Portal>
                    <Menu.Positioner>
                      <Menu.Content bg="white" borderColor="gray.200" shadow="lg">
                        {statuses.map((status) => (
                          <Menu.Item
                            key={status}
                            value={status}
                            onClick={() => setStatusFilter(status)}
                            color="brand.primary"
                          >
                            {status}
                          </Menu.Item>
                        ))}
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                </Menu.Root>

                <Menu.Root>
                  <Menu.Trigger asChild>
                    <Button
                      variant="outline"
                      size={{ base: "xs", md: "sm" }}
                      fontSize="sm"
                      color="brand.primary"
                      _hover={{ bg: "brand.bg" }}
                      flex={{ base: 1, md: "none" }}
                    >
                      {programFilter}<FiChevronDown />
                    </Button>
                  </Menu.Trigger>
                  <Portal>
                    <Menu.Positioner>
                      <Menu.Content bg="white" borderColor="gray.200" shadow="lg">
                        {programs.map((program) => (
                          <Menu.Item
                            key={program}
                            value={program}
                            onClick={() => setProgramFilter(program)}
                            color="brand.primary"
                          >
                            {program}
                          </Menu.Item>
                        ))}
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                </Menu.Root>

                <Button
                  variant="ghost"
                  size={{ base: "xs", md: "sm" }}
                  fontSize="sm"
                  color="brand.links"
                  onClick={resetFilters}
                >
                   Reset
                </Button>
              </HStack>
            </Flex>

            {/* Mobile Card View */}
            <Box display={{ base: "block", lg: "none" }} mb={6}>
              {paginatedData.map((client) => (
                <Box
                  key={client.id}
                  bg="brand.bg"
                  p={4}
                  borderRadius="md"
                  border="1px solid"
                  borderColor="gray.200"
                  mb={3}
                >
                  <Flex justify="space-between" align="center" mb={3}>
                    <VStack align="flex-start" gap={1}>
                      <Text fontSize="sm" fontWeight="600" color="brand.primary">
                        {client.name}
                      </Text>
                      <Text fontSize="xs" color="brand.secondary">
                        {client.program}
                      </Text>
                    </VStack>
                    <Button
                      size="xs"
                      variant="ghost"
                      color="brand.links"
                      onClick={() => openClientDetails(client)}
                    >
                      <FiExternalLink />
                    </Button>
                  </Flex>

                  <VStack gap={2} align="stretch">
                    <Flex justify="space-between">
                      <Text fontSize="xs" color="brand.secondary">Sessions:</Text>
                      <Text fontSize="xs" color="brand.primary">{client.sessions}</Text>
                    </Flex>
                    <Flex justify="space-between" align="center">
                      <Text fontSize="xs" color="brand.secondary">Status:</Text>
                      <HStack gap={1}>
                        <Box
                          w="6px"
                          h="6px"
                          borderRadius="full"
                          bg={client.statusColor === 'green' ? 'brand.success' : 
                              client.statusColor === 'red' ? 'brand.error' : 
                              'brand.warning'}
                        />
                        <Text fontSize="xs" color="brand.primary">{client.status}</Text>
                      </HStack>
                    </Flex>
                    <Flex justify="space-between" align="center">
                      <Text fontSize="xs" color="brand.secondary">Progress:</Text>
                      <HStack gap={2}>
                        <Progress.Root value={client.progress} size="sm" w="60px">
                          <Progress.Track borderRadius="full" bg="gray.100" h="6px">
                            <Progress.Range 
                              bg={client.statusColor === 'green' ? 'brand.success' : 
                                  client.statusColor === 'red' ? 'brand.error' : 
                                  'brand.warning'} 
                              borderRadius="full" 
                            />
                          </Progress.Track>
                        </Progress.Root>
                        <Text fontSize="xs" color="brand.primary">{client.progress}%</Text>
                      </HStack>
                    </Flex>
                    <Flex justify="space-between">
                      <Text fontSize="xs" color="brand.secondary">Last Visit:</Text>
                      <Text fontSize="xs" color="brand.primary">{client.lastVisit}</Text>
                    </Flex>
                  </VStack>
                </Box>
              ))}
            </Box>

            {/* Desktop Table View */}
            <Box display={{ base: "none", lg: "block" }}>
              <Table.Root
                size="lg"
                interactive
                css={{
                  "& td": { borderBottom: "none" },
                  "& th": { borderBottom: "none" },
                  "& tr": { borderBottom: "none" }
                }}
              >
                <Table.Header>
                  <Table.Row bg="brand.bg">
                    <Table.ColumnHeader
                      py={3}
                      color="brand.secondary"
                      fontSize="xs"
                      fontWeight="600"
                      textTransform="uppercase"
                    >
                      Client
                    </Table.ColumnHeader>
                    <Table.ColumnHeader
                      py={3}
                      color="brand.secondary"
                      fontSize="xs"
                      fontWeight="600"
                      textTransform="uppercase"
                    >
                      Program
                    </Table.ColumnHeader>
                    <Table.ColumnHeader
                      py={3}
                      color="brand.secondary"
                      fontSize="xs"
                      fontWeight="600"
                      textTransform="uppercase"
                      textAlign="center"
                    >
                      Sessions
                    </Table.ColumnHeader>
                    <Table.ColumnHeader
                      py={3}
                      color="brand.secondary"
                      fontSize="xs"
                      fontWeight="600"
                      textTransform="uppercase"
                    >
                      Status
                    </Table.ColumnHeader>
                    <Table.ColumnHeader
                      py={3}
                      color="brand.secondary"
                      fontSize="xs"
                      fontWeight="600"
                      textTransform="uppercase"
                      minW="200px"
                    >
                      Progress
                    </Table.ColumnHeader>
                    <Table.ColumnHeader
                      py={3}
                      color="brand.secondary"
                      fontSize="xs"
                      fontWeight="600"
                      textTransform="uppercase"
                      minW="120px"
                    >
                      Last Visit
                    </Table.ColumnHeader>
                    <Table.ColumnHeader py={3}></Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                
                <Table.Body>
                  {paginatedData.map((client) => (
                    <Table.Row key={client.id} bg="brand.white">
                      <Table.Cell py={4} fontWeight="500" color="brand.primary" fontSize="sm">
                        {client.name}
                      </Table.Cell>
                      <Table.Cell py={4} color="brand.primary" fontSize="sm">
                        {client.program}
                      </Table.Cell>
                      <Table.Cell py={4} textAlign="center" color="brand.primary" fontSize="sm">
                        {client.sessions}
                      </Table.Cell>
                      <Table.Cell py={4}>
                        <HStack gap={2}>
                          <Box
                            w="8px"
                            h="8px"
                            borderRadius="full"
                            bg={client.statusColor === 'green' ? 'brand.success' : 
                                client.statusColor === 'red' ? 'brand.error' : 
                                'brand.warning'}
                          />
                          <Text fontSize="sm" color="brand.primary">{client.status}</Text>
                        </HStack>
                      </Table.Cell>
                      <Table.Cell py={4}>
                        <Box>
                          <HStack justify="space-between" mb={1}>
                            <Progress.Root value={client.progress} size="sm" w="120px">
                              <Progress.Track borderRadius="full" bg="gray.100" h="8px">
                                <Progress.Range 
                                  bg={client.statusColor === 'green' ? 'brand.success' : 
                                      client.statusColor === 'red' ? 'brand.error' : 
                                      'brand.warning'} 
                                  borderRadius="full" 
                                />
                              </Progress.Track>
                            </Progress.Root>
                            <Text fontSize="sm" color="brand.primary" fontWeight="500">
                              {client.progress}%
                            </Text>
                          </HStack>
                        </Box>
                      </Table.Cell>
                      <Table.Cell py={4} color="brand.secondary" fontSize="sm">
                        {client.lastVisit}
                      </Table.Cell>
                      <Table.Cell py={4}>
                        <Button
                          size="sm"
                          variant="ghost"
                          color="brand.links"
                          fontSize="sm"
                          _hover={{ color: "brand.primary" }}
                          onClick={() => openClientDetails(client)}
                        >
                          Details <FiExternalLink />
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </Box>

            {/* Pagination */}
            <Flex 
              justify="space-between" 
              align="center" 
              mt={4}
              direction={{ base: "column", md: "row" }}
              gap={{ base: 4, md: 0 }}
            >
              <Text fontSize={{ base: "xs", md: "xs" }} color="brand.secondary" fontWeight="500" textAlign="center">
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredData.length)} of {filteredData.length} clients
              </Text>
              
              <Flex gap={1} wrap="wrap" justify="center">
                <Button
                  size={{ base: "xs", md: "sm" }}
                  variant="outline"
                  fontSize="xs"
                  color="brand.secondary"
                  borderColor="gray.200"
                  _hover={{ bg: "brand.bg" }}
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const pageNum = i + 1
                  return (
                    <Button
                      key={pageNum}
                      size={{ base: "xs", md: "sm" }}
                      variant={currentPage === pageNum ? "solid" : "outline"}
                      fontSize="xs"
                      bg={currentPage === pageNum ? "brand.links" : "white"}
                      color={currentPage === pageNum ? "white" : "brand.secondary"}
                      borderColor={currentPage === pageNum ? "brand.links" : "gray.200"}
                      _hover={{ 
                        bg: currentPage === pageNum ? "brand.links" : "brand.bg" 
                      }}
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </Button>
                  )
                })}
                
                <Button
                  size={{ base: "xs", md: "sm" }}
                  variant="outline"
                  fontSize="xs"
                  color="brand.secondary"
                  borderColor="gray.200"
                  _hover={{ bg: "brand.bg" }}
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Box>

        {/* Client Details Dialog */}
        <Dialog.Root open={isModalOpen} onOpenChange={(details) => setIsModalOpen(details.open)}>
          <Portal>
            <Dialog.Backdrop bg="blackAlpha.600" />
            <Dialog.Positioner>
              <Dialog.Content 
                bg="white" 
                borderRadius="lg" 
                p={{ base: 4, md: 6 }} 
                maxW={{ base: "90vw", md: "500px" }}
                mx={{ base: 4, md: 0 }}
              >
                <Dialog.Header>
                  <Dialog.Title fontSize={{ base: "md", md: "lg" }} fontWeight="600" color="brand.primary">
                    Client Details
                  </Dialog.Title>
                </Dialog.Header>
                
                <Dialog.Body mt={4}>
                  {selectedClient && (
                    <Box>
                      <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="600" color="brand.primary" mb={4}>
                        {selectedClient.name}
                      </Text>
                      
                      <Box mb={6}>
                        <HStack justify="space-between" mb={2}>
                          <Text fontSize="sm" color="brand.secondary">Status:</Text>
                          <HStack gap={2}>
                            <Box
                              w="8px"
                              h="8px"
                              borderRadius="full"
                              bg={selectedClient.statusColor === 'green' ? 'brand.success' : 
                                  selectedClient.statusColor === 'red' ? 'brand.error' : 
                                  'brand.warning'}
                            />
                            <Text fontSize="sm" color="brand.primary">{selectedClient.status}</Text>
                          </HStack>
                        </HStack>
                        
                        <HStack justify="space-between" mb={2}>
                          <Text fontSize="sm" color="brand.secondary">Progress:</Text>
                          <Text fontSize="sm" color="brand.primary" fontWeight="500">
                            {selectedClient.progress}%
                          </Text>
                        </HStack>
                      </Box>
                      
                      <Box mb={4}>
                        <Text fontSize="sm" fontWeight="600" color="brand.primary" mb={3}>
                          Demographics
                        </Text>
                        <HStack justify="space-between" mb={2}>
                          <Text fontSize="sm" color="brand.secondary">Country of Origin:</Text>
                          <Text fontSize="sm" color="brand.primary">{selectedClient.country}</Text>
                        </HStack>
                        <HStack justify="space-between" mb={2}>
                          <Text fontSize="sm" color="brand.secondary">Age:</Text>
                          <Text fontSize="sm" color="brand.primary">{selectedClient.age}</Text>
                        </HStack>
                        <HStack justify="space-between" mb={2}>
                          <Text fontSize="sm" color="brand.secondary">Address:</Text>
                          <Text fontSize="sm" color="brand.primary">{selectedClient.address}</Text>
                        </HStack>
                      </Box>
                      
                      <Box>
                        <Text fontSize="sm" fontWeight="600" color="brand.primary" mb={3}>
                          Program Information
                        </Text>
                        <HStack justify="space-between" mb={2}>
                          <Text fontSize="sm" color="brand.secondary">Program:</Text>
                          <Text fontSize="sm" color="brand.primary">{selectedClient.program}</Text>
                        </HStack>
                        <HStack justify="space-between" mb={2}>
                          <Text fontSize="sm" color="brand.secondary">Sessions Completed:</Text>
                          <Text fontSize="sm" color="brand.primary">{selectedClient.sessions}</Text>
                        </HStack>
                        <HStack justify="space-between" mb={2}>
                          <Text fontSize="sm" color="brand.secondary">Enrolled:</Text>
                          <Text fontSize="sm" color="brand.primary">{selectedClient.enrolled}</Text>
                        </HStack>
                        <HStack justify="space-between" mb={2}>
                          <Text fontSize="sm" color="brand.secondary">Last Visit:</Text>
                          <Text fontSize="sm" color="brand.primary">{selectedClient.lastVisit}</Text>
                        </HStack>
                        <HStack justify="space-between">
                          <Text fontSize="sm" color="brand.secondary">Phone:</Text>
                          <Text fontSize="sm" color="brand.primary">{selectedClient.phone}</Text>
                        </HStack>
                      </Box>
                    </Box>
                  )}
                </Dialog.Body>
                
                <Dialog.Footer mt={6}>
                  <Button
                    variant="outline"
                    onClick={() => setIsModalOpen(false)}
                    color="brand.secondary"
                    size={{ base: "sm", md: "md" }}
                    w={{ base: "100%", md: "auto" }}
                  >
                    Close
                  </Button>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      </Box>
    </DashboardLayout>
  )
}