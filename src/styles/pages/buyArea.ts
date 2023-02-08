import { styled } from "..";

export const BuyAreaContainer = styled('div', {
  margin: '70px 0px 0px 150px',
  '@media (max-width: 425px)': {
    margin: '0px 10px 0px 10px',
  },
})
export const ShopName = styled('div', {
  fontSize: '$sm',
  fontWeight: '700',
  letterSpacing: '2px',
  color: '$orange',
  padding: '30px 0',
  
  '@media (max-width: 425px)': {
    padding: '10px 0',
  },
})
export const Title = styled('h1', {
  fontSize: '$4xl',
  paddingBottom: '30px',
  '@media (max-width: 425px)': {
    fontSize: '$3xl',
    paddingBottom: '10px',
  },
})
export const SubTitle = styled('p', {
  fontSize: '$sm',
  lineHeight: 1.6,
  paddingBottom: '30px',
  color: '$blue200',

  '@media (max-width: 425px)': {
    fontSize: '$lg',
    paddingBottom: '10px',
  },
})
export const Price = styled('div', {
  paddingBottom: '30px',

  '@media (max-width: 425px)': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  span: {
    fontSize: '$xl',
    fontWeight: '700',
    color: '#000000',

    '@media (max-width: 425px)': {
      fontSize: '$2xl',
    },
  },
  strong: {
    fontSize: '$md',
    fontWeight: '700',
    backgroundColor: '$orange100',
    color: '$orange',

    borderRadius: 8,
    padding: '2px 10px',
    marginLeft: '10px',
    
    '@media (max-width: 425px)': {
      fontSize: '$xl',
    },
  },
  p: {
    fontSize: '$md',
    fontWeight: '700',
    color: '$blue100',
    textDecoration: 'line-through',

        
    '@media (max-width: 425px)': {
      fontSize: '$xl',
    paddingTop: '5px'
    },
  },

})
export const FinishArea = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '20px', 
  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '150px',
    height: '50px',
    backgroundColor: '$blue',
    borderRadius: 8,
    button: {
      fontWeight: '700',
      fontSize: '$md',
      backgroundColor: '$blue',
      color: '$orange',
      border: 'none',
      margin: '0 30px',
      cursor: 'pointer',
    },
    span: {
      fontSize: '$md',
    },

    '@media (max-width: 425px)': {
      width: '100%',
    },
  },
  '@media (max-width: 425px)': {
    display: 'flex',
    flexDirection: 'column',
  },
  
})
export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',

  width: '100%',
  height: '50px',
  fontWeight: '700',
  fontSize: '$md',
  border: 'none',
  borderRadius: 8,
  backgroundColor: '$orange',
  color: '$white',
  boxShadow: '0px 20px 20px #FF7D1A33',
  cursor: 'pointer',
  '@media (max-width: 425px)': {
    marginBottom: '10px',
  },
})