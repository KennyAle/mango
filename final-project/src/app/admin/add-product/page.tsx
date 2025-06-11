'use client'

import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import type { AddProduct } from "@/types/product.types"
import { useRouter } from "next/navigation"

const AddProduct = () => {
  const [formInputs, setFormInputs] = useState<Omit<AddProduct, 'sku'>>({
    productName: '',
    categoryId: 0,
    price: 0,
    mainImage: '',
    description: '',
    discountPercentage: 0,
    rating: 0,
  })

  const categoryList = [
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target
    setFormInputs(state => ({
      ...state,
      [name]: value
    }))
  }

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setFormInputs(state => ({
        ...state,
        mainImage: imageUrl
      }))
    }
  }

  const handleCategory = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    setFormInputs(state => ({
      ...state,
      categoryId: 1
    }))
  }

  useEffect(() => {
    console.log(formInputs)
  }, [formInputs])

  const router = useRouter()

  //replace with fetch request
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const generateSku = () => {
      return 'SKU-' + Math.floor(Math.random() * 1000000);
    };
    const newProduct = {
      ...formInputs,
      sku: generateSku()
    }

      try {
        const res = await fetch('http://localhost:3000/product', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(newProduct)
        })

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json()
        console.log('success:', data)
      } catch(err) {
        console.log('failed:', err)
      }

  


    // setFormInputs({
    //   productName: '',
    //   categoryId: 0,
    //   price: 0,
    //   mainImage: '',
    //   description: '',
    //   discountPercentage: 0,
    //   rating: 0,
    // })

    router.push('/admin/products')

    alert('prodcut added successfully')
  }
  
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-10">
      <div className="flex flex-col justify-center items-center p-6 w-2/3 bg-white dark:bg-neutral-800 mt-20">
        <h1 className="text-xl">Add Product</h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-full rounded-lg p-8 gap-4">
          <div className="flex flex-col">
            <label htmlFor="productName">Product Name</label>
            <input type="text" name="productName" required placeholder="Enter product title..." value={formInputs.productName} onChange={(e) => handleChange(e)} className="border p-3 rounded bg-white dark:bg-neutral-700 dark:border-neutral-600 text-black dark:text-white" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="image">Product Image</label>
            <input type="file" name="image" onChange={(e) => handleImage(e)} className="border p-3 rounded bg-white dark:bg-neutral-700 dark:border-neutral-600 text-black dark:text-white" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">Product Description</label>
            <textarea name="description" id="description" required placeholder="Enter product description..." value={formInputs.description} onChange={(e) => handleChange(e)} className="border p-3 rounded bg-white dark:bg-neutral-700 dark:border-neutral-600 text-black dark:text-white min-h-[200pxgi]"></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Product Price</label>
            <input type="number" name="price" required placeholder="Enter product price..." value={formInputs.price} onChange={(e) => handleChange(e)} className="border p-3 rounded bg-white dark:bg-neutral-700 dark:border-neutral-600 text-black dark:text-white" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="discountPercentage">Discount Parcentage</label>
            <input type="number" name="discountPercentage" required placeholder="Enter discount percentage..." value={formInputs.discountPercentage} onChange={(e) => handleChange(e)} className="border p-3 rounded bg-white dark:bg-neutral-700 dark:border-neutral-600 text-black dark:text-white" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="rating">Product Rating</label>
            <input type="number" name="rating" required placeholder="Enter product rating..." value={formInputs.rating} onChange={(e) => handleChange(e)} className="border p-3 rounded bg-white dark:bg-neutral-700 dark:border-neutral-600 text-black dark:text-white" />
          </div>
          <div>
            <h3>Product Category</h3>
            <div className="flex flex-col">
              {categoryList.map((cat, index) => (
                <label key={index} className="pl-2">
                  <input type="radio" name="category" value={cat} onChange={(e) => handleCategory(e)} />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>
          <button className="bg-black text-white p-3 text-sm uppercase hover:bg-gray-900/80 transition">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct