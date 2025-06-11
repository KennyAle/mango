// export interface Product {
//   id: number,
//   title: string,
//   image: File | null,
//   description: string,
//   price: number,
//   category: string[],
// }

// export interface DummyProduct {
//   id: number,
//   title: string,
//   description: string,
//   category: string,
//   price: number,
//   thumbnail: string
// }

export interface Product {
  id: number,
  productName: string,
  category: { id: string, categoryName: string },
  price: number,
  mainImage: string,
  description: string,
  discountPercentage: number,
  rating: number,
  sku: string,
  createdAt: string,
  updatedAt: string,
}