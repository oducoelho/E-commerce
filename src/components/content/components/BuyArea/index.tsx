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

export const BuyArea = () => {

  return (
    <BuyAreaContainer>
        <div>
          <ShopName>SNEAKER COMPANY</ShopName>
          <Title>Fall Limited Edition Sneakers</Title>
          <SubTitle> 
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything the
            weather can offer.
          </SubTitle>
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
            <Button>
              <ShoppingCart /> Add to cart
            </Button>
          </FinishArea>
        </div>
    </BuyAreaContainer>
  )
}