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
      <Box p={6}>
        <Text fontSize="2xl" fontWeight="bold" mb={6} color="brand.primary">
          Dashboard Settings
        </Text>

        <Box
          bg="white"
          borderRadius="lg"
          boxShadow={
            "0 1px 2px -1px rgba(0, 0, 0, 0.10), 0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 0 0 0 rgba(0, 0, 0, 0.00), 0 0 0 0 rgba(0, 0, 0, 0.00)"
          }
          p={5}
          >
        
          {/* Apricot Settings */}
          <Box >
            <Text fontSize="md" fontWeight="600" mb={1}>
              Apricot Settings
            </Text>
            <Text fontSize="sm" color="brand.secondary" mb={6}>
              CRM connection and sync preferences.
            </Text>

            <Text fontSize="sm" color={'brand.primary'} mb={2}>
              API Key
            </Text>
            <Input
              type="password"
              value="********************"
              readOnly
              mb={4}
            />

            <Text fontSize="sm" color={'brand.primary'} mb={2}>
              Refresh Interval
            </Text>
            <Select.Root
              collection={refreshIntervals}
              value={[refreshInterval]}
              onValueChange={(e) => setRefreshInterval(e.value[0])}
              size="md"
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
          <Box my={8}>
            <Text fontSize="md" fontWeight="600" mb={1} color={"brand.primary"}>
              Data Access
            </Text>
            <Text fontSize="sm" color="brand.secondary" mb={6}>
              Select which data types to include in your dashboard.
            </Text>

            <Stack >
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
                >
                  <Checkbox.HiddenInput />
                  <Checkbox.Control _checked={{ bg: "#2563EB", borderColor: "#2563EB", color: "white" }}>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.Label>{option.label}</Checkbox.Label>
                </Checkbox.Root>
              ))}
            </Stack>
          </Box>

          {/* Actions */}
          <Flex justify="flex-end" gap={4}>
            <Button variant="outline"
                    color="brand.primary"
                    _hover={{ bg: "brand.bg" }}>Cancel</Button>
            <Button bg="brand.links"
            color="brand.white"
            _hover={{ bg: 'brand.linksHover' }}
            gap={2} onClick={handleSave}>
              Save
            </Button>
          </Flex>

          {/* Success Banner */}
          {saved && (
            <Alert.Root status="success">
      <Alert.Indicator />
      <Alert.Title>Saved Successfully</Alert.Title>
    </Alert.Root>
          )}
        </Box>
      </Box>
    </DashboardLayout>
  );
}
