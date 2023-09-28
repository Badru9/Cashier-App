"use client";

import Navbar from "../(home)/components/Navbar";
import Product from "./components/productComponent";

export default function product() {
  return (
    <div className="bg-light p-10 w-full">
      <Navbar />
      <p className="font-semibold text-3xl text-first mb-5 mt-16">
        Product Detail
      </p>
      <Product />
    </div>
  );
}
