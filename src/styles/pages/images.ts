import { styled } from "..";

export const ImagesContainer = styled('div', {})
export const Thumbnails = styled('div', {
  div: {
    display: 'flex',
    flexDirection: 'row',
    gap: '40px',
    width: '100%',
    img: {
      marginTop: '30px',
      width: '95px',
      borderRadius: 8,
      cursor: 'pointer',
    }
  }
})
export const BigImage = styled('div', {
  img: {
    width: '50%',
    borderRadius: 8,
  }
})


export const TextStyled = styled('div', {
  img: {
    border: '3px solid $orange'
  }
})