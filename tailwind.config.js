/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#002e6d',
          yellow: '#ffe600',
        }
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 46, 109, 0.1), 0 2px 4px -1px rgba(0, 46, 109, 0.06)',
      },
      fontSize: {
        'xxs': '0.625rem',
      },
      height: {
        'screen-safe': '100vh',
        'screen-safe-svh': '100svh',
      },
    },
  },
  plugins: [],
};