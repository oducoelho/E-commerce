import { ShoppingCart } from "phosphor-react"
import Avatar from '../../assets/image-avatar.png'
import { HeaderContainer, HeaderPartOne, HeaderPartTwo } from "../../styles/pages/Header"

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
        <ShoppingCart size={30} color="hsl(219, 9%, 45%)" />
        <img src={Avatar} alt="" />
      </HeaderPartTwo>
    </HeaderContainer>
  )
}