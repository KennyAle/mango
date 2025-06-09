'use client'

import { useState, useEffect, ChangeEvent, FormEvent, use } from "react"
import { Product } from "@/types/product.types"

type Props = {
  params: Promise<{id: string}>
}

const EditProduct = ({ params }: Props) => {
  const { id } = use(params)

  const [thisProduct, setThisProduct] = useState<Product>({
    id: 0,
    title: '',
    image: null,
    description: '',
    price: 0,
    category: []
  })

  const [formInputs, setFormInputs] = useState<Omit<Product, 'id'>>({
    title: '',
    image: null,
    description: '',
    price: 0,
    category: []
  })
  const [products, setProducts] = useState<Product[]>([])

  const categoriesList = [
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
    const editedProduct = {
      ...formInputs,
      id: thisProduct.id
    }
    setProducts(prevState => ([
      ...prevState,
      editedProduct
    ]))

    setFormInputs({
      title: '',
      image: null,
      description: '',
      price: 0,
      category: []
    })

    alert('prodcut edited successfully')
  }

  useEffect(() => {
    const fetchProduct = async() => {
      const res = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await res.json()
      setFormInputs(data)
      setThisProduct(data)
    }

    fetchProduct()
  }, [])
  
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="text-xl mb-4">Edit Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-2/3">
        <label htmlFor="title">Product Title</label>
        <input type="text" name="title" required placeholder="Enter product title..." value={formInputs.title} onChange={(e) => handleChange(e)} className="border p-1 rounded-lg my-2" />
        <label htmlFor="image">Product Image</label>
        <input type="file" name="image" onChange={(e) => handleImage(e)} className="border p-1 rounded-lg my-2" />
        <label htmlFor="description">Product Description</label>
        <textarea name="description" id="description" required placeholder="Enter product description..." value={formInputs.description} onChange={(e) => handleChange(e)} className="border p-1 rounded-lg my-2"></textarea>
        <label htmlFor="price">Product Price</label>
        <input type="number" name="price" required placeholder="Enter product price..." value={formInputs.price} onChange={(e) => handleChange(e)} className="border p-1 rounded-lg my-2" />
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
        <button className="border rounded-lg p-2 mt-4">Submit</button>
      </form>
    </div>
  )
}

export default EditProduct