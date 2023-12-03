module.exports = {
  content: ["./index.html"],

  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
        '18': '4.5rem',
      },
      colors: {
        'mirage-100': '#0b1523',
        'mirage-200': '#181f2a',
        'mirage-300': '#1c2431',
        'mirage-400': '#202a3c',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      screens: {
        'xsm': '375px',
      },
    },
  },

  plugins: [],
}