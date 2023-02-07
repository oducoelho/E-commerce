import { ShoppingCart } from "phosphor-react"
import { 
  Button,   
  BuyAreaContainer, 
  FinishArea, 
  Price, 
  ShopName, 
  SubTitle, 
  Title 
} from '../../../../styles/pages/buyArea'
import { useCart } from '../../../../hook/useCart'
import { useState } from "react";

export interface Product {
  id: number;
  shopName: string;
  title: string;
  subTitle: string;
  price: number;
  quantity: number;
}
interface ProductProps {
  product: Product
}

export const BuyArea = ({ product }: ProductProps) => {
  const [quantity, setQuantity] = useState(0)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    const shoesToAdd = {
      ...product,
      quantity,
    }
    addToCart(shoesToAdd)
  }
  const handleIncrease = () => {
    setQuantity((state) => state + 1)
  }
  const handleDecrease = () => {
    setQuantity((state) => Math.max(state - 1, 1))
  }

  return (
    <BuyAreaContainer>
        <div>
          <ShopName>{product.shopName}</ShopName>
          <Title>{product.title}</Title>
          <SubTitle>{product.subTitle}</SubTitle>
          <Price>
            <span>${product.price}</span>
            <strong>50%</strong>
            <p>$250.00</p>
          </Price>
          <FinishArea>
            <div>
              <button onClick={handleDecrease}>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncrease}>+</button>
            </div>
            <Button onClick={handleAddToCart}>
              <ShoppingCart /> Add to cart
            </Button>
          </FinishArea>
        </div>
    </BuyAreaContainer>
  )
}