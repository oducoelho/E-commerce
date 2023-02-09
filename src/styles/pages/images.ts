import { styled } from "..";

export const ImagesContainer = styled('div', {})
export const Thumbnails = styled('div', {
  div: {
    display: 'flex',
    flexDirection: 'row',
    gap: '42px',
    width: '100%',
    img: {
      marginTop: '30px',
      width: '95px',
      borderRadius: 8,
      cursor: 'pointer',
    },
    '@media (max-width: 768px)': {
      display: 'none',
    },
    
    '@media (max-width: 425px)': {
      display: 'none',
    },
  }
})
export const BigImage = styled('div', {
  marginTop: '40px',
  img: {
    width: '98%',
    borderRadius: 8,
  },
  '@media (max-width: 425px)': {
    marginTop: '0px',
    img: {
      width: '100%',
      borderRadius: 0,
    },
  },
})


export const TextStyled = styled('div', {
  img: {
    border: '3px solid $orange'
  }
})