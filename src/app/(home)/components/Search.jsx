import Image from "next/image";

import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/app/context/CartContext";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchedItem() {
  const { items } = useContext(CartContext); // Menggunakan items dari context

  const [searchResult, setSearchResult] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  // Memperbarui daftar item yang cocok dengan pencarian
  useEffect(() => {
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(searchResult.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchResult, items]);

  return (
    <>
      <div className="w-[500px] absolute top-0 right-20 z-10">
        <FaMagnifyingGlass className="absolute top-2 left-2 text-black/60" />
        <input
          type="text"
          className="bg-beigeSecondary/30 px-8 rounded-full h-[30px] w-[300px] text-black"
          value={searchResult}
          onChange={(e) => setSearchResult(e.target.value)}
        />
        {searchResult !== "" && (
          <div className="flex gap-2 flex-wrap bg-white w-auto px-4 py-1 mt-5 rounded-md">
            {filteredItems.map((item) => {
              console.log(item.title);
              return (
                <div key={item.id} className="flex gap-2 relative bg-white">
                  <Image
                    src={item.image}
                    width={50}
                    height={50}
                    alt="product"
                  />
                  <div className="bg-smokeWhite px-4 py-1">
                    <p className="font-semibold">{item.title}</p>
                    <p>${item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
