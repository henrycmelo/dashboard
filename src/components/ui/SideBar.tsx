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
import { Tooltip } from "@/components/ui/tooltip"
import { usePathname } from "next/navigation";
import Link from "next/link";

const menuItems = [
  { icon: FiHome, label: "Overview", href: "/" },
  { icon: FiPieChart, label: "Service Analysis", href: "/service-analysis" },
  { icon: FiMap, label: "Client Distribution Map", href: "/map" },
  { icon: FiUsers, label: "Client Progress", href: "/client-progress" },
  { icon: FiFileText, label: "Report Generator", href: "/report-generator" },
  { icon: FiSettings, label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <Box
      w={{ base: "60px", md: "250px" }}
      h="100vh"
      bg="white"
      borderRight="1px solid"
      borderColor="brand.divider"
      position="relative"
    >
      {/* Logo */}
      <Flex
        px={{ base: 2, md: 6 }}
        py={4}
        borderBottom="1px solid"
        borderColor="brand.divider"
        align="center"
        justify="center"
      >
        <Image
          src="/cianaLogo.png"
          alt="Ciana Logo"
          h="40px"
          w={{ base: "32px", md: "100%" }}
          maxW="100%"
          objectFit="contain"
        />
      </Flex>

      {/* Menu Items */}
      <VStack align="stretch" gap={1} px={{ base: 1, md: 0 }}>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          
          const menuButton = (
            <HStack
              p={{ base: 2, md: 3 }}
              borderRadius="md"
              bg={isActive ? "brand.selected" : "transparent"}
              color={isActive ? "brand.links" : "brand.secondary"}
              cursor="pointer"
              _hover={{ bg: isActive ? "brand.selected" : "brand.selected" }}
              gap={3}
              justify={{ base: "center", md: "flex-start" }}
            >
              <Icon fontSize="20px">
                <item.icon />
              </Icon>
              <Text 
                fontSize="sm" 
                fontWeight={isActive ? "500" : "400"}
                display={{ base: "none", md: "block" }}
              >
                {item.label}
              </Text>
            </HStack>
          );

          return (
            <Link
              key={item.label}
              href={item.href}
              style={{ textDecoration: "none" }}
            >
              <Box display={{ base: "block", md: "none" }}>
                <Tooltip showArrow content={item.label}>
                  {menuButton}
                </Tooltip>
              </Box>
              <Box display={{ base: "none", md: "block" }}>
                {menuButton}
              </Box>
            </Link>
          );
        })}
      </VStack>

      {/* User Profile */}
      <Box 
        position="absolute" 
        bottom={0} 
        left={0} 
        right={0} 
        borderTop="1px solid" 
        borderColor="brand.divider" 
        p={{ base: 2, md: 3 }}
      >
        <HStack gap={3} justify={{ base: "center", md: "flex-start" }}>
          <Box display={{ base: "block", md: "none" }}>
            <Tooltip showArrow content="Sofia Rodriguez - Program Director">
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
            </Tooltip>
          </Box>
          <Box display={{ base: "none", md: "block" }}>
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
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <Text fontSize="sm" color="brand.primary" fontWeight="500">
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