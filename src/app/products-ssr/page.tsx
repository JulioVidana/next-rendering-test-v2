import { Product } from '@/types/product'
import ProductList from '../components/products/ProductList'

export const metadata = {
  title: "Products SSR",
  description: "Products Server Side Rendering",
}
const fetchProducts = async () => {
  const res = await await fetch('https://gila-render-test-default-rtdb.firebaseio.com/rendering/products.json',
    { cache: 'no-cache' })
  const data = await res.json() as Product[]
  return data
}

export default async function ProductsSSR() {
  const data = await fetchProducts()

  return (
    <ProductList
      title="SSR"
      description="Products Server Side Rendering"
      data={data}
      pathname="products-ssr"
    />
  )
}
