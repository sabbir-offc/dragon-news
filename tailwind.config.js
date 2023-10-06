/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        poppins: "'Poppins', sans- serif",
      },
      spacing: {
        'decrease': 'calc(100vh - 180px)',
      },
    },
  },
  plugins: [require("daisyui")],
}

