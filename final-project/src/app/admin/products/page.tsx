'use client'

import type { DummyProduct } from "@/types/product.types"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const AdminProducts = () => {
  const [products, setProducts] = useState<DummyProduct[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
        setProducts(data.products)
      } catch (err) {
        console.log(err)
      }
    }

    fetchProducts()
    console.log(products)
  }, [])

  const CategoryList = [
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "tops",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches"
  ]


  return (
    <div className="m-6 flex flex-col items-center">
      <h1 className="text-2xl mb-4">All Products</h1>
      <div className="w-full">
        {products.map((product: DummyProduct) => (
          <div key={product.id} className={`flex justify-between items-stretch ${product.id === 1 ? 'border' : 'border-x border-b'}`}>
            <div className="relative h-[150px] w-[150px] border-r">
              <Image src={product.thumbnail} alt={product.title} fill className="object-contain" /> 
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex gap-10 mb-2">
                <h3 className="text-xl line-clamp-2">{product.title}</h3>
                <p>Category: {product.category}</p>
              </div>
              <p className="max-w-[600px] line-clamp-2 mb-4 text-sm">{product.description}</p>
              <p className="text-lg">Price: ${product.price}</p>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center border-l px-4">
                <Link href={`/admin/product/${product.id}`}>
                  <button className="border rounded-lg py-2 px-4 cursor-pointer hover:bg-gray-200 transition">Detail</button>
                </Link>
              </div>
              <div className="flex items-center border-x px-4">
                <Link href={`/admin/edit-product/${product.id}`}>
                  <button className="border rounded-lg py-2 px-4 hover:bg-gray-200 transition">Edit</button>
                </Link>
              </div>
              <div className="flex items-center px-4">
                <button className="border rounded-lg py-2 px-4 bg-red-500 text-black hover:bg-red-300 transition">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminProducts