import { styled } from "..";

export const ContentContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  margin: '0 100px'
  /*
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
  */
})