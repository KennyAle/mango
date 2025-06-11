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

const page = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 w-full max-w-md shadow-lg relative">
        <button className="absolute top-3 right-3 text-gray-500 hover:text-black dark:hover:text-white text-xl">
          &times;
        </button>
        <div className="w-full aspect-video bg-neutral-100 rounded overflow-hidden mb-4">
          <img
            src="https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp"
            alt="Product Image"
            className="object-contain w-full h-full"
          />
        </div>
        <h2 className="text-xl font-semibold mb-1">{sampleProduct.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
          {sampleProduct.description}
        </p>
        <p className="text-lg font-bold mb-4">{sampleProduct.price}</p>
        <div className="flex gap-3">
          <button className="flex-1 py-2 bg-black text-white rounded hover:bg-neutral-800 transition">
            Add to Cart
          </button>
          <button className="flex-1 py-2 bg-white text-black border border-black rounded hover:bg-neutral-100 transition">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};
export default page;
