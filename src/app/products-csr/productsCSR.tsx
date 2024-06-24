'use client'

import { useEffect, useState } from 'react'
import { Product } from '@/types/product'
import ProductList from '../components/products/ProductList'

const ProductsCSR = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('https://gila-render-test-default-rtdb.firebaseio.com/rendering/products.json')
      const data = await res.json()
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <ProductList
      title="CSR"
      description="Products Client Side Rendering"
      data={products}
      pathname="products-csr"
    />
  )
}

export default ProductsCSR