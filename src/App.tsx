import React from "react"

import { Header } from "./components/Header/Header"
import { Content } from "./components/content/content"
import { globalStyles } from "./styles/global"

globalStyles()

export const App = () => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  )
}

export default App
