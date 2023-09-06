"use client";

import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../(home)/components/Navbar";

// import CartComponent from "../(home)/components/cart";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <>
      <Navbar />
      <div className="bg-smokeWhite px-10 pt-5">
        <h1 className="text-xl font-semibold tracking-wider from-beigePrimary to-transparent bg-gradient-to-r w-fit px-4 py-1 text-black/60">
          Checkout List
        </h1>
      </div>
      <div className="bg-smokeWhite min-h-screen w-full flex flex-wrap px-10 py-20 gap-5">
        {/* <button onClick={itemID}>Click</button> */}

        {cart.length > 0 ? (
          cart.map((item) => (
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
              <p>
                {" "}
                <span className="font-semibold">Quantity</span> : {item.qty}
              </p>
              <p>
                {" "}
                <span className="font-semibold">Total</span> : $
                {item.price * item.qty}
              </p>
              <button
                className="bg-beigePrimary rounded-md px-2 py-1 shadow-md hover:opacity-80"
                onClick={() =>
                  alert(`Item purchased for $${item.price * item.qty}`)
                }
              >
                Purchase
              </button>
              <button
                className="border border-black rounded-md"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className="w-full flex justify-center items-center">
            <p className="text-black/60 text-xl">Keranjang Anda Kosong</p>
          </div>
        )}

        {/* <CartComponent cartItems={cartItems} /> */}
      </div>
    </>
  );
}
