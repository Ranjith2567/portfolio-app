/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customblue: {
          dark: '#438797',     // Primary Dark Blue shade
          DEFAULT: '#59A9B5',  // Main Bright Blue shade
          light: '#E2F3F9',    // Light Background Blue shade
          bg: '#0f172a'        // Deep background for contrast
        }
      }
    },
  },
  plugins: [],
}