// Tambahkan tombol untuk checkout

import Link from "next/link";
import Image from "next/image";
import CartIcons from "../../components/icons/Cart.svg";
import { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";
import { GoTrash } from "react-icons/go";

export default function Cart({ description }) {
  const { cart, removeFromCart, detailProduct } = useContext(CartContext);

  return (
    <>
      <div className="absolute overflow-auto bg-white shadow-md top-16 rounded-md right-16 w-[500px] flex flex-col gap-5 z-20 max-h-[350px]">
        {cart.length === 0 ? (
          <div className="h-[250px] w-full flex flex-col gap-2 justify-center items-center select-none">
            <Image
              src={CartIcons}
              width={150}
              height={150}
              alt="Cart Icons"
              className="pointer-events-none opacity-70"
            />
            <p className="text-md text-black/60">{description}</p>
          </div>
        ) : (
          cart.map((item) => (
            <div
              className="w-auto flex justify-between items-center px-4 py-2"
              key={item.id}
            >
              <div className="flex flex-col gap-1">
                <Link
                  className="truncate font-semibold w-[250px] cursor-pointer"
                  onClick={() => detailProduct(item.id)}
                  href={`/product`}
                >
                  {item.title}
                </Link>

                <p>
                  ${" "}
                  {item.qty <= 1
                    ? item.price
                    : Math.trunc(item.price * item.qty)}{" "}
                  - <span className="font-semibold">discount $1</span>
                </p>
                <p>x {item.qty}</p>
                <div className="flex items-center gap-3">
                  <Link
                    href="/cart"
                    className="bg-first text-light px-4 py-1.5 rounded-md w-fit my-2 hover:opacity-80 cursor-pointer"
                  >
                    Checkout
                  </Link>
                  <GoTrash
                    size={32}
                    className="bg-first text-light p-2 rounded-md w-fit my-2 hover:opacity-80 cursor-pointer"
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>
              </div>
              <div className="bg-white">
                <Image
                  src={item.image}
                  width={70}
                  height={70}
                  className=" mr-5"
                  alt="img-product"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
