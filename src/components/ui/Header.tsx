'use client'

import { 
  Box, 
  Flex, 
  Text, 
  Input, 
  Button, 
  HStack,
  Icon
} from '@chakra-ui/react'
import { FiSearch, FiDownload, FiBell } from 'react-icons/fi'

export default function Header() {
  return (
    <Box bg="white" px={6} py={4} borderBottom="1px solid" borderColor="gray.200">
      <Flex justify="space-between" align="center">
        <Text fontSize="lg" fontWeight="500" color="gray.800">
          Immigrant Support Services Dashboard
        </Text>

        <HStack gap={3}>
          {/* Search Bar */}
          <Box position="relative">
            <Icon position="absolute" left={3} top="50%" transform="translateY(-50%)" color="gray.400">
              <FiSearch />
            </Icon>
            <Input
              placeholder="Search clients..."
              pl={10}
              w="300px"
              bg="gray.50"
              border="1px solid"
              borderColor="gray.200"
              _focus={{
                borderColor: 'blue.400',
                bg: 'white'
              }}
            />
          </Box>

          {/* Notification Icon */}
          <Button variant="ghost" p={2}>
            <Icon fontSize="20px" color="gray.600">
              <FiBell />
            </Icon>
          </Button>

          {/* Export Button */}
          <Button
            bg="blue.500"
            color="white"
            _hover={{ bg: 'blue.600' }}
          >
           <FiDownload />Export
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}