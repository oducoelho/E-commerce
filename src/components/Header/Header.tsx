import { ShoppingCart } from "phosphor-react"
import Avatar from '../../assets/image-avatar.png'
import { Button, DialogContent, DialogLine, DialogOverlay, DialogTitle, Fieldset, Flex, HeaderContainer, HeaderPartOne, HeaderPartTwo, IconButton, Input, Label } from "../../styles/pages/Header"

import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

export const Header = () => {
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
              <Fieldset>
                <h1>Your cart is empty</h1>
              </Fieldset>
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