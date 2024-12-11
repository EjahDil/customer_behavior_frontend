/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      satoshi: ['Satoshi', 'sans-serif'],
    },
    extend: {
      colors: {
        'cbt-primary': '#00B8D4',
        'cbt-secondary': '#181D23',
        'cbt-gray': '#F2F2F2',
        'cbt-auth-bg': '#F3F8F9',
        white: '#FFFFFF',
        black: '#1C2434',
        success: '#219653',
        danger: '#D34053',
        warning: '#FFA70B',
      },
    },
  },
  plugins: [],
}

