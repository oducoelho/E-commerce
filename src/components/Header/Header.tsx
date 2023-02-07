import { ShoppingCart, Trash } from "phosphor-react"
import Avatar from '../../assets/image-avatar.png'
import { Button, CartNotEmpty, CheckoutContent, DialogContent, DialogLine, DialogOverlay, DialogTitle, Fieldset, Flex, HeaderContainer, HeaderPartOne, HeaderPartTwo, IconButton, Input, Label } from "../../styles/pages/Header"

import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useCart } from "../../hook/useCart";

import thumb1 from '../../assets/image-thumbnail-1.jpg'
import { CartItem } from "../../context/CartContext";

interface CartProps {
  shoe: CartItem
}

export const Header = ({ shoe }: CartProps) => {
  const { cartItems, removeCartItem, cartItemsTotal,  } = useCart()
  const removeShoe = () => {
    alert('removeu')
  }

  return (
    <HeaderContainer>
      <HeaderPartOne>
        <span>sneakers</span>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </HeaderPartOne>

      <HeaderPartTwo>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button><ShoppingCart size={30} color="hsl(219, 9%, 45%)" /></Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <DialogOverlay />
            <DialogContent>
              <DialogTitle>Cart</DialogTitle>
              <DialogLine>
              </DialogLine>
              {
                cartItems.length === 0 ?
              <Fieldset>
                <h1>Your cart is empty</h1>
              </Fieldset>  
              :
              <CartNotEmpty>
                <img src={thumb1} alt="" />
                <CheckoutContent>
                  <p>Fall Limited Edition Sneakers</p>
                  <div>
                    $125.00 x {cartItems.map((quantity) => (quantity.quantity))} <strong>{cartItemsTotal}</strong>
                  </div>
                </CheckoutContent>
                <span>
                  <Trash size={25} onClick={removeShoe} />
                </span>
              </CartNotEmpty>
              }
              <Dialog.Close asChild>
                <IconButton aria-label="Close">
                  <Cross2Icon />
                </IconButton>
              </Dialog.Close>
            </DialogContent>
          </Dialog.Portal>
        </Dialog.Root>

        <img src={Avatar} alt="" />
      </HeaderPartTwo>
    </HeaderContainer>
  )
}