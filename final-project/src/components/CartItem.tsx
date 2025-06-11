import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";

interface Props {
  thumbnail: string;
}

const CartItem = ({ thumbnail }: Props) => {
  return (
    <div className="flex justify-between text-neutral-500 dark:text-neutral-400 border-t border-t-neutral-300 dark:border-t-neutral-800 py-4">
      <div className="flex gap-3">
        <Image
          src={thumbnail}
          alt="Product thumbnail"
          className="rounded bg-neutral-200 w-auto h-auto object-contain"
          width={110}
          height={110}
        />
        <div className="text-sm flex flex-col gap-1 tracking-tight">
          <p className="text-base text-neutral-800 dark:text-white font-semibold">
            Relaxed Fit T-shirt
          </p>
          <p>$12.99</p>
          <p>mens-shirts</p>
          <span className="w-20 text-center rounded-lg text-xs bg-yellow-100/70 dark:bg-transparent dark:border px-2 py-1 text-yellow-500 dark:text-yellow-400 font-semibold inline-block">
            Disc: 5%
          </span>
          <div className="text-sm flex items-center gap-2 pt-1">
            <BiHeart />
            <RiDeleteBinLine />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="text-neutral-800 dark:text-white tracking-tight font-semibold">
          $12.99
        </p>
        <div className="flex items-center justify-center text-sm text-neutral-900 dark:text-white gap-2 font-semibold">
          <IoIosRemoveCircleOutline className="cursor-pointer" />
          <span>2</span>
          <IoIosAddCircleOutline className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
