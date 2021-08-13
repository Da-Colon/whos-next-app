 // tailwind.config.js
 module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    container: {
      center: true,
      screen: {
        'xs': '280px',
        'sm': '320px',
        'md': '640px',
        'lg': '1024px',
        '2xl': '1268px'
      }
    },
    extend: {
      colors: {
        black: '#25282b',
        white: '#FFFFFF',
        ghost_white: '#BFBFBF',
        gray: {
          300: '#9A9A9A',
          400: '#888293',
          500: '#29262F',
          600: '#0C0C0C',
          900: '#060706',
        },
        background: 'rgb(11,11,11)',
        light_green: '#16A7A2',
        dark_green: '#193d49',
        gold: '#fada22',
      },
      width: {
        '80': '20rem' // 320px
      },
      height: {
        '4.5': '4.5rem'
      },
      boxShadow: {
        hover: '4px 4px 0px 0px #000000',
        inset: 'inset 0px 0px 6px 4px #000000',
      },
      maxWidth: {
        '256': '64rem', // 1024px
        '128': '32rem', // 512px
      },
      fontFamily: {
        sans: ['Roboto Mono'], // Roboto Mono
      },
      fontSize: {
        '8': '0.5rem',      // 8px
        10: '0.625rem',    // 10px
        13: '0.8125rem',      // 13px
        14: '0.875rem',       // 14px
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