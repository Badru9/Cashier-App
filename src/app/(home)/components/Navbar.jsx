import { CartContext } from "@/app/context/CartContext";
import { useContext, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BiCartAlt } from "react-icons/bi";
import Cart from "./cart";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const { cart, searchItem } = useContext(CartContext);
  const [isClick, setIsClick] = useState(false);

  return (
    <nav className="z-20 px-5 h-[60px] w-full bg-white shadow-md flex justify-between items-center fixed top-0">
      {/* <Image src={} alt="logo" /> */}
      <Link href="/" onClick={() => router.refresh()}>
        <p className="font-caveat text-2xl text-beigePrimary cursor-pointer w-fit -mt-2">
          noshion
        </p>
      </Link>
      <div className="flex items-center gap-5 relative">
        <FaMagnifyingGlass className="absolute left-2 text-black/60" />
        <input
          type="search"
          className="bg-beigeSecondary/30 px-8 rounded-full h-[30px] w-[300px] text-black"
          onChange={(e) => searchItem(e.target.value)}
        />
        <button className="relative group" onClick={() => setIsClick(!isClick)}>
          <BiCartAlt className="text-4xl text-beigePrimary" />
          {cart.length > 0 && (
            <span className="absolute top-0 right-5 bg-red-500 text-white rounded-full p-1 text-xs">
              {cart.length}
            </span>
          )}
        </button>
      </div>
      {isClick && <Cart description={"Keranjang Anda Kosong"} />}
    </nav>
  );
}
