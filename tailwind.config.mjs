/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        muted: "#64748b",
        line: "#e2e8f0",
        brand: "#2563eb",
        "brand-dark": "#1d4ed8",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "\"Segoe UI\"",
          "sans-serif",
        ],
      },
      maxWidth: {
        page: "1080px",
      },
    },
  },
  plugins: [],
};
