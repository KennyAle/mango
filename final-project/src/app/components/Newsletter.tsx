import { FaArrowRightLong } from "react-icons/fa6";

const Newsletter = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl">Newsletter</h1>
                <p>Be the first to hear about exclusive deals, new arrivals, and members-only discounts. No spam, just style.</p>
                <form action="">
                    <input type="text" placeholder="Your email addㄔㄛress" />
                    <button><FaArrowRightLong /></button>
                </form>
            </div>
        </>
    )
}

export default Newsletter