import { styled } from "..";

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '50px 0',
  paddingBottom: '50px',
  borderBottom: '1px solid $blue100',
})

export const HeaderPartOne = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '100px',
  span: {
    fontSize: '$2xl',
    fontWeight: 700,
  },
  ul: {
    paddingTop: '7px',
    li: {
      listStyle: 'none',
      display: 'inline-block',
      paddingRight: '20px',
      fontSize: '$md',
      color: '$blue200'
    },
  },
})

export const HeaderPartTwo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '30px',

  img: {
    width: '50px',
  }
})