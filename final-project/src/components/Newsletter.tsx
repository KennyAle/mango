import { FaArrowRightLong } from "react-icons/fa6";

const Newsletter = () => {
    return (
        <>
            <div className="bg-white text-black flex justify-center items-center flex-col gap-7 pb-3">
                <h1 className="text-5xl">Newsletter</h1>
                <p className="w-1/3 text-center">Be the first to hear about exclusive deals, new arrivals, and members-only discounts. No spam, just style.</p>
                <form className="border-b">
                    <input type="text" placeholder="Your email address" />
                    <button><FaArrowRightLong /></button>
                </form>
            </div>
        </>
    )
}

export default Newsletter