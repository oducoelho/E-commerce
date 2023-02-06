import React from "react"

import { Header } from "./components/Header/Header"
import { Content } from "./components/content/content"
import { globalStyles } from "./styles/global"
import { CartContextProvaider } from "./context/CartContext"

globalStyles()

export const App = () => {
  return (
    <CartContextProvaider>
      <Header />
      <Content />
    </CartContextProvaider>
  )
}

export default App
