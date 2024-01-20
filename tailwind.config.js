/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        euclid: ['Euclid Circular A', 'sans-serif'],
        evolventa: ['Evolventa', 'sans-serif']
      },
 
      rotate: {
        '30': '-35deg',
        '60': '-145deg',
      },
      screens: {
  
        'sm': {'min': '330px', 'max': '767px'}, 
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px'},
       },
    }
  },
  plugins: [],
};
