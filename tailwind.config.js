/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        ...require('tailwindcss/defaultConfig').theme.container,
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
          xl: '2rem',
        },
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1100px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [],
};
