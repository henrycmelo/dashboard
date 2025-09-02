'use client'

import { Box, Text, Flex } from '@chakra-ui/react'
import DashboardLayout from '@/components/ui/DashboardLayout'

export default function MapPage() {
  return (
    <DashboardLayout>
      <Box p={6}>
        <Flex justify="space-between" align="center" mb={6}>
          <Box>
            <Text fontSize="2xl" fontWeight="bold" color="gray.800">
              Client Distribution Map
            </Text>
            <Text fontSize="sm" color="gray.500" mt={1}>
              Geographic distribution by zip code
            </Text>
          </Box>
        </Flex>

        {/* Map Container */}
        <Box 
          bg="white" 
          borderRadius="lg" 
          border="1px solid" 
          borderColor="gray.200"
          h="calc(100vh - 200px)"
          overflow="hidden"
        >
          <iframe
            src="/map.html"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Client Distribution Map"
          />
        </Box>
      </Box>
    </DashboardLayout>
  )
}