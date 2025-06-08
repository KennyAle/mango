import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./HeroSlider";
import CircleText from "./CircleText";
import { PiTShirt } from "react-icons/pi";

const Hero = () => {
  return (
    <section className="w-full px-6 py-15 md:px-10 lg:px-20 grid grid-cols-2 lg:grid-cols-3 gap-6 bg-neutral-200">
      <div className="flex flex-col gap-5 justify-center">
        <h2 className="text-4xl md:text-5xl lg:text-7xl uppercase">
          Bomber Jacket
        </h2>
        <p className="text-base text-neutral-500 tracking-tight text-pretty lg:w-4/5">
          For times when this look appears too classic, tone it down by wearing
          white leather low top sneakers
        </p>
        <Link
          className="bg-black text-white text-sm p-3 text-center uppercase w-full sm:w-1/2"
          href="/"
        >
          Buy now
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="https://placehold.co/100x100"
          className="w-full h-auto lg:h-screen object-cover"
          alt="hero"
          width={100}
          height={100}
        />
      </div>
      <div className="grid grid-rows-1 lg:grid-rows-[150px_250px_40px] justify-center gap-5 col-span-2 md:col-span-2 lg:col-span-1">
        <div className="text-neutral-600 self-center justify-self-end lg:pr-3 hidden lg:block">
          <CircleText className="w-24 md:w-28 lg:w-30" />
        </div>
        <HeroSlider />
        <div className="justify-self-end self-start hidden lg:block">
          <p className="flex items-center gap-4 text-sm font-semibold text-neutral-500 tracking-tight">
            Browse Styles
            <PiTShirt className="bg-white/70 w-10 h-10 md:w-12 md:h-12 p-3 rounded-full shadow" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
