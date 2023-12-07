module.exports = {
  content: ["./index.html"],

  theme: {
    fontSize: {
      '2xs': '0.5rem', /* 8px */
      'xs': '0.625rem', /* 10px */
      'sm': '0.75rem', /* 12px */
      'base': '0.875rem', /* 14px */
      'xl': '1rem', /* 16px */
      '2xl': '1.125rem', /* 18px */
      '3xl': '1.25rem', /* 20px */
      '4xl': '1.5rem', /* 24px */
      '5xl': '2rem', /* 32px */
      '6xl': '2.5rem', /* 40px */
    },
    extend: {
      screens: {
        'xsm': '375px',
      },
      gridTemplateColumns: {
        'max/1fr': 'max-content 1fr',
      },
      spacing: {
        '13': '3.25rem',
        '19': '4.75rem',
        '26': '6.75rem',
        '30': '7.5rem',
        '33': '8.25rem',
        '34': '8.5rem',
        '35': '8.75rem',
        '38': '9.5rem',
        '42': '10.5rem',
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
        primary: {
          100: '#0b1523',
          200: '#181f2a',
          300: '#1c2431',
          400: '#202a3c',
        },
      },
      backgroundImage: {
        'cta': 'linear-gradient(#63E1D9, #34A0CD)',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
      lineHeight: {
        '4.5': '1.125rem',
        '7.5': '1.875rem',
        '12': '3rem',
        '15': '3.75rem',
      },
      boxShadow: {
        'light': '5px 5px 8px 4px rgba(56, 56, 56, 0.10)',
        'dark': '5px 5px 8px 0px rgba(0, 0, 0, 0.25)',
      }
    },
  },

  plugins: [],
}