/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "#1f2124",
        input: "#1f2124",
        ring: "#2e7d46",
        background: "#0a0a0a",
        foreground: "#f5f7fb",
        primary: {
          DEFAULT: "#2e7d46",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1f2124",
          foreground: "#f5f7fb",
        },
        accent: {
          DEFAULT: "#2e7d46",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#c7c9d1",
          foreground: "#c7c9d1",
        },
        card: {
          DEFAULT: "#121316",
          foreground: "#f5f7fb",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}

