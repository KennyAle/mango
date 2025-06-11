'use client'

import { ChangeEvent, FormEvent, useEffect, useState } from "react"

type Product = {
  id: number,
  title: string,
  image: File | null,
  description: string,
  price: number,
  category: string[],
}

const AddProduct = () => {
  const [formInputs, setFormInputs] = useState<Omit<Product, 'id'>>({
    title: '',
    image: null,
    description: '',
    price: 0,
    category: []
  })
  const [products, setProducts] = useState<Product[]>([])

  const categoriesList = [
    'beauty',
    'apparel',
    'fragrances',
    'gadget',
    'kitchen',
    'outdoors',
    'furniture',
    'books',
    'groceries'
  ]

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target
    setFormInputs(state => ({
      ...state,
      [name]: value
    }))
  }

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target
    setFormInputs(state => ({
      ...state,
      [name]: files?.[0] || null
    }))
  }

  const handleCategory = (e: ChangeEvent<HTMLInputElement>) => {
    const {value, checked} = e.target
    setFormInputs(state => ({
      ...state,
      category: checked
        ? [...state.category, value]
        : state.category.filter((cat) => cat !== value)
    }))
  }

  //replace with fetch request
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newProduct = {
      ...formInputs,
      id: Math.floor(Math.random()*9000000) + 1000000
    }
    setProducts(prevState => ([
      ...prevState,
      newProduct
    ]))

    setFormInputs({
      title: '',
      image: null,
      description: '',
      price: 0,
      category: []
    })

    alert('prodcut added successfully')
  }

  useEffect(() => {
    console.log(products)
  }, [products])
  
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-10">
      <div className="flex flex-col justify-center items-center p-6 w-2/3 bg-white dark:bg-neutral-800 mt-20">
        <h1 className="text-xl">Add Product</h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-full rounded-lg p-8 gap-4">
          <div className="flex flex-col">
            <label htmlFor="title">Product Title</label>
            <input type="text" name="title" required placeholder="Enter product title..." value={formInputs.title} onChange={(e) => handleChange(e)} className="border p-3 rounded bg-white dark:bg-neutral-700 dark:border-neutral-600 text-black dark:text-white" />
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
          <div>
            <h3>Product Category</h3>
            <div className="flex flex-col">
              {categoriesList.map((cat, index) => (
                <label key={index} className="pl-2">
                  <input type="checkbox" value={cat} checked={formInputs.category?.includes(cat)} onChange={(e) => handleCategory(e)} />
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