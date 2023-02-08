/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grayish-blue': '#4e5d73',
        'dark-grayish-blue': '#323a49',
        'dark-blue': '#1f2632',
        'light-cyan': '#cee3e9',
        'neon-green': '#52ffa8'
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      fontWeight: {
        'weight-800': '800'
      },
      fontSize: {
        'size-28': '28px',
      },
      screens:{
        'mobile' : '375px',
        'desktop' : '1440px',
      },
      boxShadow:{

        'around' : '0 0 25px 5px rgb(0 0 0)'
      }
    },
  },
  plugins: [],
}
