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
      boxShadow={
        "0 1px 2px -1px rgba(0, 0, 0, 0.10), 0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 0 0 0 rgba(0, 0, 0, 0.00), 0 0 0 0 rgba(0, 0, 0, 0.00)"
      }
    >
      <HStack gap={4} align={"flex-start"} p={5}>
        <Box
          w="48px"
          h="48px"
          bg={bgColor}
          borderRadius="lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="brand.white"
          fontSize={"24px"}
        >
          {icon}
        </Box>
        <VStack align={"flex-start"}>
          <Text fontSize="xs" color="brand.secondary">
            {label}
          </Text>
          <Text fontSize="md" fontWeight="bold" color={"brand.primary"}>
            {value}
          </Text>
        </VStack>
      </HStack>

      <HStack bg={"brand.bg"} gap={1} px={5} py={3} borderBottomRadius="lg">
        <Icon color="brand.success" fontSize="16px" >
          <FiTrendingUp />
        </Icon>
        <Text fontSize="sm" color="brand.success" fontWeight="500">
          {change}
        </Text>
        <Text fontSize="sm" color="brand.secondary">
          from last year
        </Text>
      </HStack>
    </Box>
  );
}
