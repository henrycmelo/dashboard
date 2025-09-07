'use client'

import { Box, Flex } from '@chakra-ui/react'
import Sidebar from "./SideBar"
import Header from './Header'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex h="100vh" bg="gray.50">
      <Sidebar />
      <Box flex="1" display="flex" flexDirection="column">
        <Header />
        <Box flex="1" overflow="auto" bg={'brand.bg'}>
          {children}
        </Box>
      </Box>
    </Flex>
  )
}