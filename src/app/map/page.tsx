"use client";

import { Box, Text, Flex, Input, Button } from "@chakra-ui/react";
import { Table } from "@chakra-ui/react";
import { Menu } from "@chakra-ui/react";
import { Portal } from "@chakra-ui/react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { useState } from "react";
import DashboardLayout from "@/components/ui/DashboardLayout";

const clientData = [
  { zipCode: "11105", borough: "Queens", clients: 1245 },
  { zipCode: "11106", borough: "Queens", clients: 892 },
  { zipCode: "11101", borough: "Queens", clients: 756 },
  { zipCode: "11102", borough: "Queens", clients: 634 },
  { zipCode: "11103", borough: "Queens", clients: 523 },
  { zipCode: "11104", borough: "Queens", clients: 445 },
  { zipCode: "11107", borough: "Queens", clients: 389 },
  { zipCode: "11108", borough: "Queens", clients: 312 },
  { zipCode: "11109", borough: "Queens", clients: 278 },
  { zipCode: "11354", borough: "Queens", clients: 421 },
  { zipCode: "11355", borough: "Queens", clients: 367 },
  { zipCode: "11356", borough: "Queens", clients: 298 },
  { zipCode: "11357", borough: "Queens", clients: 356 },
  { zipCode: "11358", borough: "Queens", clients: 445 },
  { zipCode: "11359", borough: "Queens", clients: 523 },
  { zipCode: "11360", borough: "Queens", clients: 234 },
  { zipCode: "11361", borough: "Queens", clients: 189 },
  { zipCode: "11362", borough: "Queens", clients: 167 },
  { zipCode: "11363", borough: "Queens", clients: 145 },
  { zipCode: "11364", borough: "Queens", clients: 198 },
  { zipCode: "11365", borough: "Queens", clients: 289 },
  { zipCode: "11366", borough: "Queens", clients: 334 },
  { zipCode: "11367", borough: "Queens", clients: 412 },
  { zipCode: "11368", borough: "Queens", clients: 567 },
  { zipCode: "11369", borough: "Queens", clients: 445 },
  { zipCode: "11370", borough: "Queens", clients: 234 },
  { zipCode: "11372", borough: "Queens", clients: 678 },
  { zipCode: "11373", borough: "Queens", clients: 789 },
  { zipCode: "11374", borough: "Queens", clients: 567 },
  { zipCode: "11375", borough: "Queens", clients: 445 },
  { zipCode: "10001", borough: "Manhattan", clients: 892 },
  { zipCode: "10002", borough: "Manhattan", clients: 756 },
  { zipCode: "10003", borough: "Manhattan", clients: 634 },
  { zipCode: "10004", borough: "Manhattan", clients: 523 },
  { zipCode: "10005", borough: "Manhattan", clients: 445 },
  { zipCode: "10006", borough: "Manhattan", clients: 389 },
  { zipCode: "10007", borough: "Manhattan", clients: 312 },
  { zipCode: "10009", borough: "Manhattan", clients: 278 },
  { zipCode: "10010", borough: "Manhattan", clients: 421 },
  { zipCode: "10011", borough: "Manhattan", clients: 367 },
  { zipCode: "10012", borough: "Manhattan", clients: 298 },
  { zipCode: "10013", borough: "Manhattan", clients: 356 },
  { zipCode: "10014", borough: "Manhattan", clients: 445 },
  { zipCode: "10015", borough: "Manhattan", clients: 523 },
  { zipCode: "10016", borough: "Manhattan", clients: 634 },
  { zipCode: "10017", borough: "Manhattan", clients: 756 },
  { zipCode: "10018", borough: "Manhattan", clients: 892 },
  { zipCode: "10019", borough: "Manhattan", clients: 445 },
  { zipCode: "10020", borough: "Manhattan", clients: 367 },
  { zipCode: "10021", borough: "Manhattan", clients: 298 },
  { zipCode: "10022", borough: "Manhattan", clients: 356 },
  { zipCode: "10023", borough: "Manhattan", clients: 445 },
  { zipCode: "10024", borough: "Manhattan", clients: 523 },
  { zipCode: "10025", borough: "Manhattan", clients: 634 },
  { zipCode: "10026", borough: "Manhattan", clients: 756 },
  { zipCode: "10027", borough: "Manhattan", clients: 892 },
  { zipCode: "10028", borough: "Manhattan", clients: 445 },
  { zipCode: "10029", borough: "Manhattan", clients: 367 },
  { zipCode: "10030", borough: "Manhattan", clients: 298 },
  { zipCode: "11201", borough: "Brooklyn", clients: 756 },
  { zipCode: "11202", borough: "Brooklyn", clients: 634 },
  { zipCode: "11203", borough: "Brooklyn", clients: 523 },
  { zipCode: "11204", borough: "Brooklyn", clients: 445 },
  { zipCode: "11205", borough: "Brooklyn", clients: 389 },
  { zipCode: "11206", borough: "Brooklyn", clients: 312 },
  { zipCode: "11207", borough: "Brooklyn", clients: 278 },
  { zipCode: "11208", borough: "Brooklyn", clients: 421 },
  { zipCode: "11209", borough: "Brooklyn", clients: 367 },
  { zipCode: "11210", borough: "Brooklyn", clients: 298 },
  { zipCode: "11211", borough: "Brooklyn", clients: 356 },
  { zipCode: "11212", borough: "Brooklyn", clients: 445 },
  { zipCode: "11213", borough: "Brooklyn", clients: 523 },
  { zipCode: "11214", borough: "Brooklyn", clients: 634 },
  { zipCode: "11215", borough: "Brooklyn", clients: 756 },
  { zipCode: "11216", borough: "Brooklyn", clients: 892 },
  { zipCode: "11217", borough: "Brooklyn", clients: 445 },
  { zipCode: "11218", borough: "Brooklyn", clients: 367 },
  { zipCode: "11219", borough: "Brooklyn", clients: 298 },
  { zipCode: "11220", borough: "Brooklyn", clients: 356 },
  { zipCode: "11221", borough: "Brooklyn", clients: 445 },
  { zipCode: "11222", borough: "Brooklyn", clients: 523 },
  { zipCode: "11223", borough: "Brooklyn", clients: 634 },
  { zipCode: "11224", borough: "Brooklyn", clients: 756 },
  { zipCode: "11225", borough: "Brooklyn", clients: 892 },
  { zipCode: "11226", borough: "Brooklyn", clients: 445 },
  { zipCode: "11228", borough: "Brooklyn", clients: 367 },
  { zipCode: "11229", borough: "Brooklyn", clients: 298 },
  { zipCode: "11230", borough: "Brooklyn", clients: 356 },
  { zipCode: "11231", borough: "Brooklyn", clients: 445 },
  { zipCode: "10451", borough: "Bronx", clients: 634 },
  { zipCode: "10452", borough: "Bronx", clients: 523 },
  { zipCode: "10453", borough: "Bronx", clients: 445 },
  { zipCode: "10454", borough: "Bronx", clients: 389 },
  { zipCode: "10455", borough: "Bronx", clients: 312 },
  { zipCode: "10456", borough: "Bronx", clients: 278 },
  { zipCode: "10457", borough: "Bronx", clients: 421 },
  { zipCode: "10458", borough: "Bronx", clients: 367 },
  { zipCode: "10459", borough: "Bronx", clients: 298 },
  { zipCode: "10460", borough: "Bronx", clients: 356 },
  { zipCode: "10461", borough: "Bronx", clients: 445 },
  { zipCode: "10462", borough: "Bronx", clients: 523 },
  { zipCode: "10463", borough: "Bronx", clients: 634 },
  { zipCode: "10464", borough: "Bronx", clients: 156 },
  { zipCode: "10465", borough: "Bronx", clients: 189 },
  { zipCode: "10466", borough: "Bronx", clients: 234 },
  { zipCode: "10467", borough: "Bronx", clients: 345 },
  { zipCode: "10468", borough: "Bronx", clients: 456 },
  { zipCode: "10469", borough: "Bronx", clients: 567 },
  { zipCode: "10470", borough: "Bronx", clients: 234 },
  { zipCode: "10471", borough: "Bronx", clients: 189 },
  { zipCode: "10472", borough: "Bronx", clients: 298 },
  { zipCode: "10473", borough: "Bronx", clients: 367 },
  { zipCode: "10474", borough: "Bronx", clients: 234 },
  { zipCode: "10475", borough: "Bronx", clients: 189 },
  { zipCode: "10301", borough: "Staten Island", clients: 423 },
  { zipCode: "10302", borough: "Staten Island", clients: 367 },
  { zipCode: "10303", borough: "Staten Island", clients: 298 },
  { zipCode: "10304", borough: "Staten Island", clients: 356 },
  { zipCode: "10305", borough: "Staten Island", clients: 445 },
  { zipCode: "10306", borough: "Staten Island", clients: 234 },
  { zipCode: "10307", borough: "Staten Island", clients: 189 },
  { zipCode: "10308", borough: "Staten Island", clients: 167 },
  { zipCode: "10309", borough: "Staten Island", clients: 145 },
  { zipCode: "10310", borough: "Staten Island", clients: 198 },
  { zipCode: "10311", borough: "Staten Island", clients: 234 },
  { zipCode: "10312", borough: "Staten Island", clients: 289 },
  { zipCode: "10313", borough: "Staten Island", clients: 334 },
  { zipCode: "10314", borough: "Staten Island", clients: 412 },
];

