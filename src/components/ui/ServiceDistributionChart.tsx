"use client";

import { Box, Text, VStack, HStack, useToken } from "@chakra-ui/react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "ESL Classes", value: 30, color: "brand.eslGreen" },
  { name: "Legal", value: 30, color: "brand.legalYellow" },
  { name: "Health", value: 30, color: "brand.purpleHealth" },
];

export default function ServiceDistributionChart() {
  const colors = useToken(
    "colors",
    data.map((item) => item.color)
  );

  const chartData = data.map((item, index) => ({
    ...item,
    actualColor: colors[index],
  }));

  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow={
        "0 1px 2px -1px rgba(0, 0, 0, 0.10), 0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 0 0 0 rgba(0, 0, 0, 0.00), 0 0 0 0 rgba(0, 0, 0, 0.00)"
      }
      p={5}
      minH="400px" 
      w="100%"
      h="100%" 
    >
      <Text fontSize="md" fontWeight="600" mb={4} color={'brand.primary'}>
        Client Distribution by Service Type
      </Text>

      <Box h="250px" mb={4}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.actualColor} />
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
              <Text fontSize="sm" color="brand.secondary">
                {item.name}
              </Text>
            </HStack>
            <Text fontSize="sm" color="brand.secondary">
              ({item.value}%)
            </Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}
