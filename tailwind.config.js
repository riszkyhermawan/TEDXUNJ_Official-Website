/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'artega' : ["Artega", 'sans-serif']
      },
      fontSize: {
        'xxxs' : '0.4rem',
        'xxs' : '0.6rem',
      }
    },
  },
  plugins: [
],
})

