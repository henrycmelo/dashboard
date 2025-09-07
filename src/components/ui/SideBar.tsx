"use client";

import { Box, VStack, Text, Icon, HStack, Image, Flex } from "@chakra-ui/react";
import {
  FiHome,
  FiPieChart,
  FiUsers,
  FiFileText,
  FiSettings,
  FiMap,
} from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";

const menuItems = [
  { icon: FiHome, label: "Overview", href: "/" },
  { icon: FiPieChart, label: "Service Analysis", href: "/service-analysis" },
   { icon: FiMap, label: "Client Distribution", href: "/map" },
  { icon: FiUsers, label: "Client Progress", href: "/client-progress" },
  { icon: FiFileText, label: "Report Generator", href: "/report-generator" },
  { icon: FiSettings, label: "Settings", href: "#" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <Box
      w="250px"
      h="100vh"
      bg="white"
      borderRight="1px solid"
      borderColor="brand.divider"
      position="relative"
    >
      {/* Logo */}
      <Flex
        px={6}
        py={4}
        borderBottom="1px solid"
        borderColor="brand.divider"
        align="center"
        justify="flex-start"
      >
        <Image
          src="/cianaLogo.png"
          alt="Ciana Logo"
          h="40px"
          w="100%"
          maxW="100%"
          objectFit="contain"
        />
      </Flex>

      {/* Menu Items */}
      <VStack align="stretch" gap={1}>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              style={{ textDecoration: "none" }}
            >
              <HStack
                p={3}
                borderRadius="md"
                bg={isActive ? "brand.selected" : "transparent"}
                color={isActive ? "brand.links" : "brand.secondary"}
                cursor="pointer"
                _hover={{ bg: isActive ? "brand.selected" : "brand.selected" }}
                gap={3}
              >
                <Icon fontSize="20px">
                  <item.icon />
                </Icon>
                <Text fontSize="sm" fontWeight={isActive ? "500" : "400"}>
                  {item.label}
                </Text>
              </HStack>
            </Link>
          );
        })}
      </VStack>

      <Box position="absolute" bottom={0} left={0} right={0} borderTop={"1px solid"} borderColor="brand.divider" p={3} >
        <HStack gap={3} >
          <Box
            w="32px"
            h="32px"
            borderRadius="full"
            bg="brand.iconBlue"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="brand.white"
            fontSize="sm"
            fontWeight="bold"
          >
            SC
          </Box>
          <Box>
            <Text fontSize="sm" color={'brand.primary'} fontWeight="500">
              Sofia Rodriguez
            </Text>
            <Text fontSize="xs" color="brand.secondary">
              Program Director
            </Text>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
