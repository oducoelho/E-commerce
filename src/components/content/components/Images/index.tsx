import { ImagesContainer } from '../../../../styles/pages/images'
import FirstImage from '../../../../assets/image-product-1.jpg'

export const Images = () => {
  return (
    <ImagesContainer>
      <div><img src={FirstImage} alt="" /></div>
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
    </ImagesContainer>
  )
}