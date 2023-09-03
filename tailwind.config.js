/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Bebas': ['Bebas Neue'],
        'Oswald': ['Oswald'],
        'Roboto': ['Roboto Condensed'],
        'Barlow': ['Barlow Condensed'],
      },
      screens:{
        'mn': '1135px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
  ],
}