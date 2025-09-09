"use client";

import { Box, Text, Flex, SimpleGrid } from "@chakra-ui/react";
import { FiUsers, FiBookOpen, FiShield, FiHeart } from "react-icons/fi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import DashboardLayout from "@/components/ui/DashboardLayout";
import StatCard from "@/components/ui/StatCard";
import ServiceDistributionChart from "@/components/ui/ServiceDistributionChart";
import SuccessOutcomes from "@/components/ui/SuccessOutcomes";

// Monthly data for the bar chart
const monthlyData = [
  { month: "Apr 24", clients: 6800 },
  { month: "May 24", clients: 7000 },
  { month: "Jun 24", clients: 7200 },
  { month: "Jul 24", clients: 7500 },
  { month: "Aug 24", clients: 7700 },
  { month: "Sep 24", clients: 7900 },
  { month: "Oct 24", clients: 8200 },
  { month: "Nov 24", clients: 8400 },
  { month: "Dec 24", clients: 8700 },
  { month: "Jan 25", clients: 9000 },
  { month: "Feb 25", clients: 9400 },
  { month: "Mar 25", clients: 10000 },
];

export default function Home() {
  return (
    <DashboardLayout>
      <Box p={{ base: 4, md: 6 }}>
        {/* Dashboard Title */}
        <Flex 
          justify={{ base: "center", md: "space-between" }} 
          align="center" 
          mb={6}
          direction={{ base: "column", md: "row" }}
          gap={{ base: 2, md: 0 }}
        >
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="brand.primary">
            Analysis Overview
          </Text>
          <Text fontSize="sm" color="brand.secondary">
            Last updated: Today at 9:41 AM
          </Text>
        </Flex>

        {/* Stat Cards - Responsive Grid */}
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={4} mb={6}>
          <StatCard
            icon={<FiUsers />}
            label="Total Clients Served"
            value="10,500"
            change="+14.3%"
            bgColor="brand.iconBlue"
          />
          <StatCard
            icon={<FiBookOpen />}
            label="Total ESL Participants"
            value="2,847"
            change="+14.3%"
            bgColor="brand.eslGreen"
          />
          <StatCard
            icon={<FiShield />}
            label="Total Legal Cases"
            value="2,847"
            change="+14.3%"
            bgColor="brand.legalYellow"
          />
          <StatCard
            icon={<FiHeart />}
            label="Total Healthcare"
            value="2,847"
            change="+14.3%"
            bgColor="brand.purpleHealth"
          />
        </SimpleGrid>

        {/* Charts Section - Responsive Layout */}
        <Flex 
          gap={4} 
          mb={6} 
          direction={{ base: "column", lg: "row" }}
        >
          <Box flex="1">
            <ServiceDistributionChart />
          </Box>
          <Box flex="1">
            <SuccessOutcomes />
          </Box>
        </Flex>

        {/* Bar Chart - Clients Served Last 12 Months */}
        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="0 1px 2px -1px rgba(0, 0, 0, 0.10), 0 1px 3px 0 rgba(0, 0, 0, 0.10)"
          p={{ base: 4, md: 5 }}
        >
          <Text fontSize="md" fontWeight="600" mb={4} color="brand.primary">
            Clients Served Last 12 Months
          </Text>

          <Box h={{ base: "300px", md: "400px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 12, fill: "#1F2937" }}
                  axisLine={{ stroke: "#E5E7EB" }}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: "#1F2937" }}
                  axisLine={{ stroke: "#e5e7eb" }}
                  domain={[0, 12000]}
                  ticks={[0, 2000, 4000, 6000, 8000, 10000]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "6px",
                  }}
                  labelStyle={{ fontWeight: 600, marginBottom: "4px" }}
                />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="rect"
                  wrapperStyle={{ fontSize: "14px" }}
                  formatter={(value) => (
                    <span style={{ color: "#1F2937" }}>{value}</span>
                  )}
                />
                <Bar
                  dataKey="clients"
                  fill="#3B82F6"
                  name="Last 12 Months"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Box>
    </DashboardLayout>
  );
}