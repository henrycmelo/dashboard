'use client'

import { Box, Text, VStack, HStack } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react/progress'

const outcomes = [
  { label: 'Goals Achieved', value: 44, count: '1248 clients', color: 'green.500' },
  { label: 'In Progress', value: 31, count: '876 clients', color: 'orange.500' },
  { label: 'Needs Support', value: 17, count: '482 clients', color: 'red.500' },
  { label: 'Recently Enrolled', value: 8, count: '241 clients', color: 'gray.500' },
]

export default function SuccessOutcomes() {
  return (
    <Box bg="white" p={6} borderRadius="lg" border="1px solid" borderColor="gray.200">
      <Text fontSize="lg" fontWeight="600" mb={6}>
        Client Success Outcomes
      </Text>
      
      <VStack align="stretch" gap={5}>
        {outcomes.map((outcome) => (
          <Box key={outcome.label}>
            <HStack justify="space-between" mb={2}>
              <Text fontSize="sm" color="gray.700">{outcome.label}</Text>
              <HStack gap={6}>
                <Text fontSize="sm" fontWeight="600">{outcome.value}%</Text>
                <Text fontSize="xs" color="gray.500" minW="80px" textAlign="right">
                  {outcome.count}
                </Text>
              </HStack>
            </HStack>
            <Progress.Root value={outcome.value} size="sm">
              <Progress.Track borderRadius="full" bg="gray.100">
                <Progress.Range bg={outcome.color} borderRadius="full" />
              </Progress.Track>
            </Progress.Root>
          </Box>
        ))}
      </VStack>
      
      <Box mt={6} pt={6} borderTop="1px solid" borderColor="gray.200">
        <Text fontSize="sm" color="gray.600" mb={2}>Overall Success Rate</Text>
        <HStack justify="space-between" align="center">
          <Text fontSize="xs" color="gray.500">Success Metrics</Text>
          <Text fontSize="sm" fontWeight="600">78% success rate</Text>
        </HStack>
        <Progress.Root value={78} size="sm" mt={2}>
          <Progress.Track borderRadius="full" bg="gray.100">
            <Progress.Range bg="blue.500" borderRadius="full" />
          </Progress.Track>
        </Progress.Root>
      </Box>
    </Box>
  )
}