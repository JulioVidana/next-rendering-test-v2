import { Product } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  title: string
  description?: string
  data: Product[]
  pathname: string
}


export default function ProductList({ title, description, data, pathname }: Props) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-center mb-12">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="flex justify-center mb-12">
          <p className="text-lg text-gray-500">{description}</p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <Link href={`/${pathname}/${product.id}`} key={product.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image src={product.imageSrc} alt={product.imageAlt} layout="fill" objectFit="cover" />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
