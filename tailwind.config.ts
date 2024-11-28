import type { Config } from "tailwindcss";
import scrollbarPlugin from "tailwind-scrollbar";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-pattern": `
          repeating-linear-gradient(45deg, #b645f7 25%, transparent 25%, transparent 75%, #b645f7 75%, #b645f7),
          repeating-linear-gradient(45deg, #b645f7 25%, #e6f7f7 25%, #e6f7f7 75%, #b645f7 75%, #b645f7)
        `,
      },
      fontFamily: {
        ticketing: ["var(--font-ticketing)"],
        ppg: ["var(--font-ppg)"],
        outfit: ["var(--font-outfit)"]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [scrollbarPlugin({ nocompatible: true })],
} satisfies Config;
