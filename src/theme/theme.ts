import { createSystem, defineConfig, defaultConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#1F2937" },
          100: { value: "#6B7280" },
          200: { value: "#9CA3AF" },
          300: { value: "#FFFFFF" },
          400: { value: "#2563EB" },
          450: { value: "#1D4ED8" },
          500: { value: "#059669" },
          600: { value: "#D97706" },
          700: { value: "#DC2626" },
          800: { value: "#EFF6FF" },
          900: { value: "#E5E7EB" },
          950: { value: "#F9FAFB" },
          1000: { value: "#3B82F6" },
          1100: { value: "#22C55E" },
          1200: { value: "#EAB308" },
          1300: { value: "#A855F7"}
        
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          primary: { value: "{colors.brand.50}" },
          secondary: { value: "{colors.brand.100}" },
          muted: { value: "{colors.brand.200}" },
          white: { value: "{colors.brand.300}" },
          links: { value: "{colors.brand.400}" },
          linksHover: { value: "{colors.brand.450}" },
          success: { value: "{colors.brand.500}" },
          warning: { value: "{colors.brand.600}" },
          error: { value: "{colors.brand.700}" },
          selected: { value: "{colors.brand.800}" },
          divider: { value: "{colors.brand.900}" },
          bg: { value: "{colors.brand.950}" },
          iconBlue: { value: "{colors.brand.1000}" },
          eslGreen: { value: "{colors.brand.1100}" },
          legalYellow: { value: "{colors.brand.1200}" },
          purpleHealth: { value: "{colors.brand.1300}"}
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)