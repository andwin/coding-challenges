type Product = {
  product: string
  quantity: number
  price: number
}

const getTotalPrice = (products: Product[]): number => {
  const totalPrice = products.reduce((acc, product) => acc + product.quantity * product.price * 100, 0)
  return totalPrice / 100
}

export default getTotalPrice
