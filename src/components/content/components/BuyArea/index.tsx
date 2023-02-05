import { ShoppingCart } from "phosphor-react"
import { useCart } from '../../../../hook/useCart'
import { 
  Button,   
  BuyAreaContainer, 
  FinishArea, 
  Price, 
  ShopName, 
  SubTitle, 
  Title 
} from '../../../../styles/pages/buyArea'

export interface Product {
  id: number
  name: string
  title: string
  subTitle: string
  price: number
  quantity: number
}
interface ProductProps {
  product: Product
} 

export const BuyArea = ({ product }: ProductProps) => {
  const { addToCart } = useCart()

  console.log(product)

  return (
    <BuyAreaContainer>
        <div>
          <ShopName></ShopName>
          <Title></Title>
          <SubTitle></SubTitle>
          <Price>
            <span>$</span>
            <strong>50%</strong>
            <p>$250.00</p>
          </Price>
          <FinishArea>
            <div>
              <button>-</button>
              <span></span>
              <button>+</button>
            </div>
            <Button onClick={() => addToCart({...product})}>
              <ShoppingCart /> Add to cart
            </Button>
          </FinishArea>
        </div>
    </BuyAreaContainer>
  )
}