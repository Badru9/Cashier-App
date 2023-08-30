"use client";

import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// import CartComponent from "../(home)/components/cart";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="bg-smokeWhite min-h-screen w-full flex items-stretch p-10 gap-5">
      {/* <button onClick={itemID}>Click</button> */}
      {cart.map((item) => (
        <div
          key={item.id}
          className="bg-white flex flex-col gap-2 w-fit h-fit p-6 rounded-md"
        >
          <div className="flex justify-center ">
            <Image
              src={item.image}
              width={80}
              height={80}
              alt="cart-image"
              className="w-fit h-[100px] aspect-auto"
            />
          </div>
          <p className="font-semibold truncate w-[200px]">{item.title}</p>
          <p>X{item.qty}</p>
          <p> Total : ${item.price * item.qty}</p>
          <button className="bg-beigePrimary rounded-md px-2 py-1 shadow-md">
            Purchase
          </button>
        </div>
      ))}

      {/* <CartComponent cartItems={cartItems} /> */}
    </div>
  );
}
