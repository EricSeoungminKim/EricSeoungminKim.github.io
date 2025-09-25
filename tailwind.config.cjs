/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        seoungmin: {
          primary: "#7C3AED", // violet-600
          secondary: "#A78BFA", // violet-300
          accent: "#C084FC", // fuchsia/violet accent
          neutral: "#1F2937", // gray-800
          "base-100": "#F5F3FF", // violet-50 background
          "base-200": "#EDE9FE",
          "base-300": "#DDD6FE",
          info: "#38BDF8",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
      "dark",
    ],
    darkTheme: "dark",
    logs: false,
  },
};
