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
  //console.log(product)

  const { addToCart, changeCartItemQuantity } = useCart()

  const handleAddToCart = () => {
    const shoesToAdd = {
      ...product,
    }
    addToCart(shoesToAdd)
  }

  const handleIncrease = () => {
    changeCartItemQuantity(product.id, 'increase')
  }

  const handleDecrease = () => {
    changeCartItemQuantity(product.id, 'decrease')
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
              <span>{product.quantity}</span>
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