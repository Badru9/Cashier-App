import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/app/context/CartContext";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";

export default function SearchedItem() {
  const { items, detailProduct } = useContext(CartContext);

  const [searchResult, setSearchResult] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(searchResult.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchResult, items]);

  const resetSearchResult = (e) => {
    if (e.key === "Enter") setSearchResult("");
  };

  return (
    <>
      <div className="w-[500px] absolute top-0 right-20 z-10">
        <FaMagnifyingGlass className="absolute top-2 left-2 text-first" />
        <input
          onKeyDown={resetSearchResult}
          type="text"
          className="bg-dark/30 px-8 rounded-full h-[30px] w-[300px] text-black"
          value={searchResult}
          onChange={(e) => setSearchResult(e.target.value)}
        />
        {searchResult !== "" ? (
          filteredItems.length > 0 ? (
            <div className="flex gap-3 bg-white overflow-y-scroll w-full max-h-[500px] h-auto px-6 py-4 mt-5 rounded-md shadow-md flex-col">
              {filteredItems.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex gap-2 w-auto relative h-fit"
                  >
                    <Image
                      src={item.image}
                      width={60}
                      height={50}
                      alt="product"
                      className="w-fit aspect-auto object-contain"
                    />
                    <div className="w-fit rounded-md px-4 py-1">
                      <p className="font-semibold">{item.title}</p>
                      <p className="mb-2">${item.price}</p>
                      <Link
                        href="/product"
                        className="bg-first text-light
                       px-4 py-1 rounded-md text-sm hover:opacity-80 transition-opacity duration-200 ease-in-out"
                        onClick={() => detailProduct(item.id)}
                      >
                        Lihat Detail
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex gap-3 bg-white overflow-y-scroll w-auto max-h-[500px] h-auto px-6 py-4 mt-5 rounded-md shadow-md flex-col">
              Barang tidak sesuai
            </div>
          )
        ) : null}
      </div>
    </>
  );
}
