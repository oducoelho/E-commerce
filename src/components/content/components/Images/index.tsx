import { BigImage, ImagesContainer, TextStyled, Thumbnails } from '../../../../styles/pages/images'
import { useState } from 'react'

import FirstImage from '../../../../assets/image-product-1.jpg'
import FirstImage2 from '../../../../assets/image-product-2.jpg'
import FirstImage3 from '../../../../assets/image-product-3.jpg'
import FirstImage4 from '../../../../assets/image-product-4.jpg'

import thumb1 from '../../../../assets/image-thumbnail-1.jpg'
import thumb2 from '../../../../assets/image-thumbnail-2.jpg'
import thumb3 from '../../../../assets/image-thumbnail-3.jpg'
import thumb4 from '../../../../assets/image-thumbnail-4.jpg'

export const Images = () => {
  const [selected, setSelected] = useState(FirstImage)

  return (
    <ImagesContainer>
      <BigImage>
        <img src={selected} alt="" />
      </BigImage>

      <Thumbnails>
        <div>
          <img src={thumb1} alt="" onClick={
            () => {
              setSelected(FirstImage)
            }
          } />
          <img src={thumb2} alt="" onClick={
            () => {
              setSelected(FirstImage2)
            }
          } />
          <img src={thumb3} alt="" onClick={
            () => {
              setSelected(FirstImage3)
            }
          } />
          <img src={thumb4} alt="" onClick={
            () => {
              setSelected(FirstImage4)
            }
          } />
        </div>
      </Thumbnails>
    </ImagesContainer>
  )
}