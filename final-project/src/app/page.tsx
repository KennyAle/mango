import Clientssays from "./components/Clientssays"
import Giftguides from "./components/Giftguides"
import Mediasearch from "./components/Mediasearch"
import Newsletter from "./components/Newsletter"

const page = () => {
  return (
    <div>
      <Mediasearch />
      <Giftguides />
      <Clientssays />
      <Newsletter />
    </div>
  )
}

export default page