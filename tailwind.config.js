/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media' if you prefer system preference
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-primary': '#A020F0', // Example: Purple
        'custom-secondary': '#FFD700', // Example: Gold
      },
      fontFamily: {
        'custom-sans': ['Roboto', 'sans-serif'], // Example: Roboto font
        'custom-serif': ['Merriweather', 'serif'], // Example: Merriweather font
      },
      spacing: {
        '128': '32rem', // Example: Adding a large spacing utility
      }
    },
  },
  plugins: [],
}
