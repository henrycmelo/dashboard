'use client'

import { Box, VStack, Text, Icon, HStack } from '@chakra-ui/react'
import { 
  FiHome, 
  FiBarChart2, 
  FiUsers, 
  FiFileText, 
  FiSettings,
  FiMap
} from 'react-icons/fi'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const menuItems = [
  { icon: FiHome, label: 'Overview', href: '/' },
  { icon: FiMap, label: 'Client Distribution', href: '/map' },
  { icon: FiBarChart2, label: 'Service Analysis', href: '/service-analysis' },
  { icon: FiUsers, label: 'Client Progress', href: '/client-progress' },
  { icon: FiFileText, label: 'Report Generator', href: '/report-generator' },
  { icon: FiSettings, label: 'Settings', href: '#' },
]

export default function Sidebar() {
  const pathname = usePathname()
  
  return (
    <Box
      w="250px"
      h="100vh"
      bg="white"
      borderRight="1px solid"
      borderColor="gray.200"
      p={4}
    >
      {/* Logo */}
      <Box mb={8} px={3}>
        <HStack gap={2}>
          <Box 
            bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            w="40px"
            h="40px"
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontWeight="bold"
            fontSize="sm"
          >
            ciana
          </Box>
        </HStack>
      </Box>

      <VStack align="stretch" gap={1}>
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.label} href={item.href} style={{ textDecoration: 'none' }}>
              <HStack
                p={3}
                borderRadius="md"
                bg={isActive ? 'blue.50' : 'transparent'}
                color={isActive ? 'blue.600' : 'gray.600'}
                cursor="pointer"
                _hover={{ bg: isActive ? 'blue.50' : 'gray.50' }}
                gap={3}
              >
                <Icon fontSize="20px">
                  <item.icon />
                </Icon>
                <Text fontSize="sm" fontWeight={isActive ? '500' : '400'}>
                  {item.label}
                </Text>
              </HStack>
            </Link>
          )
        })}
      </VStack>

      <Box position="absolute" bottom={4} left={4} right={4}>
        <HStack gap={3} p={3}>
          <Box
            w="32px"
            h="32px"
            borderRadius="full"
            bg="blue.500"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontSize="sm"
            fontWeight="bold"
          >
            SC
          </Box>
          <Box>
            <Text fontSize="sm" fontWeight="500">Sofia Rodriguez</Text>
            <Text fontSize="xs" color="gray.500">Program Director</Text>
          </Box>
        </HStack>
      </Box>
    </Box>
  )
}