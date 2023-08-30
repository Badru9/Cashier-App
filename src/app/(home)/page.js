"use client";

import Image from "next/image";
import Link from "next/link";
import Man from "../Man1.svg";
import Blobs from "../blobs.svg";
import { BiCartAlt } from "react-icons/bi";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "./components/cart";
import Item from "./components/item";

export default function Home() {
  // Context
  const { cart, items, addToCart, removeFromCart, itemOnCart, updateCartQty } =
    useContext(CartContext);

  const [isClick, setIsClick] = useState(false);

  // perbaiki function ini - bagaimana cara agar ketika kuantitas 0, function addToCart berfungsi kembali

  return (
    <div className="w-full min-h-screen bg-first relative overflow-hidden">
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
      <div className="flex justify-center bg-first relative w-full mt-10">
        <div className="w-1/2">
          <Image
            src={Blobs}
            width={1000}
            height={1000}
            className="-ml-20"
            alt="blobs"
          />
          <Image
            src={Man}
            width={300}
            height={300}
            className="absolute top-0 left-56"
            alt="man"
          />
        </div>
        <div className="w-1/2 flex">
          <h1 className="text-6xl -ml-10 mt-44 mr-5 text-beigePrimary select-none">
            Where Trends and Tradition Meet : Men's Fashion Haven
          </h1>
        </div>
      </div>
      <div className="w-full min-h-screen bg-beigeSecondary p-10 flex flex-col gap-2">
        <div className="p-5 w-fit">
          <h1 className="text-white text-5xl border-b-4 border-opacity-30 pb-5">
            Products
          </h1>
        </div>
        <div className=" p-5 flex flex-wrap  gap-3">
          {items.map((item) => (
            <Item
              item={item}
              key={item.id}
              addToCart={addToCart}
              onCart={itemOnCart}
              removeFromCart={removeFromCart}
              updateCartQty={updateCartQty}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
