"use client";

import Image from "next/image";
import Link from "next/link";
import Man from "../Man1.svg";
import Blobs from "../blobs.svg";
import { BiCartAlt } from "react-icons/bi";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "./components/cart";

export default function Home() {
  // Context
  const { cart } = useContext(CartContext);

  const [cartItems, setCartItems] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const [updateCart, setUpdateCart] = useState(false);

  function removeItem(id) {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  }

  function decreaseQty(id) {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        const newQty = Math.max(item.qty - 1, 0);
        return { ...item, qty: newQty };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  }

  function increaseQty(id) {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        const newQty = item.qty + 1;
        return { ...item, qty: newQty };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  }

  function addItem(item) {
    const existingCartItem = itemOnCart(item.id);

    if (existingCartItem && existingCartItem.qty === 0) {
      const updatedCartItems = cartItems.filter(
        (item) => item.id !== existingCartItem.id
      );
      setCartItems(updatedCartItems);
    } else if (!existingCartItem) {
      // add to cart
      const newCartItem = {
        ...item,
        qty: 1,
      };
      setCartItems([...cartItems, newCartItem]);
    } else {
      // not on cart, increase qty
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === existingCartItem.id) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    }
  }

  // perbaiki function ini - bagaimana cara agar ketika kuantitas 0, function addToCart berfungsi kembali
  function itemOnCart(id) {
    const cartItem = cartItems.find((item) => item.id === id);
    return cartItem;
  }

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
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-5 bg-red-500 text-white rounded-full p-1 text-xs">
              {cartItems.length}
            </span>
          )}
        </button>
        {isClick && <Cart cartItems={cartItems} />}
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
          {cart.map((data) => {
            return (
              <div
                key={data.id}
                className="flex w-[250px] rounded-md bg-white gap-5 p-5"
              >
                <div className="flex flex-col px-4  w-full gap-5 items-center justify-center">
                  <Image
                    src={data.image}
                    alt="image-product"
                    width={200}
                    height={200}
                    className="rounded-md bg-white px-4 py-2 w-[200px] aspect-square object-contain"
                  />
                  <div className="flex flex-col items-start gap-2 w-[200px] truncate">
                    <p className="font-semibold ">{data.title}</p>
                    <p className="text-black/70 font-light ">
                      {data.description}
                    </p>
                    <p className="font-light">${data.price}</p>
                  </div>
                  {itemOnCart(data.id) ? (
                    <div className="flex items-center flex-col gap-2">
                      <div className="flex items-center">
                        <button
                          className="bg-beigePrimary px-4 py-2 rounded-md"
                          onClick={() => decreaseQty(data.id)}
                        >
                          -
                        </button>
                        <div
                          className="px-3"
                          onChange={() => setUpdateCart(!updateCart)}
                        >
                          {itemOnCart(data.id)?.qty || 0}
                        </div>
                        <button
                          className="bg-beigePrimary px-4 py-2 rounded-md"
                          onClick={() => increaseQty(data.id)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(data.id)}
                        className="bg-beigePrimary px-4 py-2 rounded-md"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <button
                      className="bg-beigePrimary px-4 py-2 rounded-md"
                      onClick={() => addItem(data)}
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
