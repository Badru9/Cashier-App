import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";
import Modal from "../../cart/components/Modal";
import Link from "next/link";
import { toast } from "react-toastify";

export default function Product() {
  const {
    product,
    addToCart,
    modal,
    updateCartQty,
    itemOnCart,
    purchaseEachItem,
  } = useContext(CartContext);
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
                  className="text-first border-2 border-first px-10 py-2 rounded-md font-semibold"
                  onClick={() => {
                    itemOnCart(product.id)
                      ? updateCartQty(
                          product.id,
                          itemOnCart(product.id).qty + 1
                        )
                      : addToCart(product);
                    toast.success("Produk Ditambahkan Ke Keranjang");
                  }}
                >
                  Tambahkan Ke Keranjang
                </button>
                <Link
                  href="/cart"
                  className="bg-first text-light font-semibold hover:opacity-80 transition-opacity duration-200 ease-in-out px-10 py-2 rounded-md"
                  onClick={() => purchaseEachItem(product.id)}
                >
                  Beli Sekarang
                </Link>
              </div>
            </div>
          </div>
        );
      })}
      {modal && <Modal />}
    </>
  );
}
