import { Button, BuyAreaContainer, FinishArea, Price, ShopName, SubTitle, Title } from '../../../../styles/pages/buyArea'
import { ShoppingCart } from "phosphor-react"

export const BuyArea = () => {
  return (
    <BuyAreaContainer>
      <ShopName>SNEAKER COMPANY</ShopName>
      <Title>
        Fall Limited Edition Sneakers
      </Title>
      <SubTitle>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything
        the wheather can offer.
      </SubTitle>
      <Price>
        <span>$125.00</span>
        <strong>50%</strong>
        <p>$250.00</p>
      </Price>
      <FinishArea>
        <div>
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
        <Button>
          <ShoppingCart /> Add to cart
        </Button>
      </FinishArea>
    </BuyAreaContainer>
  )
}