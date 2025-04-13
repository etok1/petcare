/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenCustom: "#059669", 
        desktop: '#fbfbfb',
        darkGreen: '#264a3d',
        pastelGreen: '#07c381',
        formBorder: '#cbd5e0',
        btnBorder: '#4b5563',
        brown: '#3c2e24',
        whitish: "#F5F5F5",
        grey: '#37474f',
        

      },
      fontFamily: {
        comfortaa: ['"Comfortaa"', 'sans-serif'],
        inter: ['Inter', 'serif'],
        poppins: ["Poppins", "sans-serif"],
        exo: ['"Exo 2"', 'sans-serif']
      },
    },
  },
  plugins: [],
}