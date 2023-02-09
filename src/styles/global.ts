import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    '::-webkit-scrollbar': {
      width: '7px',
    },

    '::-webkit-scrollbar-track': {
      background: '$white',
    },

    '::-webkit-scrollbar-thumb': {
      background: '$orange100',
      borderRadius: '0.5rem',
    },

    '::-webkit-scrollbar-thumb:hover': {
      background: '$orange',
    }
  },

  html: {
    fontSize: '62.5%',
  },

  body: {
    margin: '0 300px',
    backgroundColor: '$white',
    color: '#000',
    '-webkit-font-smoothing': 'antialiased',
    '@media (max-width: 1440px)': {
      margin: '0px 200px 100px 200px',
    },
    '@media (max-width: 768px)': {
      margin: '0px 10px 0px 10px',
    },
    '@media (max-width: 425px)': {
      margin: '0px 0px',
    },
  },

  'body, input, textarea, button': {
    fontFamily: 'Kumbh Sans',
    fontWeight: 400,
  },

  '@media (max-width: 1440px)': {
    html: {
      fontSize: '50%',
    }
  },
  '@media (max-width: 1024px)': {
    html: {
      fontSize: '50%',
    }
  },
})