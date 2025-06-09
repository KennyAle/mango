import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Clientssays from "./components/Clientssays"
import Giftguides from "./components/Giftguides"
import Mediasearch from "./components/Mediasearch"
import Newsletter from "./components/Newsletter"

const page = () => {
  return (
    <main className="bg-stone-300 dark:bg-neutral-900">
      <Hero />
      <Faq />
    </main>
  );
    <div>
      <Mediasearch />
      <Giftguides />
      <Clientssays />
      <Newsletter />
    </div>
  )
}

export default page