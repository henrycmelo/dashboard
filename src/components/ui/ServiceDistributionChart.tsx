'use client'

import { Box, Text, VStack, HStack } from '@chakra-ui/react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'ESL Classes', value: 30, color: '#10B981' },
  { name: 'Legal', value: 30, color: '#F59E0B' },
  { name: 'Health', value: 30, color: '#8B5CF6' },
]

export default function ServiceDistributionChart() {
  return (
    <Box bg="white" p={6} borderRadius="lg" border="1px solid" borderColor="gray.200">
      <Text fontSize="lg" fontWeight="600" mb={4}>
        Client Distribution by Service Type
      </Text>
      
      <Box h="250px" mb={4}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>
      
      <VStack align="stretch" gap={2}>
        {data.map((item) => (
          <HStack key={item.name} justify="space-between">
            <HStack gap={2}>
              <Box w="12px" h="12px" borderRadius="full" bg={item.color} />
              <Text fontSize="sm" color="gray.600">{item.name}</Text>
            </HStack>
            <Text fontSize="sm" color="gray.500">({item.value}%)</Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  )
}