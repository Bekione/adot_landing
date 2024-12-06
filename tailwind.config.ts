import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#503c3c",
        secondary: "#d5cea3",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            "backgroundPosition": "0 0",
          },
          to: {
            "backgroundPosition": "-200% 0",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      cursor: {
        custom: "url('/cursor.cur'), auto",
      },
      fontFamily: {
        techniq: ["var(--font-techniq-u)", "sans-serif"],
        techniqOutlined: ["var(--font-techniq-o)", "sans-serif"],
        ubuntuReg: ["var(--font-ubuntu-r)", "sans-serif"],
        ubuntuBold: ["var(--font-ubuntu-b)", "sans-serif"],
        manropeReg: ["var(--font-monrope-r)", "sans-serif"],
        manropeThin: ["var(--font-manrope-t)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
