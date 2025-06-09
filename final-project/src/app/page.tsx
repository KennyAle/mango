import Clientssays from "./components/Clientssays"
import Giftguides from "./components/Giftguides"
import Mediasearch from "./components/Mediasearch"

const page = () => {
  return (
    <div>
      <Mediasearch />
      <Giftguides />
      <Clientssays />
    </div>
  )
}

export default page