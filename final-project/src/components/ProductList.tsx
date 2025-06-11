"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  brand: string;
  price: number;
  thumbnail: string;
};

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const getSpanForIndex = (index: number) => {
    let currentIndex = 0;
    let row = 0;

    while (currentIndex <= index) {
      const isOddRow = row % 2 === 0; 
      const span = isOddRow ? 3 : 2;
      let remainingCols = 6;

      while (remainingCols >= span) {
        if (currentIndex === index) return span; 
        remainingCols -= span;
        currentIndex++;
      }
      row++;
    }

    return 2;
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      const data = await res.json();
      setProducts(data.products);
    };

    fetchData();
  }, [category]);

  return (
    <div className="grid gap-1.5 grid-cols-1 md:grid-cols-6 auto-rows-auto">
      {products.map((item, index) => {
        const span = getSpanForIndex(index);
        return (
          <div
            key={item.id}
            className="bg-white dark:bg-neutral-800 rounded-lg p-4"
            style={{ gridColumn: `span ${span}` }}
          >
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={300}
              height={200}
              className="rounded mb-3 w-full object-contain h-[200px] bg-neutral-200"
            />
            <div className="flex items-stretch justify-between gap-4">
              <div className="flex flex-col justify-center w-4/7 overflow-hidden">
                <Link href="/products/details" className="truncate font-semibold text-black dark:text-white text-sm">
                  {item.title}
                </Link>
                <p className="truncate text-xs text-gray-600 dark:text-gray-300 min-h-[1rem]">
                  {item.brand || "\u00A0"}
                </p>
              </div>
              <button className="w-3/7 text-nowrap px-2 font-semibold text-xs border-[1.5px] dark:border-0 border-neutral-500 bg-white dark:bg-neutral-700 text-black dark:text-white uppercase hover:bg-neutral-100 dark:hover:bg-neutral-600 transition cursor-pointer">
                Buy now | ${item.price}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
