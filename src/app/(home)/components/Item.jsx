import React from "react";
import Image from "next/image";

export default function Item({
  item,
  addToCart,
  removeFromCart,
  onCart,
  updateCartQty,
}) {
  const cartItem = onCart(item.id);
  return (
    <div key={item.id} className="flex w-[250px] rounded-md bg-white gap-5 p-5">
      <div className="flex flex-col px-4  w-full gap-5 items-center justify-center">
        <Image
          src={item.image}
          alt="image-product"
          width={200}
          height={200}
          className="rounded-md bg-white px-4 py-2 w-[200px] aspect-square object-contain"
        />
        <div className="flex flex-col items-start gap-2 w-[200px] truncate">
          <p className="font-semibold ">{item.title}</p>
          <p className="text-black/70 font-light ">{item.description}</p>
          <p className="font-medium">${item.price}</p>
        </div>
        {cartItem ? (
          <div className="flex  items-center gap-2">
            <div className="flex items-center">
              <button
                className="bg-beigePrimary px-4 py-2 rounded-md"
                onClick={() => updateCartQty(item.id, cartItem.qty - 1)}
                disabled={cartItem.qty === 1}
              >
                -
              </button>
              <div className="px-3">{cartItem.qty ?? 1}</div>
              <button
                className="bg-beigePrimary px-4 py-2 rounded-md"
                onClick={() => updateCartQty(item.id, cartItem.qty + 1)}
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-beigePrimary px-4 py-2 rounded-md"
            >
              Remove
            </button>
          </div>
        ) : (
          <button
            className="bg-beigePrimary px-4 py-2 rounded-md"
            onClick={() => addToCart(item)}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
