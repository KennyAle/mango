import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-stone-300 dark:bg-neutral-900">
      <Hero />
      <Faq />
    </main>
  );
}
