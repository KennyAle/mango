'use client'

import { DummyProduct } from "@/types/product.types"
import Image from "next/image"
import { useEffect, use, useState } from "react"

type Props = {
  params: Promise<{id: string}>
}

const ProductDetail = ({ params }: Props) => {
  const [thisProduct, setThisProduct] = useState<DummyProduct>({
    id: 0,
    title: '',
    description: '',
    price: 0,
    category: '',
    thumbnail: ''
  })

  const { id } = use(params)

  useEffect(() => {
    const fetchProduct = async() => {
      const res = await fetch(`https://dummyjson.com/product/${id}`)
      const data = await res.json()
      setThisProduct(data)
    }

    fetchProduct()
  }, [])
  
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className="flex justify-center items-center w-3/4">
        {thisProduct.thumbnail && (
          <div className="relative w-[500px] h-[500px]">
            <Image src={thisProduct.thumbnail} alt={thisProduct.title} fill className="object-contain"/>
          </div>
        )}
        <div>
          <h2 className="text-3xl mb-4">{thisProduct.title}</h2>
          <p>{thisProduct.description}</p>
          <p className="my-2">Category: {thisProduct.category}</p>
          <p className="mt-4 text-xl">${thisProduct.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail