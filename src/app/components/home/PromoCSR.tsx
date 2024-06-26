'use client'

import { useState, useEffect } from 'react'
import { Promo } from '@/types/promo'
import Image from 'next/image'
import Link from 'next/link'

const PromoCSR = () => {
  const [promo, setPromo] = useState<Promo | null>(null)
  useEffect(() => {
    async function fetchPromos() {
      const resp = await fetch('https://gila-render-test-default-rtdb.firebaseio.com/rendering/promo.json')
      const data = await resp.json()
      setPromo(data[0])
    }
    fetchPromos()
  }, [])

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {promo?.title}
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              {promo?.description}
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {
                        promo?.images.map((image, index) => (
                          <div key={index} className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <div className="h-full w-full object-cover object-center">
                              <Image
                                src={image.src}
                                alt={'image'}
                                width={352}
                                height={512}
                              />
                            </div>
                          </div>
                        ))
                      }
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <div className="h-full w-full object-cover object-center">
                          <Image
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            alt={'image'}
                            width={352}
                            height={512}
                          />
                        </div>


                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <div className="h-full w-full object-cover object-center">
                          <Image
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            alt={'image'}
                            width={352}
                            height={512}
                          />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/products-csr"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                CSR Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromoCSR