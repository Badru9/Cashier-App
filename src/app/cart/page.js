"use client";

import Keranjang from "../components/icons/Cart.svg";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../(home)/components/Navbar";
import Modal from "./components/Modal";

// import CartComponent from "../(home)/components/cart";

export default function Cart() {
  const { cart, removeFromCart, purchaseAllItem, purchaseEachItem, modal } =
    useContext(CartContext);
  return (
    <>
      <Navbar />
      <div className="bg-smokeWhite px-10 pt-5 mt-14">
        <h1 className="text-xl font-semibold tracking-wider from-first to-transparent bg-gradient-to-r w-fit px-4 py-1 text-light">
          Checkout List
        </h1>
        <button
          onClick={() => purchaseAllItem()}
          className="mt-5 bg-first text-light px-4 py-1 rounded-md shadow-md  hover:bg-opacity-80"
        >
          Purchase All Item
        </button>
      </div>
      <div className="bg-smokeWhite min-h-screen w-full flex flex-wrap px-10 py-10 gap-5">
        {/* <button onClick={itemID}>Click</button> */}

        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              className="bg-white flex flex-col gap-2 w-fit h-fit p-6 rounded-md shadow-md"
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
                <span className="font-semibold">Price</span> : ${item.price}
              </p>
              <p>
                {" "}
                <span className="font-semibold">Quantity</span> : {item.qty}
              </p>
              <p>
                {" "}
                <span className="font-semibold">Total</span> : $
                {Math.trunc(item.price * item.qty)}
              </p>
              <button
                className="bg-first text-light rounded-md px-2 py-1 shadow-md hover:opacity-80"
                onClick={() => purchaseEachItem(item.id)}
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
          <div className="w-full flex flex-col gap-3 justify-center items-center select-none pointer-events-none">
            <Image src={Keranjang} alt="Keranjang" width={150} height={150} />
            <p className="text-black/60 text-xl">Keranjang Anda Kosong</p>
          </div>
        )}
      </div>
      {modal && <Modal />}
    </>
  );
}
