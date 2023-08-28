"use client";

import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

const CartContext = createContext([]);

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setCart(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
};

export { Provider, CartContext };
