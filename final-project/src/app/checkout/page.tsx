import { products } from "@/components/Cart";
import CartItem from "@/components/CartItem";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex gap-8 px-5 py-12 w-full">
      <section className="w-4/6 bg-white p-5 flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">My Cart (2)</h2>
          {products.map((product) => (
            <CartItem key={product.id} thumbnail={product.thumbnail} />
          ))}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-black">
            Delivery Information
          </h2>
          <form className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Street Address"
              className="border px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black"
            />
            <input
              type="text"
              placeholder="City"
              className="border px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Province / State"
              className="border px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="border px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black"
            />
            <select className="border px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black">
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
            <input type="submit" value="Add Address" name="Add Address" className="cursor-pointer text-center uppercase px-4 py-2 text-xs tracking-wide font-semibold bg-black text-white border-[1.3px]" />
          </form>
        </div>
      </section>
      <aside className="w-2/6 sticky top-12 h-fit bg-white p-5 flex flex-col gap-3 text-neutral-500 text-sm self-start">
        <div className="flex flex-col gap-3">
          <div className="flex border border-gray-300 font-semibold rounded-lg w-fit">
            <span className="border border-gray-300 rounded p-2">Free</span>
            <span className="p-2 bg-gray-100">Express: $9.99</span>
          </div>
          <p>Date: June 24, 2025</p>
          <p>Address: 561 Fraser Street, BC, CA / V5V 1N1</p>
          <h2 className="text-xl font-semibold text-black">Order Summary</h2>
          <p className="flex justify-between">
            Subtotal:<span>$260.99</span>
          </p>
          <p className="flex justify-between">
            Delivery:<span>$260.99</span>
          </p>
          <p className="flex justify-between">
            Discount:<span>$260.99</span>
          </p>
          <p className="flex justify-between text-black font-semibold text-base">
            Total:<span>$260.99</span>
          </p>
          <button className="cursor-pointer text-center uppercase px-4 py-2 text-xs tracking-wide font-semibold bg-black text-white">
            Checkout
          </button>
          <Link
            href="/"
            className="cursor-pointer text-center uppercase px-4 py-2 text-xs tracking-wide font-semibold bg-white text-black border-[1.3px]"
          >
            Continue Shopping
          </Link>
        </div>
      </aside>
    </main>
  );
};

export default page;
