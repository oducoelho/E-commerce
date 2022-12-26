import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches ({
  theme: {
    colors: {
      
      orange: 'hsl(26, 100%, 55%)',
      orange100: 'hsl(25, 100%, 94%)',

      blue300: 'hsl(220, 13%, 13%)',
      blue200: 'hsl(219, 9%, 45%)',
      blue100: 'hsl(220, 14%, 75%)',
      blue: 'hsl(223, 64%, 98%)',
      white: 'hsl(0, 0%, 100%)',
    },

    fontSizes: {
      ss: '1.2rem',
      sm: '1.4rem',
      md: '1.8rem',
      lg: '2.0rem',
      xl: '2.4rem',
      '2xl': '3.2rem',
      '3xl': '3.6rem',
      '4xl': '4.5rem',
    }
  }
})