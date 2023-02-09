import { styled } from "..";

export const ContentContainer = styled('div', {
  display: 'flex',
  margin: '0 100px',

  '@media (max-width: 1024px)': {
    display: 'flex',
    flexDirection: 'column',
    margin: '0px',
  },
  
  '@media (max-width: 1440px)': {
    margin: '0 50px',
  },
  
  '@media (max-width: 425px)': {
    display: 'flex',
    flexDirection: 'column',
    margin: '0px',
  },

})  