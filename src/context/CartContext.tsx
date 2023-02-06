import { createContext, ReactNode, useState } from 'react'
import { produce } from 'immer'
import { Product } from '../components/content/components/BuyArea/index'

export interface CartItem extends Product {
  quantity: number
}

interface CartContextProvaiderProps {
  children: ReactNode
}

interface CartContextType {
  cartItems: Product[]
  cartItemsTotal: number
  cartQuantity: number
  addToCart: (product: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCartItem: (productId: number) => void
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvaider = ({ children }: CartContextProvaiderProps) => {
  const [cartItems, setCartItems] = useState<Product[]>([])

  console.log(cartItems)

  const addToCart = (product: CartItem) => {
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

  const cartQuantity = cartItems.length

  const changeCartItemQuantity = (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => {
    const newCart = produce(cartItems, (draft) => {
      const shoesExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )
      if (shoesExistsInCart >= 0) {
        const item = draft[shoesExistsInCart]
        draft[shoesExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })
    setCartItems(newCart)
  }

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

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
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        changeCartItemQuantity,
        removeCartItem,
        cartItemsTotal,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
