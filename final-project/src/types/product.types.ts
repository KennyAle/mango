export interface Product {
  id: number,
  productName: string,
  category: { id: number, categoryName: string },
  price: number,
  mainImage: string,
  description: string,
  discountPercentage: number,
  rating: number,
  sku: string,
  createdAt: string,
  updatedAt: string,
}

export interface AddProduct {
  productName: string,
  categoryId: number,
  price: number,
  mainImage: string,
  description: string,
  discountPercentage: number,
  rating: number,
  sku: string,
}