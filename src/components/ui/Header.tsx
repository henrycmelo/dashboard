'use client'

import { 
  Box, 
  Flex, 
  Text, 
  Button, 
  HStack,
  Icon
} from '@chakra-ui/react'
import { FiDownload, FiBell } from 'react-icons/fi'

export default function Header() {
  return (
    <Box bg="brand.white" px={6} py={4} borderBottom="1px solid" borderColor="brand.divider">
      <Flex justify="space-between" align="center">
        <Text fontSize="lg" fontWeight="500" color="brand.primary">
          Immigrant Support Services Dashboard
        </Text>

        <HStack gap={3}>
          {/* Notification Icon */}
          <Button variant="ghost" color="brand.secondary" p={2} _hover={{ bg: 'transparent', color:"brand.primary" }}>
            <Icon fontSize="20px" >
              <FiBell />
            </Icon>
          </Button>

          {/* Export Button */}
          <Button
            bg="brand.links"
            color="brand.white"
            _hover={{ bg: 'brand.linksHover' }}
            gap={2}
          >
            <FiDownload />
            Export
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}