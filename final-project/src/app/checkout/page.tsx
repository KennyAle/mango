import { products } from "@/components/Cart";
import CartItem from "@/components/CartItem";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex flex-col md:flex-row py-12 gap-6 w-full bg-white dark:bg-black text-black dark:text-white px-4">
      <section className="w-full md:w-4/6 bg-white dark:bg-neutral-900 p-5 flex flex-col gap-5 order-1 md:order-none">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold pb-3">My Cart (2)</h2>
          {products.map((product) => (
            <CartItem key={product.id} thumbnail={product.thumbnail} />
          ))}
        </div>
        <div>
          <h2 className="text-xl font-semibold">Delivery Information</h2>
          <form className="flex flex-col gap-4 mt-4">
            {["Full Name", "Street Address", "City", "Province / State", "Postal Code"].map((placeholder, i) => (
              <input
                key={i}
                type="text"
                placeholder={placeholder}
                className="border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black dark:focus:ring-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400"
              />
            ))}
            <select className="border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black dark:focus:ring-white text-black dark:text-white">
              <option value="">Select Country</option>
              <option value="ca">Canada</option>
              <option value="us">United States</option>
              <option value="tw">Taiwan</option>
              <option value="jp">Japan</option>
              <option value="kr">Korea</option>
              <option value="mx">Mexico</option>
              <option value="ec">Ecuador</option>
              <option value="other">Other</option>
            </select>
            <input
              type="submit"
              value="Add Address"
              className="cursor-pointer text-center uppercase px-4 py-2 text-xs tracking-wide font-semibold bg-black text-white border border-black"
            />
          </form>
        </div>
      </section>

      <aside className="w-full md:w-2/6 sticky md:top-12 h-fit bg-white dark:bg-neutral-900 p-5 flex flex-col gap-3 text-neutral-500 dark:text-neutral-400 text-sm order-2">
        <div className="flex flex-col gap-3">
          <div className="overflow-hidden flex border text-neutral-700 dark:text-neutral-300 border-gray-300 dark:border-neutral-600 font-semibold rounded w-fit">
            <span className="border border-gray-300 dark:border-neutral-600 rounded p-2">Free</span>
            <span className="p-2 bg-gray-100 dark:bg-neutral-700">Express: $9.99</span>
          </div>
          <p>Date: June 24, 2025</p>
          <p>Address: 561 Fraser Street, BC, CA / V5V 1N1</p>
          <h2 className="text-xl font-semibold text-black dark:text-white">Order Summary</h2>
          <p className="flex justify-between">
            Subtotal:<span>$260.99</span>
          </p>
          <p className="flex justify-between">
            Delivery:<span>$260.99</span>
          </p>
          <p className="flex justify-between">
            Discount:<span>$260.99</span>
          </p>
          <p className="flex justify-between text-black dark:text-white font-semibold text-base">
            Total:<span>$260.99</span>
          </p>
          <button className="cursor-pointer text-center uppercase px-4 py-2 text-xs tracking-wide font-semibold bg-black text-white">
            Checkout
          </button>
          <Link
            href="/"
            className="cursor-pointer text-center uppercase px-4 py-2 text-xs tracking-wide font-semibold bg-white dark:bg-neutral-900 text-black dark:text-white border dark:border-white"
          >
            Continue Shopping
          </Link>
        </div>
      </aside>
    </main>
  );
};

export default page;
