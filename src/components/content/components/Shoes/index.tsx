import { BuyArea } from "../BuyArea"

export const Shoes = () => {
  const Products = [
    {
      id: 1,
      shopName: 'SNEAKER COMPANY',
      title: 'Fall Limited Edition Sneakers',
      subTitle: 'These low-profile sneakers are your perfect casual wear companion Featuring a durable rubber outer sole, they ll withstand everything theweather can offer.',
      price: 125,
      quantity: 1,
    },
  ]
  return (
    <div>
      {Products.map((product) => (
        <BuyArea key={product.id} product={product} />
      ))}
    </div>
  )
}