import { ContentContainer } from '../../styles/pages/content'
import { Shoes } from './components/Shoes'
import { Images } from './components/Images'

export const Content = () => {
   return (
    <ContentContainer>
      <Images />
      <Shoes />
    </ContentContainer>
   )
}