"use client";

import {
  Box,
  Text,
  Flex,
  Button,
  Grid,
  Icon,
  HStack,
  Portal,
} from "@chakra-ui/react";
import { Dialog, Table } from "@chakra-ui/react";
import {
  FiFileText,
  FiDownload,
  FiPlus,
  FiX,
  FiExternalLink,
} from "react-icons/fi";
import { useState } from "react";
import DashboardLayout from "@/components/ui/DashboardLayout";

const reportTemplates = [
  {
    id: 1,
    title: "Quarterly Services Report",
    description: "Comprehensive overview of all client services and outcomes.",
    lastGenerated: "Apr 15, 2025",
    icon: FiFileText,
  },
  {
    id: 2,
    title: "ESL Program Performance",
    description: "Detailed analysis of language program outcomes and metrics.",
    lastGenerated: "Apr 15, 2025",
    icon: FiFileText,
  },
  {
    id: 3,
    title: "Client Demographics Report",
    description: "Breakdown of client demographics and service utilization.",
    lastGenerated: "Apr 15, 2025",
    icon: FiFileText,
  },
  {
    id: 4,
    title: "Annual Impact Report",
    description: "Year-over-year analysis of program impacts and outcomes.",
    lastGenerated: "Apr 15, 2025",
    icon: FiFileText,
  },
];

// Recent reports data
type RecentReport = {
  id: number;
  name: string;
  generatedBy: string;
  date: string;
  templateId: number;
}

const recentReports:RecentReport[] = [
  {
    id: 1,
    name: "Q1 2025 Services Report",
    generatedBy: "Sarah Martinez",
    date: "Apr 15, 2025",
    templateId: 1,
  },
  {
    id: 2,
    name: "ESL Program Performance - March 2025",
    generatedBy: "John Chen",
    date: "Apr 12, 2025",
    templateId: 2,
  },
  {
    id: 3,
    name: "Client Demographics Analysis",
    generatedBy: "Maria Rodriguez",
    date: "Apr 10, 2025",
    templateId: 3,
  },
  {
    id: 4,
    name: "Weekly Services Summary",
    generatedBy: "David Kim",
    date: "Apr 8, 2025",
    templateId: 4,
  },
  {
    id: 5,
    name: "Legal Services Quarterly Report",
    generatedBy: "Sarah Martinez",
    date: "Apr 5, 2025",
    templateId: 5,
  },
  {
    id: 6,
    name: "Healthcare Enrollment Report",
    generatedBy: "Ana Silva",
    date: "Apr 3, 2025",
    templateId: 6,
  },
  {
    id: 7,
    name: "Digital Safety Workshop Summary",
    generatedBy: "Michael Brown",
    date: "Apr 1, 2025",
    templateId: 7,
  },
  {
    id: 8,
    name: "March 2025 Impact Report",
    generatedBy: "Lisa Johnson",
    date: "Mar 31, 2025",
    templateId: 8,
  },
];

