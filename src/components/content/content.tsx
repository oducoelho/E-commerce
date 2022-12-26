import { ContentContainer } from '../../styles/pages/content'
import { BuyArea } from './components/BuyArea'
import { Images } from './components/Images'

export const Content = () => {
   return (
    <ContentContainer>
      <Images />
      <BuyArea />
    </ContentContainer>
   )
}