import { Box, Text, HStack, Button, Flex } from '@chakra-ui/react'
import { FiUsers, FiBookOpen, FiShield, FiHeart, FiFilter, FiChevronDown } from 'react-icons/fi'
import DashboardLayout from '@/components/ui/DashboardLayout'
import StatCard from '@/components/ui/StatCard'
import ServiceDistributionChart from '@/components/ui/ServiceDistributionChart'
import SuccessOutcomes from '@/components/ui/SuccessOutcomes'

export default function Home() {
  return (
    <DashboardLayout>
      <Box p={6}>
        {/* Dashboard Title and Filters */}
        <Flex justify="space-between" align="center" mb={6}>
          <Box>
            <Text fontSize="2xl" fontWeight="bold" color="gray.800">
              Client Services Dashboard
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
            >
              Filters
            </Button>
            
            <Button
              rightIcon={<FiChevronDown />}
              variant="outline"
              size="sm"
              fontSize="sm"
            >
              All Services
            </Button>
            
            <Button
              rightIcon={<FiChevronDown />}
              variant="outline"
              size="sm"
              fontSize="sm"
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

        {/* Stat Cards */}
        <Flex gap={4} mb={6}>
          <Box flex="1">
            <StatCard
              icon={<FiUsers />}
              label="Total Clients Served"
              value="10,500"
              change="+14.3%"
              color="blue"
              bgColor="blue.500"
            />
          </Box>
          
          <Box flex="1">
            <StatCard
              icon={<FiBookOpen />}
              label="Total ESL Participants"
              value="2,847"
              change="+14.3%"
              color="green"
              bgColor="green.500"
            />
          </Box>
          
          <Box flex="1">
            <StatCard
              icon={<FiShield />}
              label="Total Legal Cases"
              value="2,847"
              change="+14.3%"
              color="yellow"
              bgColor="yellow.500"
            />
          </Box>
          
          <Box flex="1">
            <StatCard
              icon={<FiHeart />}
              label="Healthcare Enrollments"
              value="2,847"
              change="+14.3%"
              color="purple"
              bgColor="purple.500"
            />
          </Box>
        </Flex>

        {/* Charts Section */}
        <Flex gap={4}>
          <Box flex="1">
            <ServiceDistributionChart />
          </Box>
          
          <Box flex="1">
            <SuccessOutcomes />
          </Box>
        </Flex>
      </Box>
    </DashboardLayout>
  )
}