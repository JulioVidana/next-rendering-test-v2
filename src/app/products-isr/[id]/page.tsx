import { Product } from '@/types/product'
import Breadcrumbs from '../../components/navigation/Breadcrumbs'
import ProductView from '../../components/products/ProductView'
import type { Metadata } from "next"

// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
  const products = await fetch('https://gila-render-test-default-rtdb.firebaseio.com/rendering/products.json')
    .then((res) => res.json()) as Product[]

  return products.map((product) => ({
    id: product.id,
  }))
}

const fetchProduct = async (id: string) => {
  const response = await fetch(`https://gila-render-test-default-rtdb.firebaseio.com/rendering/products/${id}.json`, {
    next: {
      revalidate: 10
    }
  })
  const data = await response.json() as Product
  return data
}

//define metadata for dynamic page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // read route params
  const id = params.id

  // fetch data
  const product = await fetchProduct(id)

  const title = product?.name || 'Product'
  const desc = product?.description || 'Product Detail'
  const imageUrl = product?.imageSrc


  return {
    title: `${title} | Products ISR`,
    description: desc,
    openGraph: {
      images: [imageUrl]
    },
  }
}

export default async function ProductDetailISR({ params }: { params: { id: string } }) {
  const { id } = params
  const product = await fetchProduct(id)

  return (
    <div className="bg-white">
      <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <Breadcrumbs
          current={product?.name}
          breadcrumbs={[
            { id: 1, name: 'Home', href: '/' },
            { id: 2, name: 'ISR', href: '/products-isr' },
          ]}
        />
        <ProductView product={product} />
      </div>
    </div>
  )
}
