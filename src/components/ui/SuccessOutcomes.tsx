'use client'

import { Box, Text, HStack } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react/progress'

const outcomes = [
  { label: 'Goals Achieved', value: 44, count: '1248 clients', color: 'brand.success' },
  { label: 'In Progress', value: 31, count: '876 clients', color: 'brand.warning' },
  { label: 'Needs Support', value: 17, count: '482 clients', color: 'brand.error' },
  { label: 'Recently Enrolled', value: 8, count: '241 clients', color: 'brand.secondary' },
]

export default function SuccessOutcomes() {
  return (
    <Box 
      bg="white" 
      p={{ base: 4, md: 5 }} 
      borderRadius="lg"
      boxShadow="0 1px 2px -1px rgba(0, 0, 0, 0.10), 0 1px 3px 0 rgba(0, 0, 0, 0.10)"
      minH={{ base: "auto", md: "400px" }}
      w="100%"
      h="100%" 
    >
      <Text 
        fontSize={{ base: "sm", md: "md" }} 
        fontWeight="600" 
        mb={4} 
        color="brand.primary"
      >
        Client Outcome by Status
      </Text>
      
      <Box 
        display="grid" 
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} 
        gap={{ base: 3, md: 5 }}
      >
        {outcomes.map((outcome) => (
          <Box key={outcome.label} bg="brand.bg" p={3} borderRadius="md">
            <HStack justify="space-between" mb={2}>
              <Text fontSize={{ base: "xs", md: "sm" }} color="brand.primary">
                {outcome.label}
              </Text>
              <Text 
                fontSize={{ base: "xs", md: "sm" }} 
                fontWeight="600" 
                color="brand.primary"
              >
                {outcome.value}%
              </Text>
            </HStack>
            <Progress.Root value={outcome.value} size="sm">
              <Progress.Track borderRadius="full" bg="brand.bgprogress">
                <Progress.Range bg={outcome.color} borderRadius="full" />
              </Progress.Track>
            </Progress.Root>
            <Text 
              fontSize="xs" 
              color="brand.secondary" 
              textAlign="right" 
              mt={1}
            >
              {outcome.count}
            </Text>
          </Box>
        ))}
      </Box>
      
      <Box 
        mt={{ base: 4, md: 6 }} 
        pt={{ base: 4, md: 6 }} 
        borderTop="1px solid" 
        borderColor="brand.divider"
      >
        <Text 
          fontSize={{ base: "xs", md: "sm" }} 
          color="brand.primary" 
          mb={2}
        >
          Overall Success Rate
        </Text>
        <HStack justify="space-between" align="center">
          <Text fontSize="xs" color="brand.secondary">
            Success Metrics
          </Text>
          <Text 
            fontSize={{ base: "xs", md: "sm" }} 
            color="brand.primary" 
            fontWeight="600"
          >
            78% Goal Achievement Rate (YTD)
          </Text>
        </HStack>
        <Progress.Root value={78} size="sm" mt={2}>
          <Progress.Track borderRadius="full" bg="brand.bgprogress">
            <Progress.Range bg="brand.iconBlue" borderRadius="full" />
          </Progress.Track>
        </Progress.Root>
      </Box>
    </Box>
  )
}