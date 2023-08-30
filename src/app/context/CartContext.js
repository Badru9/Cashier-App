"use client";

import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

const CartContext = createContext([]);

const Provider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const itemOnCart = (id) => cart.find((item) => item.id === id);

  const addToCart = (item) => {
    const newCart = [
      ...cart,
      {
        ...item,
        qty: 1,
      },
    ];
    setCart(newCart);
    // console.log("addToCart", item);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const updateCartQty = (id, qty) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty,
        };
      }
      return item;
    });
    setCart(newCart);
  };

  const checkoutItems = (item) => {
    itemOnCart ? setCheckout(item.id) : console.log("Item tidak ada");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        items,
        addToCart,
        itemOnCart,
        removeFromCart,
        updateCartQty,
        checkoutItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { Provider, CartContext };
