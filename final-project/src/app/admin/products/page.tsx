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
    <div className="flex flex-col w-full items-end">
      <div className="m-6 w-3/4">
        <div className="text-center mb-10 w-full flex  items-center justify-end gap-4">
          <div className="w-full flex-1">
            <h1 className="text-2xl">All Products</h1>
          </div>
          <Link href='/admin/add-product' className="shadow-[0_0_1px] rounded-lg px-4 py-3 mr-10 hover:bg-gray-100 transition w-32">Add Product</Link>
        </div>
        <div className="w-full">
          {products.map((product: DummyProduct) => (
            <div key={product.id} className={`flex justify-between items-stretch ${product.id === 1 ? 'border' : 'border-x border-b'}`}>
              <div className="relative h-[150px] w-[150px] border-r">
                <Image src={product.thumbnail} alt={product.title} fill className="object-contain" /> 
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl line-clamp-2 max-w-[230px]">{product.title}</h3>
                  <p>Category: {product.category}</p>
                </div>
                <p className="max-w-[400px] line-clamp-2 mb-4 text-sm">{product.description}</p>
                <p className="text-lg">Price: ${product.price}</p>
              </div>
              <div className="flex justify-center">
                <div className="flex items-center border-l px-4">
                  <Link href={`/admin/products/${product.id}`}>
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
    </div>
  )
}

export default AdminProducts