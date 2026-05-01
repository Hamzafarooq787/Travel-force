module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fbbf24",
        "primary-dark": "#f59e0b",
        dark: "#1f2937",
        "gray-dark": "#6b7280",
      },
    },
  },
  plugins: [],
};