module.exports = {
  content: ["./index.html"],

  theme: {
    extend: {
      screens: {
        'xsm': '375px',
      },
      gridTemplateColumns: {
        'max/1fr': 'max-content 1fr',
      },
      spacing: {
        '13': '3.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '26': '6.75rem',
        '30': '7.5rem',
        '33': '8.25rem',
        '34': '8.5rem',
        '35': '8.75rem',
        '38': '9.5rem',
        '70': '17.5rem',
        '76': '19rem',
        '212': '53rem',
      },
      maxWidth: {
        '1.5xl': '36.82rem',
        '2.5xl': '46rem',
        '880px': '55rem',
        '1440px': '90rem',
      },
      colors: {
        'mirage-100': '#0b1523',
        'mirage-200': '#181f2a',
        'mirage-300': '#1c2431',
        'mirage-400': '#202a3c',
      },
      backgroundImage: {
        'cta': 'linear-gradient(#63E1D9, #34A0CD)',
      },
      fontSize: {
        '4.5xl': '2.5rem',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      lineHeight: {
        '7.5': '1.875rem',
        '15': '3.75rem',
      },
    },
  },

  plugins: [],
}