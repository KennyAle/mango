import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <main className="bg-[#d2cdc1] dark:bg-neutral-900">
      <Hero />
      <Faq />
      <ProductSection />
    </main>
  );
}
