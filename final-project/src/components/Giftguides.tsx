const Giftguides = () => {
  return (
    <div className=" text-black flex justify-center items-center gap-2 bg-stone-300">
      <section className="relative">
        <img className="rounded-l-xl" src="https://placehold.jp/400x600.png" alt="" />
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-1">
          <h1 className="text-3xl">WOMEN</h1>
          <h1 className="text-3xl">GIFT GUIDES</h1>
          <p className="text-lg underline font-bold">Find out more</p>
        </div>
      </section>
      <section className="relative">
        <img className="rounded-r-xl" src="https://placehold.jp/400x600.png" alt="" />
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-1">
          <h1 className="text-3xl">MEN</h1>
          <h1 className="text-3xl">GIFT GUIDES</h1>
          <p className="text-lg underline font-bold">Find out more</p>
        </div>
      </section>
    </div>
  )
}

export default Giftguides