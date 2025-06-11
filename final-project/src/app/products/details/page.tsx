"use client";

import { useState } from "react";
import Image from "next/image";

const sampleProduct = {
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
  images: [
    "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp",
    "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/2.webp",
    "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/3.webp",
    "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/4.webp",
  ],
  thumbnail:
    "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/thumbnail.webp",
};

const sizes = ["XS", "S", "M", "L", "XL"];

const Page = () => {
  const [mainImage, setMainImage] = useState(sampleProduct.images[0]);
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="max-w-6xl mx-auto px-4 py-18 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="md:col-span-1">
        <div className="w-full aspect-square bg-neutral-100 rounded overflow-hidden">
          <Image
            src={mainImage}
            alt="Product"
            width={600}
            height={600}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {sampleProduct.images.map((img, idx) => (
            <div
              key={idx}
              className={`w-20 h-20 rounded border-2 cursor-pointer ${
                mainImage === img ? "border-black" : "border-transparent"
              }`}
              onClick={() => setMainImage(img)}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                width={80}
                height={80}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:col-span-1 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{sampleProduct.title}</h1>
        <p className="text-sm text-gray-600">{sampleProduct.description}</p>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>
              {i < Math.floor(sampleProduct.rating) ? "⭐" : "☆"}
            </span>
          ))}
          <span className="text-sm text-gray-500 ml-2">
            {sampleProduct.rating} / 5
          </span>
        </div>
        <p className="text-xl font-semibold">${sampleProduct.price}</p>
        <div>
          <p className="mb-2 font-medium">Choose Size</p>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black border-gray-300"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <button className="flex-1 py-3 bg-neutral-900 text-white font-semibold rounded hover:bg-neutral-700 transition">
            Add to Cart
          </button>
          <button className="flex-1 py-3 bg-white text-black font-semibold border border-black rounded hover:bg-neutral-100 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
