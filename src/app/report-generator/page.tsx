'use client'

import { 
  Box, 
  Text, 
  Flex, 
  Button,
  Grid,
  Icon,
  HStack
} from '@chakra-ui/react'
import { FiFileText, FiDownload, FiPlus } from 'react-icons/fi'
import DashboardLayout from '@/components/ui/DashboardLayout'

const reportTemplates = [
  {
    id: 1,
    title: 'Quarterly Services Report',
    description: 'Comprehensive overview of all client services and outcomes.',
    lastGenerated: 'Apr 15, 2025',
    icon: FiFileText,
  },
  {
    id: 2,
    title: 'ESL Program Performance',
    description: 'Detailed analysis of language program outcomes and metrics.',
    lastGenerated: 'Apr 15, 2025',
    icon: FiFileText,
  },
  {
    id: 3,
    title: 'Client Demographics Report',
    description: 'Breakdown of client demographics and service utilization.',
    lastGenerated: 'Apr 15, 2025',
    icon: FiFileText,
  },
  {
    id: 4,
    title: 'Annual Impact Report',
    description: 'Year-over-year analysis of program impacts and outcomes.',
    lastGenerated: 'Apr 15, 2025',
    icon: FiFileText,
  }
]

export default function ReportGeneratorPage() {
  return (
    <DashboardLayout>
      <Box p={6}>
        {/* Page Header */}
        <Flex justify="space-between" align="center" mb={6}>
          <Text fontSize="2xl" fontWeight="bold" color="gray.800">
            Report Generator
          </Text>
          
          <Button
            bg="blue.500"
            color="white"
            leftIcon={<FiPlus />}
            _hover={{ bg: 'blue.600' }}
            size="md"
          >
            Create Custom Report
          </Button>
        </Flex>

        {/* Report Templates Section */}
        <Box>
          <Text fontSize="lg" fontWeight="600" mb={2} color="gray.800">
            Report Templates
          </Text>
          <Text fontSize="sm" color="gray.500" mb={6}>
            Generate standardized reports with the latest client service data.
          </Text>

          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {reportTemplates.map((template) => (
              <Box
                key={template.id}
                bg="white"
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.200"
                p={6}
                _hover={{
                  boxShadow: 'sm',
                  borderColor: 'gray.300'
                }}
                transition="all 0.2s"
              >
                <HStack mb={4} gap={3}>
                  <Box
                    w="40px"
                    h="40px"
                    bg="blue.50"
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon color="blue.500" fontSize="20px">
                      <template.icon />
                    </Icon>
                  </Box>
                  <Box flex="1">
                    <Text fontSize="md" fontWeight="600" color="gray.800">
                      {template.title}
                    </Text>
                  </Box>
                </HStack>

                <Text fontSize="sm" color="gray.600" mb={4} minH="40px">
                  {template.description}
                </Text>

                <Text fontSize="xs" color="gray.400" mb={4}>
                  Last generated: {template.lastGenerated}
                </Text>

                <HStack gap={3}>
                  <Button
                    variant="outline"
                    size="sm"
                    color="gray.600"
                    borderColor="gray.300"
                    _hover={{
                      bg: 'gray.50'
                    }}
                  >
                    Preview
                  </Button>
                  <Button
                    bg="blue.500"
                    color="white"
                    size="sm"
                    leftIcon={<FiDownload />}
                    _hover={{
                      bg: 'blue.600'
                    }}
                  >
                    Generate
                  </Button>
                </HStack>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </DashboardLayout>
  )
}