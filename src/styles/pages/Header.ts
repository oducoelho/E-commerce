import { styled } from "..";
import { keyframes } from '@stitches/react';
import { violet, blackA, mauve, green } from '@radix-ui/colors';
import * as Dialog from '@radix-ui/react-dialog';

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '50px 0',
  paddingBottom: '50px',
  borderBottom: '1px solid $blue100',
  span: {
    fontSize: '$2xl',
    fontWeight: 700,
    '@media (max-width: 425px)': {
      paddingLeft: '55px',
    },
  },
  '@media (max-width: 425px)': {
    width: '100%', 
    margin: '0px',
    padding: '10px 10px',
  },
})
export const HeaderPartOne = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '100px',
  ul: {
    paddingTop: '7px',
    li: {
      listStyle: 'none',
      display: 'inline-block',
      marginRight: '20px',
      fontSize: '$md',
      color: '$blue200',

      '&:hover': {
        borderBottom: '3px solid orange',
        fontWeight: '700',
        color: '$black',
        cursor: 'pointer',
      }
    },
  },

  '@media (max-width: 425px)': {
    width: '100%',
    display: 'none',
  },
})
export const HeaderPartTwo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '30px',

  img: {
    width: '50px',
  },
  '@media (max-width: 425px)': {
    gap: '1px',
  },
})

////////////////////////Dialog///////////////////////

export const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

export const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'absolute',
  top: '14%',
  left: '67%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
  '@media (max-width: 425px)': {
    top: '21%',
    left: '50%',
  },
});

export const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  fontWeight: 500,
  color: mauve.mauve12,
  fontSize: 17,
});

export const DialogLine = styled(Dialog.Description, {
  border: '0.1px solid $blue100',
  margin: '20px 0px',

});

export const Flex = styled('div', { display: 'flex' });

export const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      violet: {
        backgroundColor: '$white',
        color: 'black',
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      green: {
        backgroundColor: green.green4,
        color: green.green11,
        '&:hover': { backgroundColor: green.green5 },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green7}` },
      },
    },
  },

  defaultVariants: {
    variant: 'violet',
  },
});

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: 'transparent' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

export const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  marginBottom: 15,
});

export const Label = styled('label', {
  fontSize: 15,
  color: violet.violet11,
  width: 90,
  textAlign: 'right',
});

export const Input = styled('input', {
  all: 'unset',
  width: '100%',
  flex: '1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 35,

  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

export const CartNotEmpty = styled('div', {
  display: 'flex',
  gap: '10px',
  img: {
    width: '70px',
    borderRadius: 8,
  },

  span: {
    padding: '20px 0px 0px 50px',
    cursor: 'pointer',

    '&:hover': {
      transition: '300ms',
      color: 'red',
    }
  },
})

export const CheckoutContent = styled('div', {
  display: 'flex',
  padding: '10px 0px',
  flexFlow: 'column',
  justifyContent: 'space-between',
  width: '250px',

  p: {
    fontSize: '15px',
  },

  div: {
    fontSize: '15px',
  }
})

export const CheckoutButton = styled('button', {
  width: '100%',
  height: '45px',
  borderRadius: 8,
  backgroundColor: '$orange',
  color: 'white',
  padding: '0px 10px',
  fontSize: '16px',
  margin: '30px 0px 0px 0px',
  border: 'none'
})

/////////////// Mobile Part //////////////////

export const MobileIcon = styled('div', {
  display: 'none',
  cursor: 'pointer',
  marginRight: '375px',
  zIndex: 10,
  color: '$gray100',
  '@media (max-width: 425px)': {
    display: 'block',
    position: 'fixed',
    top: '22px',
    cursor: 'pointer',
  }
})

export const MobileOptions = styled('div', {
  dispay: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alingItens: 'center',
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '60%',
  height: '100%',
  color: 'white',
  backgroundColor: 'white',
  ul: {
    li: {
      margin: '50px 0px 0px 50px',
      listStyle: 'none',
      color: 'black',
      fontSize: '$xl'
    }
  }
})
