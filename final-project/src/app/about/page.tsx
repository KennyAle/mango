"use client";

import Mediasearch from "@/components/Mediasearch"
import { motion } from "framer-motion";

const brands = [
  {
    name: 'ZARA',
    logo: '/img_aboutpage/ana.png',
  },
  {
    name: 'Uniqlo',
    logo: '/img_aboutpage/charlott.png',
  },
  {
    name: 'Rolex',
    logo: '/img_aboutpage/inglot.png',
  },
  {
    name: 'Casio',
    logo: '/img_aboutpage/kry.png',
  },
  {
    name: 'Uniqlo',
    logo: '/img_aboutpage/lancome.png',
  },
  {
    name: 'Uniqlo',
    logo: '/img_aboutpage/laura.png',
  },
  {
    name: 'Uniqlo',
    logo: '/img_aboutpage/mac.png',
  },
  {
    name: 'Uniqlo',
    logo: '/img_aboutpage/tarte.png',
  },
];

  const members = [
    { name: "Julia", role: "Snack Hunter", img: "/faces/julia.png" },
    { name: "Kenny", role: "Visual King", img: "/faces/kenny.png" },
    { name: "Mizuki", role: "Mission Accomplisher", img: "/faces/mizuki.png" },
    { name: "Alana", role: "Unexpected Action", img: "/faces/alana.png" },
    { name: "Tomoya", role: "Silent Force", img: "/faces/tomoya.png" },
  ];

const page = () => {
  return (
    <div className="relative top-28 flex flex-col justify-center items-center">
      <section className="flex justify-center items-center w-10/12">
        <div className="flex-1 flex flex-col gap-3 w-full">
          <h1 className="text-4xl font-semibold">Fuel Your <span className="text-4xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ">Fabuluxe</span></h1>
          <h1 className="text-3xl font-semibold">Where fashion meets authenticity</h1>
          <p>Founded with a passion for individuality and self-expression, MANGO is here to make fashion simple, fun, and accessible. Whether you're dressing up for a big night out or curating your everyday essentials, we’ve got you covered.</p>
          <button className="bg-blue-600 hover:bg-blue-900 text-white rounded-full px-4 py-1 text-xs font-semibold w-fit transition cursor-pointer">Get Started</button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img className="rounded-2xl" src="https://placehold.jp/500x300.png" alt="" />
        </div>
      </section>

      <section className="relative py-30">
        <div className="relative grid grid-rows-2 grid-flow-col gap-8 items-center justify-center">
          {[...brands, ...brands].map((brand, index) => (
            <motion.div key={index} className="flex justify-center items-center gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <img src={brand.logo} alt={brand.name} className="w-24 " />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="flex justify-center items-center w-8/12">
        <p className="text-2xl text-gray-600 font-bold text-center">Experience the epitome of style and elegance with our curated collection of fashion and beauty essentials. From sophisticated apparel to luxurious skincare and cosmetics, our boutique offers everything you desire to elevate your wardrobe and enhance your natural allure.</p>
      </section>

      <section className="w-full m-30"><Mediasearch /></section>

      <section className="py-12 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-semibold text-center mb-12">
        The Faces of <span className="text-gray-400">Innovation</span>
      </h1>

      <div className="flex flex-wrap justify-center items-stretch gap-8">
        {members.map(({ name, role, img }) => (
          <div
            key={name}
            className="bg-gray-200/60 dark:bg-gray-200/60 rounded-2xl shadow-lg flex flex-col items-center p-6 max-w-xs w-full"
          >
            <img
              src={img}
              alt={`${name} - ${role}`}
              className="w-48 h-56 object-cover object-center mb-4"
            />
            <h2 className="text-2xl font-semibold mb-1">{name}</h2>
            <p className="text-gray-700 text-center text-lg">{role}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default page