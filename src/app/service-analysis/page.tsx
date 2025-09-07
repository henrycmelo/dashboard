"use client";

import React from "react";
import {
  Box,
  Text,
  Flex,
  HStack,
  Button,
  Table,
  Icon,
  Menu,
  Portal,
  MenuItem,
} from "@chakra-ui/react";
import { FiFilter, FiChevronDown, FiChevronRight } from "react-icons/fi";
import DashboardLayout from "@/components/ui/DashboardLayout";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const monthlyServiceData = {
  "English as Second Language": [
    { month: "Jan", enrolled: 72, attended: 58, attendanceRate: 81 },
    { month: "Feb", enrolled: 75, attended: 62, attendanceRate: 82 },
    { month: "Mar", enrolled: 71, attended: 59, attendanceRate: 83 },
    { month: "Apr", enrolled: 68, attended: 56, attendanceRate: 82 },
    { month: "May", enrolled: 70, attended: 59, attendanceRate: 84 },
    { month: "Jun", enrolled: 73, attended: 62, attendanceRate: 85 },
    { month: "Jul", enrolled: 76, attended: 64, attendanceRate: 84 },
    { month: "Aug", enrolled: 74, attended: 64, attendanceRate: 86 },
    { month: "Sep", enrolled: 72, attended: 61, attendanceRate: 85 },
    { month: "Oct", enrolled: 77, attended: 65, attendanceRate: 84 },
    { month: "Nov", enrolled: 74, attended: 61, attendanceRate: 83 },
    { month: "Dec", enrolled: 74, attended: 62, attendanceRate: 84 },
  ],
  "Legal Cases": [
    { month: "Jan", casesStarted: 38, casesCompleted: 27, completionRate: 72 },
    { month: "Feb", casesStarted: 40, casesCompleted: 29, completionRate: 73 },
    { month: "Mar", casesStarted: 42, casesCompleted: 31, completionRate: 74 },
    { month: "Apr", casesStarted: 39, casesCompleted: 29, completionRate: 75 },
    { month: "May", casesStarted: 41, casesCompleted: 31, completionRate: 76 },
    { month: "Jun", casesStarted: 43, casesCompleted: 33, completionRate: 77 },
    { month: "Jul", casesStarted: 40, casesCompleted: 30, completionRate: 76 },
    { month: "Aug", casesStarted: 42, casesCompleted: 33, completionRate: 78 },
    { month: "Sep", casesStarted: 41, casesCompleted: 32, completionRate: 77 },
    { month: "Oct", casesStarted: 43, casesCompleted: 33, completionRate: 76 },
    { month: "Nov", casesStarted: 40, casesCompleted: 30, completionRate: 75 },
    { month: "Dec", casesStarted: 44, casesCompleted: 33, completionRate: 76 },
  ],
  "Healthcare Enrollments": [
    {
      month: "Jan",
      targetEnrollments: 60,
      actualEnrollments: 53,
      quotaAchieved: 89,
    },
    {
      month: "Feb",
      targetEnrollments: 60,
      actualEnrollments: 54,
      quotaAchieved: 90,
    },
    {
      month: "Mar",
      targetEnrollments: 60,
      actualEnrollments: 55,
      quotaAchieved: 91,
    },
    {
      month: "Apr",
      targetEnrollments: 55,
      actualEnrollments: 51,
      quotaAchieved: 92,
    },
    {
      month: "May",
      targetEnrollments: 55,
      actualEnrollments: 51,
      quotaAchieved: 92,
    },
    {
      month: "Jun",
      targetEnrollments: 55,
      actualEnrollments: 51,
      quotaAchieved: 93,
    },
    {
      month: "Jul",
      targetEnrollments: 55,
      actualEnrollments: 51,
      quotaAchieved: 92,
    },
    {
      month: "Aug",
      targetEnrollments: 55,
      actualEnrollments: 51,
      quotaAchieved: 93,
    },
    {
      month: "Sep",
      targetEnrollments: 55,
      actualEnrollments: 51,
      quotaAchieved: 92,
    },
    {
      month: "Oct",
      targetEnrollments: 60,
      actualEnrollments: 55,
      quotaAchieved: 91,
    },
    {
      month: "Nov",
      targetEnrollments: 60,
      actualEnrollments: 55,
      quotaAchieved: 92,
    },
    {
      month: "Dec",
      targetEnrollments: 60,
      actualEnrollments: 55,
      quotaAchieved: 92,
    },
  ],
  "Digital Safety Workshops": [
    { month: "Jan", enrolled: 32, attended: 27, attendanceRate: 85 },
    { month: "Feb", enrolled: 34, attended: 29, attendanceRate: 86 },
    { month: "Mar", enrolled: 36, attended: 31, attendanceRate: 87 },
    { month: "Apr", enrolled: 33, attended: 29, attendanceRate: 88 },
    { month: "May", enrolled: 35, attended: 31, attendanceRate: 88 },
    { month: "Jun", enrolled: 37, attended: 33, attendanceRate: 89 },
    { month: "Jul", enrolled: 36, attended: 32, attendanceRate: 88 },
    { month: "Aug", enrolled: 38, attended: 34, attendanceRate: 89 },
    { month: "Sep", enrolled: 37, attended: 33, attendanceRate: 88 },
    { month: "Oct", enrolled: 39, attended: 34, attendanceRate: 87 },
    { month: "Nov", enrolled: 36, attended: 32, attendanceRate: 88 },
    { month: "Dec", enrolled: 35, attended: 31, attendanceRate: 88 },
  ],
};

