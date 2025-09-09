"use client";

import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Alert,
  Stack,
  Portal,
  Select,
  Checkbox,
  createListCollection,
} from "@chakra-ui/react";
import { useState } from "react";
import DashboardLayout from "@/components/ui/DashboardLayout";

// Refresh interval options
const refreshIntervals = createListCollection({
  items: [
    { label: "5 minutes", value: "5" },
    { label: "15 minutes", value: "15" },
    { label: "30 minutes", value: "30" },
    { label: "1 hour", value: "60" },
  ],
});

// Data access options
const dataOptions = createListCollection({
  items: [
    { label: "All Data", value: "all" },
    { label: "ESL Program", value: "esl" },
    { label: "Legal Cases", value: "legal" },
    { label: "Healthcare Enrollments", value: "healthcare" },
  ],
});

export default function DashboardSettings() {
  const [refreshInterval, setRefreshInterval] = useState("15");
  const [dataAccess, setDataAccess] = useState<string[]>([
    "all",
    "esl",
    "legal",
    "healthcare",
  ]);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <DashboardLayout>
      <Box p={{ base: 4, md: 6 }}>
        {/* Page Header */}
        <Box mb={6} textAlign={{ base: "center", md: "left" }}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="brand.primary">
            Dashboard Settings
          </Text>
        </Box>

        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="0 1px 2px -1px rgba(0, 0, 0, 0.10), 0 1px 3px 0 rgba(0, 0, 0, 0.10)"
          p={{ base: 4, md: 5 }}
        >
          {/* Apricot Settings */}
          <Box>
            <Text fontSize={{ base: "sm", md: "md" }} fontWeight="600" mb={1}>
              Apricot Settings
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }} color="brand.secondary" mb={6}>
              CRM connection and sync preferences.
            </Text>

            <Text fontSize="sm" color="brand.primary" mb={2}>
              API Key
            </Text>
            <Input
              type="password"
              value="********************"
              readOnly
              mb={4}
              size={{ base: "sm", md: "md" }}
            />

            <Text fontSize="sm" color="brand.primary" mb={2}>
              Refresh Interval
            </Text>
            <Select.Root
              collection={refreshIntervals}
              value={[refreshInterval]}
              onValueChange={(e) => setRefreshInterval(e.value[0])}
              size={{ base: "sm", md: "md" }}
            >
              <Select.HiddenSelect />
              <Select.Control>
                <Select.Trigger>
                  <Select.ValueText placeholder="Select interval" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content>
                    {refreshIntervals.items.map((interval) => (
                      <Select.Item item={interval} key={interval.value}>
                        {interval.label}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>
          </Box>

          {/* Data Access */}
          <Box my={{ base: 6, md: 8 }}>
            <Text fontSize={{ base: "sm", md: "md" }} fontWeight="600" mb={1} color="brand.primary">
              Data Access
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }} color="brand.secondary" mb={6}>
              Select which data types to include in your dashboard.
            </Text>

            <Stack gap={{ base: 3, md: 4 }}>
              {dataOptions.items.map((option) => (
                <Checkbox.Root
                  key={option.value}
                  checked={dataAccess.includes(option.value)}
                  onCheckedChange={() => {
                    setDataAccess((prev) =>
                      prev.includes(option.value)
                        ? prev.filter((v) => v !== option.value)
                        : [...prev, option.value]
                    );
                  }}
                  size={{ base: "sm", md: "md" }}
                >
                  <Checkbox.HiddenInput />
                  <Checkbox.Control _checked={{ bg: "#2563EB", borderColor: "#2563EB", color: "white" }}>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.Label fontSize={{ base: "sm", md: "md" }}>
                    {option.label}
                  </Checkbox.Label>
                </Checkbox.Root>
              ))}
            </Stack>
          </Box>

          {/* Actions */}
          <Flex 
            justify={{ base: "center", md: "flex-end" }} 
            gap={4}
            direction={{ base: "column", sm: "row" }}
          >
            <Button 
              variant="outline"
              color="brand.primary"
              _hover={{ bg: "brand.bg" }}
              size={{ base: "sm", md: "md" }}
              flex={{ base: 1, sm: "none" }}
            >
              Cancel
            </Button>
            <Button 
              bg="brand.links"
              color="brand.white"
              _hover={{ bg: 'brand.linksHover' }}
              gap={2} 
              onClick={handleSave}
              size={{ base: "sm", md: "md" }}
              flex={{ base: 1, sm: "none" }}
            >
              Save
            </Button>
          </Flex>

          {/* Success Banner */}
          {saved && (
            <Box mt={4}>
              <Alert.Root status="success" size={{ base: "sm", md: "md" }}>
                <Alert.Indicator />
                <Alert.Title fontSize={{ base: "sm", md: "md" }}>
                  Saved Successfully
                </Alert.Title>
              </Alert.Root>
            </Box>
          )}
        </Box>
      </Box>
    </DashboardLayout>
  );
}