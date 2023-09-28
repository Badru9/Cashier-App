import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";

export default function Product() {
  const { product, addToCart } = useContext(CartContext);
  return (
    <>
      {product.map((product) => {
        return (
          <div key={product.id} className="flex col gap-5 bg-white p-10">
            <Image
              src={product.image}
              height={200}
              width={200}
              alt="product"
              className="aspect-auto w-1/4 object-contain"
            />
            <div className="flex flex-col mt-10 ml-10 gap-4">
              <p className="font-bold tracking-wide text-xl">{product.title}</p>
              <p className="font-semibold text-xl">${product.price}</p>
              <p className="text-black/60 w-[500px] leading-6 font-light">
                {product.description}
              </p>
              <div className="mt-20 flex gap-6">
                <button
                  className="text-first border-2 border-first px-10 py-2 rounded-md"
                  onClick={() => addToCart(product)}
                >
                  Tambahkan Ke Keranjang
                </button>
                <button className="bg-first text-light px-10 py-2 rounded-md">
                  Beli Sekarang
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