const sampleReports = {
  1: {
    title: "Quarterly Services Report - Q1 2025",
    content: `
**Executive Summary**

This quarterly report provides a comprehensive overview of client services and outcomes for Q1 2025. During this period, our organization served 2,847 clients across four main program areas, achieving an overall satisfaction rate of 94%.

**Key Metrics**
• Total Clients Served: 2,847
• New Client Enrollments: 456
• Program Completion Rate: 78%
• Client Satisfaction Score: 94%

**Program Performance**

**English as Second Language (ESL)**
- Clients Served: 1,245
- Sessions Completed: 3,456
- Average Attendance Rate: 89%
- Completion Rate: 82%

**Legal Services**
- Cases Handled: 567
- Cases Resolved: 445
- Success Rate: 78%
- Average Case Duration: 3.2 months

**Healthcare Enrollment**
- Clients Enrolled: 789
- Successful Enrollments: 687
- Enrollment Success Rate: 87%
- Average Processing Time: 12 days

**Digital Safety Workshops**
- Workshops Conducted: 24
- Participants: 346
- Knowledge Retention Rate: 91%
- Follow-up Completion: 76%

**Recommendations**
1. Increase ESL class capacity to meet growing demand
2. Implement digital intake process for legal services
3. Expand healthcare enrollment support hours
4. Develop advanced digital safety curriculum`,
  },
  2: {
    title: "ESL Program Performance Report - Q1 2025",
    content: `
**ESL Program Performance Analysis**

**Program Overview**
The English as Second Language program continues to be our most utilized service, serving 1,245 clients in Q1 2025 with a total of 3,456 instructional sessions delivered.

**Student Demographics**
• Countries of Origin: Mexico (45%), Colombia (28%), Venezuela (18%), Other (9%)
• Age Distribution: 18-30 (32%), 31-45 (41%), 46-60 (22%), 60+ (5%)
• Education Level: High School or Less (42%), Some College (35%), College Graduate (23%)

**Performance Metrics**
• Average Class Attendance: 89%
• Course Completion Rate: 82%
• Post-Program Employment Rate: 67%
• English Proficiency Improvement: Average 2.3 levels

**Class Performance by Level**
**Beginner Level (Level 1-2)**
- Students: 456
- Completion Rate: 85%
- Average Progress: 1.8 levels

**Intermediate Level (Level 3-4)**
- Students: 534
- Completion Rate: 79%
- Average Progress: 2.1 levels

**Advanced Level (Level 5-6)**
- Students: 255
- Completion Rate: 88%
- Average Progress: 2.8 levels

**Instructor Performance**
• Student-to-Instructor Ratio: 12:1
• Instructor Satisfaction Rating: 4.6/5
• Professional Development Hours: 24 per instructor

**Challenges and Opportunities**
1. High demand exceeding current capacity
2. Need for more evening and weekend classes
3. Technology integration opportunities
4. Career pathway development needs

**Recommendations**
- Add 3 additional class sections
- Implement hybrid learning model
- Develop job placement partnerships
- Create specialized curriculum tracks`,
  },
  3: {
    title: "Client Demographics Report - Q1 2025",
    content: `
**Client Demographics Analysis**

**Total Client Population: 2,847**

**Geographic Distribution**
• Queens: 1,245 clients (44%)
• Brooklyn: 756 clients (27%)
• Manhattan: 445 clients (16%)
• Bronx: 312 clients (11%)
• Staten Island: 89 clients (2%)

**Top ZIP Codes Served**
1. 11105 (Queens): 234 clients
2. 11201 (Brooklyn): 198 clients
3. 10001 (Manhattan): 167 clients
4. 10451 (Bronx): 145 clients
5. 11106 (Queens): 134 clients

**Country of Origin**
• Mexico: 1,281 clients (45%)
• Colombia: 797 clients (28%)
• Venezuela: 512 clients (18%)
• Ecuador: 142 clients (5%)
• Other Latin American: 115 clients (4%)

**Age Demographics**
• 18-25: 427 clients (15%)
• 26-35: 912 clients (32%)
• 36-45: 854 clients (30%)
• 46-55: 456 clients (16%)
• 56-65: 142 clients (5%)
• 65+: 56 clients (2%)

**Gender Distribution**
• Female: 1,708 clients (60%)
• Male: 1,139 clients (40%)

**Education Level**
• Less than High School: 570 clients (20%)
• High School Graduate: 626 clients (22%)
• Some College: 997 clients (35%)
• College Graduate: 512 clients (18%)
• Graduate Degree: 142 clients (5%)

**Employment Status**
• Employed Full-time: 1,281 clients (45%)
• Employed Part-time: 626 clients (22%)
• Unemployed: 456 clients (16%)
• Student: 284 clients (10%)
• Retired: 142 clients (5%)
• Other: 58 clients (2%)

**Language Proficiency (English)**
• Beginner: 1,139 clients (40%)
• Intermediate: 997 clients (35%)
• Advanced: 569 clients (20%)
• Fluent: 142 clients (5%)

**Service Utilization Patterns**
• Single Service Users: 1,423 clients (50%)
• Multiple Service Users: 1,424 clients (50%)
• Average Services per Client: 1.8

**Insights and Trends**
1. Growing Venezuelan population requiring specialized support
2. High demand for services in Queens and Brooklyn
3. Significant educational diversity requiring varied approaches
4. Strong correlation between English proficiency and employment rates`,
  },
  4: {
    title: "Annual Impact Report - 2024",
    content: `
**2024 Annual Impact Report**

**Executive Summary**
In 2024, our organization achieved significant milestones in serving immigrant communities across New York City. We served 11,234 clients, a 23% increase from 2023, while maintaining high quality outcomes across all programs.

**Year-over-Year Growth**
• Total Clients Served: 11,234 (+23% from 2023)
• Programs Offered: 4 (consistent)
• Staff Members: 87 (+15% from 2023)
• Volunteer Hours: 12,456 (+31% from 2023)

**Program Impact Summary**

**English as Second Language**
- Clients Served: 4,892 (+18% YoY)
- Graduation Rate: 81% (+3% YoY)
- Employment Rate Post-Graduation: 73% (+8% YoY)
- Average Salary Increase: $8,400 annually

**Legal Services**
- Cases Handled: 2,156 (+28% YoY)
- Success Rate: 82% (+5% YoY)
- Average Case Resolution Time: 3.1 months (-0.3 months YoY)
- Immigration Status Changes: 1,234 clients

**Healthcare Enrollment**
- Enrollments Processed: 3,067 (+35% YoY)
- Success Rate: 89% (+4% YoY)
- Estimated Healthcare Savings: $2.3M for clients
- Follow-up Completion: 78%

**Digital Safety Workshops**
- Workshops Delivered: 96 (+60% YoY)
- Participants: 1,389 (+65% YoY)
- Digital Literacy Improvement: 87% of participants
- Cybersecurity Awareness: 94% retention rate

**Financial Performance**
• Total Revenue: $3.2M (+12% YoY)
• Program Expenses: $2.1M (66% of revenue)
• Administrative Costs: $0.8M (25% of revenue)
• Reserve Fund: $0.3M (9% of revenue)

**Community Partnerships**
- Active Partnerships: 45 organizations
- Referral Network: 23 agencies
- Employer Partners: 67 companies
- Educational Institutions: 12 partnerships

**Client Outcomes**
• 78% reported improved quality of life
• 69% achieved primary service goals
• 84% would recommend services to others
• 73% accessed additional community resources

**Geographic Reach**
We expanded our services to reach clients in all five boroughs, with particular growth in:
- Queens: +28% client growth
- Brooklyn: +19% client growth  
- Bronx: +31% client growth

**Challenges Addressed**
1. Increased demand management through expanded hours
2. Staff retention through competitive compensation
3. Technology upgrades for better service delivery
4. Multi-language support expansion

**2025 Strategic Goals**
1. Serve 13,500 clients (20% increase)
2. Launch job placement program
3. Develop mental health support services
4. Implement comprehensive case management system
5. Expand to additional locations

**Community Impact**
Our work has contributed to stronger, more integrated communities throughout NYC. Client success stories demonstrate the transformative power of comprehensive support services in helping immigrant families build stable, prosperous lives.`,
  },
};

