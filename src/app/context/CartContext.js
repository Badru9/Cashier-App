"use client";

import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

const CartContext = createContext([]);

const Provider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchResult, setSearchResult] = useState("");
  const [modal, setModal] = useState(false);
  // const [purchase, setPurchase] = useState([]);

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
    const purchasedItem = cart.filter((item) => item.id === id);
    if (!purchasedItem) {
      console.error("Item not found");
    }

    setCart(purchasedItem);

    setModal(true);
    // const { price, qty } = purchasedItem;
    // const total = Math.trunc(price * qty);
    // console.log(`Purchased for $${total}`);

    setTimeout(() => {
      const newCart = cart.filter((item) => item.id !== id);
      setCart(newCart);
      setModal(false);
    }, 3000);
  };

  const purchaseAllItem = () => {
    let total = 0;

    cart.forEach((item) => {
      let allItemCost = Math.trunc(item.price * item.qty);

      total += allItemCost;

      console.log(`Purchased for $${total}`);
      // console.log ini diganti dengan ( modal ), muncul tampilan dimana pembayaran sudah berhasil
    });
    setCart([]);
  };

  const searchItem = (e) => {
    setSearchResult(e);
    console.log(searchResult);
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
        searchItem,
        searchResult,
        setCart,
        modal,
        setModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { Provider, CartContext };
