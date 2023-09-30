"use client";

import Image from "next/image";
import Man from "../Man1.svg";
import Blobs from "../blobs.svg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Item from "./components/item";
import Navbar from "./components/Navbar";

export default function Home() {
  // Context
  const { items, addToCart, removeFromCart, itemOnCart, updateCartQty } =
    useContext(CartContext);

  return (
    <div className="w-full min-h-screen bg-smokeWhite relative overflow-hidden">
      <Navbar />
      <div className="flex justify-center bg-smokeWhite relative w-full mt-20">
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
      <div className="w-full min-h-screen bg-dark p-10 flex flex-col gap-2">
        <div className="p-5 w-fit">
          <h1 className="text-white text-5xl font-semibold tracking-wide border-b-4 border-opacity-30 pb-5">
            Our Best Products
          </h1>
        </div>
        <div className=" p-5 flex flex-wrap gap-3">
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
