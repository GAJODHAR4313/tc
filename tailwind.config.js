/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./src/Components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        fakihwang: ['Fahkwang', 'sans-serif', '"Google Sans Flex"' ],
      },
    },
  },
  plugins: [],
}