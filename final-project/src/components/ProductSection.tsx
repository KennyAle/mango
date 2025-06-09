"use client";

import { useState } from "react";
import ProductList from "./ProductList";
import Link from "next/link";

const categories = [
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "tops",
  "womens-bags",
  "womens-dresses",
  "womens-shoes",
];

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("mens-shirts");

  return (
    <div className="px-4 lg:px-20 space-y-6">
      <div className="flex justify-between flex-wrap gap-3 pb-5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`cursor-pointer uppercase px-4 py-2 text-xs tracking-wide font-semibold border border-black ${
              selectedCategory === cat
                ? "bg-white text-black border-white"
                : "text-black"
            } hover:bg-white hover:text-black hover:border-white transition`}
          >
            {cat.replace("-", " ")}
          </button>
        ))}
        <Link
          href="/"
          className="cursor-pointer uppercase px-4 py-2 text-xs tracking-wide font-semibold bg-black text-white"
        >
          See All
        </Link>
      </div>

      <ProductList category={selectedCategory} />
    </div>
  );
};

export default ProductSection;
