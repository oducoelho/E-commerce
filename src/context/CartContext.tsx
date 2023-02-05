import { createContext, ReactNode, useState } from "react";
import { produce } from 'immer'
import { Product } from '../components/content/components/BuyArea';

export interface CartItem extends Product {
  quantity: number
}

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cartItems: Product[],
  addToCart: (product: Product) => void
  removeCartItem: (productId: number) => void
  cleanCart: () => void
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const productAlreadyInCart = cartItems.findIndex(
      (cartiItem) => cartiItem.id === product.id,
    )
    const newCart = produce(cartItems, (draft) => {
      if (productAlreadyInCart < 0) {
        draft.push(product)
      } else {
        draft[productAlreadyInCart].quantity += product.quantity
      }
    })
    setCartItems(newCart)
  }

  const removeCartItem = (productId: number) => {
    const newCart = produce(cartItems, (draft) => {
      const shoesExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === productId,
      )

      if (shoesExistsInCart >= 0) {
        draft.splice(shoesExistsInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  const cleanCart = () => {
    setCartItems([])
  }

  console.log(cartItems)

  return (  
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeCartItem,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}