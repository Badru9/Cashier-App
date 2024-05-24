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
    <main className="w-full min-h-screen bg-smokeWhite relative overflow-hidden">
      <Navbar />
      <div className="flex justify-center bg-smokeWhite relative w-full mt-20">
        <div className="lg:w-1/2 w-full lg:mb-40 mb-60">
          <Image
            src={Blobs}
            width={1000}
            height={1000}
            className="lg:ml-40 w-[200px] h-[200px] lg:h-[500px] lg:w-[500px]"
            alt="blobs"
          />
          <Image
            src={Man}
            width={300}
            height={300}
            className="absolute top-0 -ml-10 lg:ml-0 lg:left-56 w-[350px] h-[350px] lg:w-[600px] lg:h-[600px]"
            alt="man"
          />
        </div>
        <div className="lg:w-1/2 w-full flex">
          <h1 className="text-2xl font-semibold lg:text-6xl ml-0 lg:-ml-10 mt-20 lg:mt-44 mr-5 text-beigePrimary select-none">
            Where Trends and Tradition Meet : Men's Fashion Haven
          </h1>
        </div>
      </div>
      <div className="w-full min-h-screen bg-dark p-10 flex flex-col gap-2">
        <div className="p-5 w-fit">
          <h1 className="text-white text-3xl lg:text-5xl font-semibold tracking-wide border-b-4 border-opacity-30 pb-5">
            Our Best Products
          </h1>
        </div>
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-6 gap-10">
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
    </main>
  );
}
