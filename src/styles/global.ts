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