export default function ReportGeneratorPage() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<number | null>(null);

  const openPreview = (reportId: number) => {
    setSelectedReport(reportId);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    setSelectedReport(null);
  };

  return (
    <DashboardLayout>
      <Box p={6}>
        {/* Page Header */}
        <Flex justify="space-between" align="center" mb={6}>
          <Text fontSize="2xl" fontWeight="bold" color="brand.primary">
            Report Generator
          </Text>

          <Button
            bg="brand.links"
            color="white"
            _hover={{ bg: "brand.linksHover" }}
          >
           <FiPlus /> Create Custom Report
          </Button>
        </Flex>

        {/* Report Templates Section */}
        <Box mb={8}>
          

          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {reportTemplates.map((template) => (
              <Box
                key={template.id}
                bg="white"
                borderRadius="lg"
                boxShadow="0 1px 2px -1px rgba(0, 0, 0, 0.10), 0 1px 3px 0 rgba(0, 0, 0, 0.10)"
                p={6}
                _hover={{
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
                transition="all 0.2s"
              >
                <HStack mb={4} gap={3}>
                  <Box
                    w="40px"
                    h="40px"
                    bg="brand.bg"
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon color="brand.links" fontSize="20px">
                      <template.icon />
                    </Icon>
                  </Box>
                  <Box flex="1">
                    <Text fontSize="md" fontWeight="600" color="brand.primary">
                      {template.title}
                    </Text>
                  </Box>
                </HStack>

                <Text fontSize="sm" color="brand.secondary" mb={2} >
                  {template.description}
                </Text>

                <Text fontSize="xs" color="brand.muted" mb={4}>
                  Last generated: {template.lastGenerated}
                </Text>

                <HStack gap={3}>
                  <Button
                    variant="outline"
                    color="brand.primary"
                    _hover={{ bg: "brand.bg" }}
                    onClick={() => openPreview(template.id)}
                  >
                    Preview
                  </Button>
                  <Button
                    bg="brand.links"
            color="brand.white"
            _hover={{ bg: 'brand.linksHover' }}
            gap={2}
                  >
                    <FiDownload /> Generate
                  </Button>
                </HStack>
              </Box>
            ))}
          </Grid>
        </Box>

        {/* Recent Reports Table */}
        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="0 1px 2px -1px rgba(0, 0, 0, 0.10), 0 1px 3px 0 rgba(0, 0, 0, 0.10)"
          overflow="hidden"
        >
          <Box p={5}>
            <Text fontSize="md" fontWeight="600" mb={1} color="brand.primary">
              Recent Reports
            </Text>
            <Text fontSize="sm" color="brand.secondary" mb={6}>
              Reports generated in the last 30 days.
            </Text>

            <Table.Root
              size="lg"
              interactive
              css={{
                "& td": { borderBottom: "none" },
                "& th": { borderBottom: "none" },
                "& tr": { borderBottom: "none" },
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
                    Report Name
                  </Table.ColumnHeader>
                  <Table.ColumnHeader
                    py={3}
                    color="brand.secondary"
                    fontSize="xs"
                    fontWeight="600"
                    textTransform="uppercase"
                  >
                    Generated By
                  </Table.ColumnHeader>
                  <Table.ColumnHeader
                    py={3}
                    color="brand.secondary"
                    fontSize="xs"
                    fontWeight="600"
                    textTransform="uppercase"
                  >
                    Date
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {recentReports.map((report) => (
                  <Table.Row key={report.id} bg="brand.white">
                    <Table.Cell py={4}>
                      <Button
                        variant="ghost"
                        size="sm"
                        fontWeight="500"
                        color="brand.links"
                        fontSize="sm"
                        justifyContent="flex-start"
                        p={0}
                        _hover={{
                          color: "brand.linksHover",
                          textDecoration: "underline",
                        }}
                        onClick={() => openPreview(report.templateId)}
                      >
                        {report.name}
                        <Box ml={1}>
                          <FiExternalLink size={12} />
                        </Box>
                      </Button>
                    </Table.Cell>
                    <Table.Cell py={4} color="brand.primary" fontSize="sm">
                      {report.generatedBy}
                    </Table.Cell>
                    <Table.Cell py={4} color="brand.secondary" fontSize="sm">
                      {report.date}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Box>
        </Box>

        {/* Preview Dialog */}
        <Dialog.Root
          open={isPreviewOpen}
          onOpenChange={(details) => setIsPreviewOpen(details.open)}
        >
          <Portal>
            <Dialog.Backdrop bg="blackAlpha.600" />
            <Dialog.Positioner>
              <Dialog.Content
                bg="white"
                borderRadius="lg"
                p={0}
                maxW="800px"
                maxH="90vh"
                overflow="hidden"
              >
                <Dialog.Header
                  p={6}
                  borderBottom="1px solid"
                  borderColor="gray.200"
                >
                  <Flex justify="space-between" align="center">
                    <Dialog.Title
                      fontSize="lg"
                      fontWeight="600"
                      color="brand.primary"
                    >
                      {selectedReport &&
                        sampleReports[
                          selectedReport as keyof typeof sampleReports
                        ]?.title}
                    </Dialog.Title>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={closePreview}
                      color="brand.secondary"
                    >
                      <FiX />
                    </Button>
                  </Flex>
                </Dialog.Header>

                <Dialog.Body p={6} overflowY="auto" maxH="60vh">
                  {selectedReport && (
                    <Box>
                      <Text
                        fontSize="sm"
                        color="brand.primary"
                        lineHeight="1.6"
                        whiteSpace="pre-line"
                        fontFamily="system-ui, -apple-system, sans-serif"
                      >
                        {
                          sampleReports[
                            selectedReport as keyof typeof sampleReports
                          ]?.content
                        }
                      </Text>
                    </Box>
                  )}
                </Dialog.Body>

                <Dialog.Footer
                  p={6}
                  borderTop="1px solid"
                  borderColor="gray.200"
                >
                  <Flex gap={3}>
                    <Button
                      variant="outline"
                      onClick={closePreview}
                      color="brand.secondary"
                    >
                      Close
                    </Button>
                    <Button
                      bg="brand.links"
            color="brand.white"
            _hover={{ bg: 'brand.linksHover' }}
            gap={2}
                    >
                     <FiDownload />  Download Report
                    </Button>
                  </Flex>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      </Box>
    </DashboardLayout>
  );
}
