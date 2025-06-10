import Image from "next/image";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import CartItem from "./CartItem";

export const products = [
  {
    id: 83,
    title: "Blue & Black Check Shirt",
    description:
      "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
    category: "mens-shirts",
    price: 29.99,
    discountPercentage: 15.35,
    rating: 3.64,
    stock: 38,
    tags: ["clothing", "men's shirts"],
    brand: "Fashion Trends",
    sku: "MEN-FAS-BLU-083",
    weight: 4,
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/4.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/thumbnail.webp",
  },
  {
    id: 84,
    title: "Gigabyte Aorus Men Tshirt",
    description:
      "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
    category: "mens-shirts",
    price: 24.99,
    discountPercentage: 0.94,
    rating: 3.18,
    stock: 90,
    tags: ["clothing", "men's t-shirts"],
    brand: "Gigabyte",
    sku: "MEN-GIG-GIG-084",
    weight: 4,
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/4.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/thumbnail.webp",
  },
  {
    id: 85,
    title: "Man Plaid Shirt",
    description:
      "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
    category: "mens-shirts",
    price: 34.99,
    discountPercentage: 19.5,
    rating: 3.46,
    stock: 82,
    tags: ["clothing", "men's shirts"],
    brand: "Classic Wear",
    sku: "MEN-CLA-PLA-085",
    weight: 3,
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/4.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/thumbnail.webp",
  },
  {
    id: 86,
    title: "Man Short Sleeve Shirt",
    description:
      "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
    category: "mens-shirts",
    price: 19.99,
    discountPercentage: 6.83,
    rating: 2.9,
    stock: 2,
    tags: ["clothing", "men's shirts"],
    brand: "Casual Comfort",
    sku: "MEN-CAS-SHO-086",
    weight: 2,
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/4.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp",
  },
  {
    id: 87,
    title: "Men Check Shirt",
    description:
      "The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.",
    category: "mens-shirts",
    price: 27.99,
    discountPercentage: 11.38,
    rating: 2.72,
    stock: 95,
    tags: ["clothing", "men's shirts"],
    brand: "Urban Chic",
    sku: "MEN-URB-CHE-087",
    weight: 10,
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/4.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/thumbnail.webp",
  },
];

interface Props {
  isCartOpen: boolean;
  setIsCartOpen: (isCartOpen: boolean) => void;
}

const Cart = ({ isCartOpen, setIsCartOpen }: Props) => {
  return (
    <div className="w-100 h-screen bg-white p-5 flex flex-col gap-3 overflow-auto">
      <h2 className="text-xl font-semibold">My Cart (2)</h2>
      {products.map((product) => (
        <CartItem key={product.id} thumbnail={product.thumbnail} />
      ))}
      <Link
        href="/checkout"
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="cursor-pointer text-center uppercase px-4 py-2 text-xs tracking-wide font-semibold bg-black text-white"
      >
        View Order
      </Link>
    </div>
  );
};

export default Cart;
