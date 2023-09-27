// import Image from "next/image";

// import { useContext, useState, useEffect } from "react";
// import { CartContext } from "@/app/context/CartContext";
// import { FaMagnifyingGlass } from "react-icons/fa6";

// export default function SearchedItem() {
//   const { items } = useContext(CartContext);

//   const [searchResult, setSearchResult] = useState("");
//   const [filteredItems, setFilteredItems] = useState([]);

//   useEffect(() => {
//     const filtered = items.filter((item) =>
//       item.title.toLowerCase().includes(searchResult.toLowerCase())
//     );
//     setFilteredItems(filtered);
//   }, [searchResult, items]);

//   return (
//     <>
//       <div className="w-[500px] absolute top-0 right-20 z-10">
//         <FaMagnifyingGlass className="absolute top-2 left-2 text-black/60" />
//         <input
//           type="search"
//           className="bg-beigeSecondary/30 px-8 rounded-full h-[30px] w-[300px] text-black"
//           value={searchResult}
//           onChange={(e) => setSearchResult(e.target.value)}
//         />
//         {searchResult ? (
//           <div className="flex gap-3 bg-white overflow-y-scroll w-full max-h-[500px] h-auto px-6 py-4 mt-5 rounded-md shadow-md flex-col">
//             {filteredItems.map((item) => {
//               return (
//                 <div
//                   key={item.id}
//                   className="flex gap-2 w-auto relative cursor-pointer h-fit"
//                 >
//                   <Image
//                     src={item.image}
//                     width={60}
//                     height={50}
//                     alt="product"
//                   />
//                   <div className="w-fit rounded-md px-4 py-1">
//                     <p className="font-semibold">{item.title}</p>
//                     <p>${item.price}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           searchResult === "" && (
//             <div className="flex gap-3 bg-white overflow-y-scroll w-auto max-h-[500px] h-auto px-6 py-4 mt-5 rounded-md shadow-md flex-col">
//               Barang tidak ada.
//             </div>
//           )
//         )}
//       </div>
//     </>
//   );
// }

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
        {searchResult !== "" ? (
          filteredItems.length > 0 ? (
            <div className="flex gap-3 bg-white overflow-y-scroll w-full max-h-[500px] h-auto px-6 py-4 mt-5 rounded-md shadow-md flex-col">
              {filteredItems.map((item) => {
                console.log(item.title);
                return (
                  <div
                    key={item.id}
                    className="flex gap-2 w-auto relative cursor-pointer h-fit"
                  >
                    <Image
                      src={item.image}
                      width={60}
                      height={50}
                      alt="product"
                    />
                    <div className="w-fit rounded-md px-4 py-1">
                      <p className="font-semibold">{item.title}</p>
                      <p>${item.price}</p>
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
