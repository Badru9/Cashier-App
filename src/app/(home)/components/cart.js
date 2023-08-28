// Tambahkan tombol untuk checkout

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";

export default function Cart({ cartItems, ...props }) {
  const { findItemID } = useContext(CartContext);

  function checkout(id) {
    const soldItems = findItemID(id);
    console.log(soldItems);
  }

  return (
    <div className="absolute overflow-auto bg-white shadow-md top-16 rounded-md right-16 w-[500px] flex flex-col gap-5 z-20 max-h-[350px]">
      {cartItems.map((item) => (
        <div
          className="w-auto flex justify-between items-center px-4 py-2"
          key={item.id}
        >
          <div className="flex flex-col gap-1">
            <p className="truncate w-[250px]">{item.title}</p>

            <p>$ {item.qty <= 1 ? item.price : item.price * item.qty}</p>
            <p>x {item.qty}</p>
            <Link
              href="/cart"
              className="bg-beigePrimary px-4 py-2 rounded-md w-fit"
              onClick={() => checkout(item.id)}
            >
              Checkout
            </Link>
          </div>
          <div className="bg-white">
            <Image
              src={item.image}
              width={60}
              height={60}
              className="p-2"
              alt="img-product"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
