/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      screens: {
        'sm': {'min': '330px', 'max': '1000px'}, 
       'md': {'min': '768px', 'max': '1023px'},
       'lg': {'min': '1024px', 'max': '1279px'},
        'xl': {'min': '1280px', 'max': '1535px'},
        '2xl': {'min': '1536px'},
  
      },
      rotate: {
        '30': '-35deg',
        '60': '-145deg',
      
      },
    },
  },
  plugins: [],
};

     