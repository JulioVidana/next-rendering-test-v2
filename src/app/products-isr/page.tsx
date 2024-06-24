import { Product } from '@/types/product'
import ProductList from '../components/products/ProductList'

export const metadata = {
  title: "Products ISR",
  description: "Products Incremental Static Regeneration",
}

const fetchProducts = async () => {
  const res = await await fetch('https://gila-render-test-default-rtdb.firebaseio.com/rendering/products.json', {
    next: {
      revalidate: 10
    }
  })
  const data = await res.json() as Product[]
  return data
}

export default async function ProductsISR() {
  const data = await fetchProducts()

  return (
    <ProductList
      title="ISR"
      description="Products Incremental Static Regeneration"
      data={data}
      pathname="products-isr"
    />
  )
}
