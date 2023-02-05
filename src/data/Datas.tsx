import { BuyArea } from "../components/content/components/BuyArea"

export const shoe = () => {
  const Products = [
    {
      id: 1,
      name: 'SNEAKER COMPANY',
      title: 'Fall Limited Edition Sneakers',
      subTitle: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they ll withstand everything the wheather can offer.',
      price: 125.00,
      quantity: 1,
    },
  ]
  return (
    <div>
      {Products.map((product) => (
        <BuyArea key={product.id}  product={product}/>
      ))}
    </div>
  )
} 