module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html,js,jsx,ts,tsx}",
    'index.html'
  ],
  theme: {
    extend: {
      colors: {
        'main': {
          DEFAULT: "#037bfe"
        },
        'dark': {
          DEFAULT: "#0a1930"
        },
        'light': {
          DEFAULT: '#ccd7f5'
        },
        'gray': {
          DEFAULT: "#8893af"
        }
      },
      fontFamily: {
        'code': ['Source Code Pro', 'monospace']
      }
    },
  },
  plugins: [],
}
