'use client'

import { useState, useEffect, ChangeEvent, FormEvent, use, useRef } from "react"
import { AddProduct } from "@/types/product.types"
import { useRouter } from "next/navigation"
import Image from "next/image"

type Props = {
  params: Promise<{id: string}>
}

const EditProduct = ({ params }: Props) => {
  const { id } = use(params)

  const [thisProduct, setThisProduct] = useState<Omit<AddProduct, 'sku'>>({
    productName: '',
    categoryId: 0,
    price: 0,
    mainImage: '',
    description: '',
    discountPercentage: 0,
    rating: 0,
  })

  const [formInputs, setFormInputs] = useState<Omit<AddProduct, 'sku'>>({
    productName: '',
    categoryId: 0,
    price: 0,
    mainImage: '',
    description: '',
    discountPercentage: 0,
    rating: 0,
  })

  const [imageFile, setImageFile] = useState<File | null>(null)
  const [preview, setPrevew] = useState<string>('')

  const fileInputRef = useRef<HTMLInputElement | null>(null)

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
      setImageFile(file)
    } else {
      setImageFile(null)
      setPrevew('')
      setFormInputs(state => ({
        ...state,
        mainImage: ''
      }))
    }
  }

  useEffect(() => {
    if (!imageFile) {
      setPrevew('')
      return
    }

    const imageUrl = URL.createObjectURL(imageFile)
    setPrevew(imageUrl)

    setFormInputs(state => ({
      ...state,
      mainImage: imageUrl
    }))

    return () => URL.revokeObjectURL(imageUrl)

  }, [imageFile])
  
  const handleCategory = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    setFormInputs(state => ({
      ...state,
      categoryId: 1
    }))
  }

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
      const res = await fetch(`http://localhost:3000/product/${id}`, {
        method: 'PUT',
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

    router.push('/admin/products')

    alert('prodcut added successfully')
  }

  useEffect(() => {
    const fetchProduct = async() => {
      const res = await fetch(`http://localhost:3000/product/${id}`)
      const data = await res.json()
      setFormInputs(data)
      setThisProduct(data)
      setPrevew(data.mainImage)
    }

    fetchProduct()
  }, [])

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push('/admin/products')
    }
  }

  const handleRemoveImage = () => {
    setImageFile(null)
    setPrevew('')
    setFormInputs(state => ({
      ...state,
      mainImage: ''
    }))
    if (fileInputRef.current) fileInputRef.current.value = ''
  }
  
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="w-full flex flex-col justify-center items-center md:p-10 p-4">
        <div className="mt-14 mb-8 w-full">
          <button onClick={handleBack} className="hover:border-b cursor-pointer transition inline-flex items-center gap-2">
              <span className="mb-1">←</span>
              <span className="text-md">Back</span>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center md:p-4 py-8 md:w-2/3 w-full bg-white dark:bg-neutral-800">
          <h1 className="text-xl mt-6">Edit Product</h1>
          <form onSubmit={handleSubmit} className="flex flex-col w-full rounded-lg px-8 pt-8 pb-4  gap-4">
            <div className="flex flex-col">
              <label htmlFor="productName">Product Name</label>
              <input type="text" name="productName" required placeholder="Enter product name..." value={formInputs.productName} onChange={(e) => handleChange(e)} className="border p-3 rounded bg-white dark:bg-neutral-700 dark:border-neutral-600 text-black dark:text-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="mainImage">Product Image</label>
              <div className="w-full flex justify-between gap-6">
                <input type="file" name="mainImage" onChange={(e) => handleImage(e)} className="border w-full p-3 rounded bg-white dark:bg-neutral-700 dark:border-neutral-600 text-black dark:text-white" />
                <button type="button" onClick={handleRemoveImage} className="border rounded-lg px-4 py-3 hover:bg-neutral-800">Remove</button>
              </div>
            </div>
            <div>
              <h3 className="mb-4">Image preview: </h3>
              {preview && (
                <div className="relative w-[300px] h-[300px] flex justify-center w-full">
                  <Image src={preview} alt="preview image" fill className="object-contain"/>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="description">Product Description</label>
              <textarea name="description" id="description" required placeholder="Enter product description..." value={formInputs.description} onChange={(e) => handleChange(e)} className="border p-3 rounded bg-white dark:bg-neutral-700 dark:border-neutral-600 text-black dark:text-white min-h-[200px]"></textarea>
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
                    <input type="radio" name="category" value={cat} onChange={(e) => handleCategory(e)} className=""/>
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>
            <button className="bg-black text-white p-3 text-sm uppercase hover:bg-gray-900/80 transition">Submit</button>
          </form>
          <div className="w-full px-8 pb-4">
            <button onClick={() => router.back()} className="w-full bg-red-500 text-black p-3 text-sm uppercase hover:bg-red-700 dark:hover:bg-red-300 transition">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProduct