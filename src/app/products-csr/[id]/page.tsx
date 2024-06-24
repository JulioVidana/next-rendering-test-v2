'use client'
import { useState, useEffect } from 'react'
import { Product } from '@/types/product'
import Breadcrumbs from '../../components/navigation/Breadcrumbs'
import ProductView from '../../components/products/ProductView'

const ProductDetailCSR = ({ params }: { params: { id: string } }) => {
  const { id } = params
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    async function getProduct() {
      const hardId = Number(id) - 1
      const response = await fetch(`https://gila-render-test-default-rtdb.firebaseio.com/rendering/products/${hardId}.json`)
      const data = await response.json()
      setProduct(data)
    }
    if (id) getProduct()

  }, [id])


  if (!product) return null

  return (
    <div className="bg-white">
      <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <Breadcrumbs
          current={product.name}
          breadcrumbs={[
            { id: 1, name: 'Home', href: '/' },
            { id: 2, name: 'CSR', href: '/products-csr' },
          ]}
        />
        <ProductView product={product} />
      </div>
    </div>
  )
}

export default ProductDetailCSR