"use client";

import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

const CartContext = createContext([]);

const Provider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

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

  const purchaseEachItem = (id) => {
    const newCart = cart.find((item) => item.id === id);
    const { price, qty } = newCart;
    const total = Math.trunc(price * qty);
    alert(`Purchased for $${total}`);
    setCart([]);
  };

  const purchaseAllItem = () => {
    let totalPrice = 0;

    cart.forEach((item) => {
      let allItemCost = Math.trunc(item.price * item.qty);

      totalPrice += allItemCost;

      console.log(`Purchasing $${totalPrice}`);
      // console.log ini diganti dengan ( modal ), muncul tampilan dimana pembayaran sudah berhasil
    });
    setCart([]);
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
        purchaseAllItem,
        purchaseEachItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { Provider, CartContext };
