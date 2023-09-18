/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Barlow Condensed', 'sans-serif'],
        button: ['Saira' , 'sans-serif'],
        gilroy: ['Gilroy-Bold' , 'sans-serif'],
        stats: ['Sedgwick Ave Display' , 'sans-serif'],
        section: ['Anton' , 'sans-serif'],
        dsans: ['DM Sans' , 'sans-serif'],
      },
      screens: {
        xs: '480px',
        lg: '992px',
        xl: '1200px',
      },
      colors: {
        'secondary-black': '#121212',
        'primary-black': '#020202',
        'dark': '#161617',
        'gray': '#5D636A',
        'primary-gray': '#909090',
        'light-gray': '#F3F3F3',
        'default-gray': '#808080',
        'gray-secondary': '#2C2C2C',
        'secondary-red': '#F03C48',
        'primary-red': '#F23949',
        'orange': '#F0883C',
        'card-dark': '#1D1D1D',
        'blue': '#3C5A99',
        'input-bg': '#E0E0E0',
      },
    },

    container: {
      // you can configure the container to be centered
      center: true,

      // default breakpoints but with 40px removed
      screens: {
        xl: '1214px',
      },
    }
  },
  plugins: [],
}

