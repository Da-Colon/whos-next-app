 // tailwind.config.js
 module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    colors: {
      black: '#25282b',
      white: '#FFFFFF',
      gray: {
        300: '#9A9A9A',
        400: '#888293',
        500: '#29262F',
        600: '#0C0C0C',
        900: '#060706',
      },
      background: 'rgb(11,11,11)',
      "primary-purple": "#AA50F9",
      "primary-light-purple": "#D5A8FC",
      "secondary-dark-purple": "#9037DE",
      "gradient-purple-one": "linear-gradient(126deg, #C158F5, #CC9BF8)",
      "gradient-purple-two": "linear-gradient(126deg, #9258F5, #CC9BF8)",
      "gradient-purple-fuschia": "linear-gradient(126deg, #A958F5, #D57CA3)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem', // 16 px
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      xs: '520px',
      sm: '780px',
      md: '968px',
    },
    extend: {
      fontFamily: {
        sans: ['Roboto Mono'], // Roboto Mono
      },
      fontSize: {
        '3xs': '0.5rem',      // 8px
        '2xs': '0.625rem',    // 10px
        sm: '0.8125rem',      // 13px
        md: '0.875rem',       // 14px
        base: '1rem',         // 16px
        lg: '1.25rem'         // 20px
      },
    },
  },
   variants: {
     extend: {},
   },
   plugins: [],
 }