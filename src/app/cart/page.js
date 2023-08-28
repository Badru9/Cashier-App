"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// import CartComponent from "../(home)/components/cart";

export default function Cart({ cartItems, ...props }) {
  const { findItemID } = useContext(CartContext);

  function itemID(id) {
    const item = findItemID(id);
    console.log(item);
  }
  // const [cartData, setCartData] = useState([]);
  // const cartItem = cartItems.find((i) => i.id);
  // setCartData(cartItem);
  // console.log(cartData);
  return (
    <div className="bg-teal-500">
      <h1>Cart Page</h1>
      <button onClick={itemID}>Click</button>
      {/* {cart.map((item) => (
        <div key={item.id}>
          <p>{item.price}</p>
        </div>
      ))} */}

      {/* <CartComponent cartItems={cartItems} /> */}
    </div>
  );
}
