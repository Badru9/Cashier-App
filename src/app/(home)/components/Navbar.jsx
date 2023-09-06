import { CartContext } from "@/app/context/CartContext";
import { useContext, useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import Cart from "./cart";
import Link from "next/link";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const [isClick, setIsClick] = useState(false);
  return (
    <nav className="z-20 px-5 h-[60px] w-full bg-white shadow-md flex justify-between items-center">
      {/* <Image src={} alt="logo" /> */}
      <Link href="/">
        <p className="font-caveat text-2xl text-beigePrimary cursor-pointer w-fit -mt-2">
          noshion
        </p>
      </Link>
      <button className="relative group" onClick={() => setIsClick(!isClick)}>
        <BiCartAlt className="text-4xl text-beigePrimary" />
        {cart.length > 0 && (
          <span className="absolute top-0 right-5 bg-red-500 text-white rounded-full p-1 text-xs">
            {cart.length}
          </span>
        )}
      </button>
      {isClick && <Cart />}
    </nav>
  );
}