const serviceData = [
  {
    category: "English as Second Language",
    clients: 876,
    sessions: 1245,
    avgSessions: 8.5,
    performance: 84, // Attendance Rate
    change: 12,
    trend: "up",
  },
  {
    category: "Legal Cases",
    clients: 493,
    sessions: 782,
    avgSessions: 6.2,
    performance: 76, // Completion Rate
    change: 8,
    trend: "up",
  },
  {
    category: "Healthcare Enrollments",
    clients: 621,
    sessions: 845,
    avgSessions: 4.8,
    performance: 92, // Quota Achievement
    change: 15,
    trend: "up",
  },
  {
    category: "Digital Safety Workshops",
    clients: 428,
    sessions: 612,
    avgSessions: 3.2,
    performance: 88, // Attendance Rate
    change: 5,
    trend: "up",
  },
];

export default function ServiceAnalysisPage() {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [serviceFilter, setServiceFilter] = useState<string>("All");

  const totalClients = serviceData.reduce((sum, item) => sum + item.clients, 0);
  const totalSessions = serviceData.reduce(
    (sum, item) => sum + item.sessions,
    0
  );
  const avgSessionsOverall = (totalSessions / totalClients).toFixed(1);
  const avgPerformance = Math.round(
    serviceData.reduce((sum, item) => sum + item.performance, 0) /
      serviceData.length
  );

  const toggleRow = (category: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedRows(newExpanded);
  };

  const resetFilters = () => {
    setServiceFilter("All");
    setExpandedRows(new Set());
  };

  const getPerformanceLabel = (category: string) => {
    if (
      category === "English as Second Language" ||
      category === "Digital Safety Workshops"
    ) {
      return "Attendance";
    } else if (category === "Legal Cases") {
      return "Completion";
    } else if (category === "Healthcare Enrollments") {
      return "Quota Met";
    }
    return "Performance";
  };

  // Filtered list used in the table & in the menu
  const filteredServices = serviceData.filter(
    (s) => serviceFilter === "All" || s.category === serviceFilter
  );

  return (
    <DashboardLayout>
      <Box p={6}>
        {/* Page Header */}
        <Flex justify="space-between" align="center" mb={6}>
          <Box>
            <Text fontSize="2xl" fontWeight="bold" color="gray.800">
              Service Analysis
            </Text>
            <Text fontSize="sm" color="gray.500" mt={1}>
              Last updated: Today at 9:41 AM
            </Text>
          </Box>

          <HStack gap={3}>
            <HStack color={"brand.secondary"}>
              <FiFilter />

              <Text fontSize="sm" color="brand.secondary">
                Filters
              </Text>
            </HStack>

            {/* ===== Menu-based service selector (replaces "All Services" button) ===== */}
            <Menu.Root>
              <Menu.Trigger asChild>
                <Button
                  rightIcon={<FiChevronDown />}
                  variant="outline"
                  size="sm"
                  fontSize="sm"
                  color="gray.700"
                  width="220px"
                  textAlign="left"
                >
                  {serviceFilter === "All" ? "All Services" : serviceFilter}
                </Button>
              </Menu.Trigger>

              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item onClick={() => setServiceFilter("All")}>
                      All Services
                    </Menu.Item>

                    <Menu.Separator />

                    <Menu.ItemGroup>
                      {serviceData.map((s) => (
                        <Menu.Item
                          key={s.category}
                          onClick={() => setServiceFilter(s.category)}
                        >
                          {s.category}
                        </Menu.Item>
                      ))}
                    </Menu.ItemGroup>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>

            <Button
              rightIcon={<FiChevronDown />}
              variant="outline"
              size="sm"
              fontSize="sm"
              color="gray.700"
            >
              Last 12 Months
            </Button>

            <Button variant="ghost" size="sm" fontSize="sm" color="blue.500">
              More Filters
            </Button>

            <Button
              variant="ghost"
              size="sm"
              fontSize="sm"
              color="blue.500"
              onClick={resetFilters}
            >
              Reset
            </Button>
          </HStack>
        </Flex>

        {/* Services Table */}
        <Box
          bg="white"
          borderRadius="lg"
          boxShadow={
            "0 1px 2px -1px rgba(0, 0, 0, 0.10), 0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 0 0 0 rgba(0, 0, 0, 0.00), 0 0 0 0 rgba(0, 0, 0, 0.00)"
          }
        >
          <Box p={5}>
            <Text fontSize="md" fontWeight="600" mb={4} color={"brand.primary"}>
              Services by Category
            </Text>
            <Text fontSize="sm" color="brand.secondary" mb={6}>
              Detailed breakdown of all client services and outcomes.
            </Text>

            <Table.Root
              size="lg"
              interactive
              css={{
                "& td": {
                  borderBottom: "none",
                },
                "& th": {
                  borderBottom: "none",
                },
                "& tr": {
                  borderBottom: "none",
                },
              }}
            >
              <Table.Header>
                <Table.Row bg="brand.bg">
                  <Table.ColumnHeader
                    py={3}
                    color="brand.secondary"
                    fontSize="xs"
                    fontWeight="600"
                    textTransform="uppercase"
                  >
                    Service Category
                  </Table.ColumnHeader>
                  <Table.ColumnHeader
                    py={3}
                    color="brand.secondary"
                    fontSize="xs"
                    fontWeight="600"
                    textTransform="uppercase"
                    textAlign="right"
                  >
                    Clients
                  </Table.ColumnHeader>
                  <Table.ColumnHeader
                    py={3}
                    color="brand.secondary"
                    fontSize="xs"
                    fontWeight="600"
                    textTransform="uppercase"
                    textAlign="right"
                  >
                    Sessions
                  </Table.ColumnHeader>
                  <Table.ColumnHeader
                    py={3}
                    color="brand.secondary"
                    fontSize="xs"
                    fontWeight="600"
                    textTransform="uppercase"
                    textAlign="right"
                  >
                    Avg. Sessions
                  </Table.ColumnHeader>
                  <Table.ColumnHeader
                    py={3}
                    color="brand.secondary"
                    fontSize="xs"
                    fontWeight="600"
                    textTransform="uppercase"
                    textAlign="right"
                  >
                    Performance
                  </Table.ColumnHeader>
                  <Table.ColumnHeader
                    py={3}
                    color="brand.secondary"
                    fontSize="xs"
                    fontWeight="600"
                    textTransform="uppercase"
                    textAlign="right"
                  >
                    YoY Change
                  </Table.ColumnHeader>
                  <Table.ColumnHeader py={3}></Table.ColumnHeader>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {filteredServices.map((service) => (
                  <React.Fragment key={service.category}>
                    <Table.Row key={`${service.category}-row`} bg="brand.white">
                      <Table.Cell
                        py={4}
                        fontWeight="500"
                        color="brand.primary"
                        fontSize={"sm"}
                      >
                        {service.category}
                      </Table.Cell>
                      <Table.Cell
                        py={4}
                        textAlign="right"
                        color="brand.primary"
                        fontSize={"sm"}
                      >
                        {service.clients.toLocaleString()}
                      </Table.Cell>
                      <Table.Cell
                        py={4}
                        textAlign="right"
                        color="brand.primary"
                        fontSize={"sm"}
                      >
                        {service.sessions.toLocaleString()}
                      </Table.Cell>
                      <Table.Cell
                        py={4}
                        textAlign="right"
                        color="brand.primary"
                        fontSize={"sm"}
                      >
                        {service.avgSessions}
                      </Table.Cell>
                      <Table.Cell
                        py={4}
                        textAlign="right"
                        color="brand.primary"
                        fontSize={"sm"}
                      >
                        <Box>
                          <Text>{service.performance}%</Text>
                          <Text fontSize="xs" color="brand.secondary">
                            {getPerformanceLabel(service.category)}
                          </Text>
                        </Box>
                      </Table.Cell>
                      <Table.Cell py={4} textAlign="right">
                        <Text color="brand.success" fontWeight="500">
                          +{service.change}%
                        </Text>
                      </Table.Cell>
                      <Table.Cell py={4} textAlign="right">
                        <Icon
                          as={FiChevronRight}
                          color="brand.links"
                          cursor="pointer"
                          _hover={{ color: "brand.primary" }}
                          onClick={() => toggleRow(service.category)}
                          transform={
                            expandedRows.has(service.category)
                              ? "rotate(90deg)"
                              : "rotate(0deg)"
                          }
                          transition="transform 0.2s"
                        />
                      </Table.Cell>
                    </Table.Row>

                    {expandedRows.has(service.category) && (
                      <Table.Row key={`${service.category}-expand`}>
                        <Table.Cell colSpan={7} p={0} bg="brand.white">
                          <Box p={6}>
                            <Text fontSize="xs" mb={4} color="brand.primary">
                              Monthly Performance Trends - {service.category}
                            </Text>
                            <Box h="250px">
                              <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                  data={monthlyServiceData[service.category]}
                                >
                                  <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke="#E5E7EB"
                                  />
                                  <XAxis
                                    dataKey="month"
                                    tick={{ fontSize: 11, fill: "#6b7280" }}
                                    axisLine={{ stroke: "#e5e7eb" }}
                                  />
                                  <YAxis
                                    tick={{ fontSize: 11, fill: "#6b7280" }}
                                    axisLine={{ stroke: "#e5e7eb" }}
                                  />
                                  <Tooltip
                                    contentStyle={{
                                      backgroundColor: "white",
                                      border: "1px solid #e5e7eb",
                                      borderRadius: "6px",
                                      fontSize: "12px",
                                    }}
                                  />
                                  <Legend
                                    wrapperStyle={{ fontSize: "12px" }}
                                    iconType="line"
                                  />
                                  {/* Conditional rendering based on service type */}
                                  {service.category ===
                                    "English as Second Language" ||
                                  service.category ===
                                    "Digital Safety Workshops" ? (
                                    <>
                                      <Line
                                        type="monotone"
                                        dataKey="enrolled"
                                        stroke="#3b82f6"
                                        strokeWidth={2}
                                        dot={{ r: 3 }}
                                        name="Enrolled"
                                      />
                                      <Line
                                        type="monotone"
                                        dataKey="attendanceRate"
                                        stroke="#059669"
                                        strokeWidth={2}
                                        dot={{ r: 3 }}
                                        name="Attendance Rate (%)"
                                      />
                                    </>
                                  ) : service.category === "Legal Cases" ? (
                                    <>
                                      <Line
                                        type="monotone"
                                        dataKey="casesStarted"
                                        stroke="#3b82f6"
                                        strokeWidth={2}
                                        dot={{ r: 3 }}
                                        name="Cases Started"
                                      />
                                      <Line
                                        type="monotone"
                                        dataKey="completionRate"
                                        stroke="#059669"
                                        strokeWidth={2}
                                        dot={{ r: 3 }}
                                        name="Completion Rate (%)"
                                      />
                                    </>
                                  ) : service.category ===
                                    "Healthcare Enrollments" ? (
                                    <>
                                      <Line
                                        type="monotone"
                                        dataKey="actualEnrollments"
                                        stroke="#3b82f6"
                                        strokeWidth={2}
                                        dot={{ r: 3 }}
                                        name="Actual Enrollments"
                                      />
                                      <Line
                                        type="monotone"
                                        dataKey="quotaAchieved"
                                        stroke="#059669"
                                        strokeWidth={2}
                                        dot={{ r: 3 }}
                                        name="Quota Achievement (%)"
                                      />
                                    </>
                                  ) : null}
                                </LineChart>
                              </ResponsiveContainer>
                            </Box>
                          </Box>
                        </Table.Cell>
                      </Table.Row>
                    )}
                  </React.Fragment>
                ))}

                {/* Total Row */}
                <Table.Row bg="brand.bg" fontWeight="600">
                  <Table.Cell py={4} color="brand.primary">
                    Total
                  </Table.Cell>
                  <Table.Cell py={4} textAlign="right" color="brand.primary">
                    {totalClients.toLocaleString()}
                  </Table.Cell>
                  <Table.Cell py={4} textAlign="right" color="brand.primary">
                    {totalSessions.toLocaleString()}
                  </Table.Cell>
                  <Table.Cell py={4} textAlign="right" color="brand.primary">
                    {avgSessionsOverall}
                  </Table.Cell>
                  <Table.Cell py={4} textAlign="right" color="brand.primary">
                    {avgPerformance}%
                  </Table.Cell>
                  <Table.Cell py={4} textAlign="right">
                    <Text color="brand.success">+8.6%</Text>
                  </Table.Cell>
                  <Table.Cell py={4}></Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Box>
        </Box>
      </Box>
    </DashboardLayout>
  );
}
