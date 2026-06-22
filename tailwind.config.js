/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "#051812",
        "surface-container-lowest": "#020d09",
        "surface-dim": "#051812",
        background: "#051812",
        "surface-container-low": "#092219",

        "surface-container": "#161D1A",
        "surface-container-high": "#1F2623",
        "surface-container-highest": "#2B3330",
        "surface-variant": "#1A211E",

        primary: "#34D399",
        "primary-container": "#059669",
        "on-primary": "#003724",

        tertiary: "#D8B4FE",
        "tertiary-container": "#5B21B6",
        "on-tertiary": "#2E0063",

        secondary: "#94A3B8",
        "on-surface": "#F1F5F9",
        "on-background": "#F1F5F9",
        outline: "#475569",
      },
      borderRadius: {
        DEFAULT: "4px",
        lg: "8px",
        xl: "16px",
        "2xl": "24px",
        full: "9999px",
      },
      spacing: {
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        gutter: "32px",
        unit: "12px",
        "container-max": "1200px",
      },
      fontFamily: {
        "label-md": ["Geist", "sans-serif"],
        "headline-xl": ["Inter", "sans-serif"],
        "headline-md": ["Inter", "sans-serif"],
        "code-sm": ["Geist", "mono"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-lg-mobile": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-lg": ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
