module.exports = {
  content: ["./index.html"],

  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '70': '17.5rem',
        '76': '19rem',
        '212': '53rem',
      },
      maxWidth: {
        '1.5xl': '36.82rem',
        '2.5xl': '46rem',
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