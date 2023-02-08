import { styled } from "..";

export const ContentContainer = styled('div', {
  display: 'flex',
  margin: '0 100px',

  '@media (max-width: 425px)': {
    display: 'flex',
    flexDirection: 'column',
    margin: '0px',
  },
})  