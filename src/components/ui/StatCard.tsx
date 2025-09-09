"use client";

import { Box, Text, HStack, Icon, VStack } from "@chakra-ui/react";
import { FiTrendingUp } from "react-icons/fi";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  bgColor: string;
}

export default function StatCard({
  icon,
  label,
  value,
  change,
  bgColor,
}: StatCardProps) {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="0 1px 2px -1px rgba(0, 0, 0, 0.10), 0 1px 3px 0 rgba(0, 0, 0, 0.10)"
    >
      <HStack gap={{ base: 3, md: 4 }} align="flex-start" p={{ base: 4, md: 5 }}>
        <Box
          w={{ base: "40px", md: "48px" }}
          h={{ base: "40px", md: "48px" }}
          bg={bgColor}
          borderRadius="lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="brand.white"
          fontSize={{ base: "20px", md: "24px" }}
        >
          {icon}
        </Box>
        <VStack align="flex-start" gap={{ base: 1, md: 2 }}>
          <Text fontSize={{ base: "xs", md: "xs" }} color="brand.secondary">
            {label}
          </Text>
          <Text 
            fontSize={{ base: "lg", md: "xl" }} 
            fontWeight="bold" 
            color="brand.primary"
          >
            {value}
          </Text>
        </VStack>
      </HStack>

      <HStack 
        bg="brand.bg" 
        gap={1} 
        px={{ base: 4, md: 5 }} 
        py={{ base: 2, md: 3 }} 
        borderBottomRadius="lg"
      >
        <Icon color="brand.success" fontSize={{ base: "14px", md: "16px" }}>
          <FiTrendingUp />
        </Icon>
        <Text 
          fontSize={{ base: "xs", md: "sm" }} 
          color="brand.success" 
          fontWeight="500"
        >
          {change}
        </Text>
        <Text fontSize={{ base: "xs", md: "sm" }} color="brand.secondary">
          from last year
        </Text>
      </HStack>
    </Box>
  );
}