export default function MapPage() {
  const [boroughFilter, setBoroughFilter] = useState("All Boroughs");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const boroughs = [
    "All Boroughs",
    ...Array.from(new Set(clientData.map((item) => item.borough))),
  ];

  // Filter data
  const filteredData = clientData.filter((item) => {
    const matchesBorough =
      boroughFilter === "All Boroughs" || item.borough === boroughFilter;
    const matchesSearch =
      item.zipCode.includes(searchTerm) ||
      item.borough.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesBorough && matchesSearch;
  });

  // Paginate data
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <DashboardLayout>
      <Box p={6}>
        <Flex justify="space-between" align="flex-start" mb={6}>
          <Box>
            <Text fontSize="2xl" fontWeight="bold" color="brand.primary">
              Client Distribution Map
            </Text>
            <Text fontSize="sm" color="brand.secondary" mt={1}>
              Last updated: Today at 9:41 AM
            </Text>
          </Box>
        </Flex>

        {/* Map Container */}
        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="0 1px 2px -1px rgba(0, 0, 0, 0.10), 0 1px 3px 0 rgba(0, 0, 0, 0.10)"
          h="calc(80vh - 100px)"
          overflow="hidden"
          mb={6}
        >
          <iframe
            src={`map-old.html?v=${Date.now()}`}
            sandbox="allow-scripts allow-same-origin"
            style={{
              border: "none",
              width: "100%",
              height: "100%",
              display: "block",
              position: "relative", // Force relative positioning
              zIndex: 1, // Lower z-index
            }}
            title="Client Distribution Map"
          />
        </Box>

        {/* Clients Table */}
        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="0 1px 2px -1px rgba(0, 0, 0, 0.10), 0 1px 3px 0 rgba(0, 0, 0, 0.10)"
          p={6}
        >
          <Box mb={1}>
            <Text fontSize="md" fontWeight="600" mb={1} color={"brand.primary"}>
              Clients by Borough & Zip Code
            </Text>
            <Text fontSize="sm" color="brand.secondary" mb={6}>
              Detailed breakdown of number of clients.
            </Text>
          </Box>

          {/* Filters */}
          <Flex gap={4} mb={6}>
            <Box position="relative" flex="1" maxW="300px">
              <Input
                placeholder="Search zip code or borough..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                pl={10}
              />
              <Box
                position="absolute"
                left={3}
                top="50%"
                transform="translateY(-50%)"
              >
                <FiSearch color="#9CA3AF" />
              </Box>
            </Box>

            <Menu.Root>
              <Menu.Trigger asChild>
                <Button
                  variant="outline"
                  size="md"
                  color="brand.primary"
                  _hover={{ bg: "brand.bg" }}
                >
                  {boroughFilter} <FiChevronDown />
                </Button>
              </Menu.Trigger>

              <Portal>
                <Menu.Positioner>
                  <Menu.Content bg="white" borderColor="gray.200" shadow="lg">
                    {boroughs.map((borough) => (
                      <Menu.Item
                        key={borough}
                        value={borough}
                        onClick={() => setBoroughFilter(borough)}
                        color={"brand.primary"}
                      >
                        {borough}
                      </Menu.Item>
                    ))}
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Flex>

          {/* Table */}
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
              <Table.Row>
                <Table.ColumnHeader color="gray.600" fontSize="sm">
                  Zip Code
                </Table.ColumnHeader>
                <Table.ColumnHeader color="gray.600" fontSize="sm">
                  Borough
                </Table.ColumnHeader>
                <Table.ColumnHeader
                  color="gray.600"
                  fontSize="sm"
                  textAlign="right"
                >
                  Clients
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {paginatedData.map((item) => (
                <Table.Row key={`${item.zipCode}-${item.borough}`}>
                  <Table.Cell fontSize="sm">{item.zipCode}</Table.Cell>
                  <Table.Cell fontSize="sm">{item.borough}</Table.Cell>
                  <Table.Cell fontSize="sm" textAlign="right">
                    {item.clients.toLocaleString()}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>

          {/* Pagination */}
          <Flex justify="space-between" align="center" mt={4}>
            <Text fontSize="sm" color="brand.secondary">
              Showing {startIndex + 1} to{" "}
              {Math.min(startIndex + itemsPerPage, filteredData.length)} of{" "}
              {filteredData.length} zip codes
            </Text>

            <Flex gap={2}>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                color={"brand.primary"}
              >
                Previous
              </Button>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <Button
                    key={pageNum}
                    size="sm"
                    variant={currentPage === pageNum ? "solid" : "outline"}
                    bg={currentPage === pageNum ? "brand.links" : "transparent"}
                    color={currentPage === pageNum ? "white" : "brand.primary"}
                    onClick={() => setCurrentPage(pageNum)}
                  >
                    {pageNum}
                  </Button>
                );
              })}

              {totalPages > 5 && (
                <>
                  <Text mx={2}>...</Text>
                  <Button
                    size="sm"
                    variant="outline"
                    color={"brand.primary"}
                    onClick={() => setCurrentPage(totalPages)}
                  >
                    {totalPages}
                  </Button>
                </>
              )}

              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                color={"brand.primary"}
              >
                Next
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </DashboardLayout>
  );
}
