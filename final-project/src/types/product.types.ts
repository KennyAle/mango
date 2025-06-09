export interface Product {
  id: number,
  title: string,
  image: File | null,
  description: string,
  price: number,
  category: string[],
}

export interface DummyProduct {
  id: number,
  title: string,
  description: string,
  category: string,
  price: number,
  thumbnail: string
}