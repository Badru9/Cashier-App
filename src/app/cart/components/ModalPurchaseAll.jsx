import { CartContext } from "@/app/context/CartContext";
import Image from "next/image";
import { useContext } from "react";

export default function PurchasedItem() {
  const { cart, purchase } = useContext(CartContext);

  return (
    <div className="w-full min-h-screen bg-slate-500/30 fixed top-0 flex flex-wrap items-center justify-center backdrop-blur-md">
      {cart.map((item) => {
        return (
          <div
            className="bg-white text-black flex items-center justify-center gap-5 px-10 py-6 rounded-md shadow-md"
            key={item.id}
          >
            <div className="flex flex-col gap-2 mx-4">
              <div className="flex flex-col">
                <p className="font-semibold">You Purchased</p>
                <p className="truncate w-[500px]">{item.title} </p>
              </div>
              <div className="flex">
                <p className="mr-2">for</p>
                <span className="font-semibold">{Math.trunc(purchase)}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
