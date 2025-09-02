'use client'

import { Box, Text, HStack, Icon } from '@chakra-ui/react'
import { FiTrendingUp } from 'react-icons/fi'

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string
  change: string
  color: string
  bgColor: string
}

export default function StatCard({ icon, label, value, change, color, bgColor }: StatCardProps) {
  return (
    <Box bg="white" p={5} borderRadius="lg" border="1px solid" borderColor="gray.200">
      <HStack justify="space-between" mb={3}>
        <Box
          w="40px"
          h="40px"
          bg={bgColor}
          borderRadius="lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
        >
          {icon}
        </Box>
      </HStack>
      
      <Text fontSize="xs" color="gray.500" mb={1}>
        {label}
      </Text>
      
      <Text fontSize="2xl" fontWeight="bold" mb={2}>
        {value}
      </Text>
      
      <HStack gap={1}>
        <Icon color="green.500" fontSize="16px">
          <FiTrendingUp />
        </Icon>
        <Text fontSize="sm" color="green.500" fontWeight="500">
          {change}
        </Text>
        <Text fontSize="sm" color="gray.400">
          from last year
        </Text>
      </HStack>
    </Box>
  )
}