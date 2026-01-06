import React from "react";
import Navbar from "../components/Navbar";
import zoro from "../Assets/hoodie_images/zoro.png";
import inosuke from "../Assets/hoodie_images/inosuke.png";
import levi from "../Assets/hoodie_images/levi.png";
import sishui from "../Assets/hoodie_images/sishui.png";
import Image from "next/image";

const page = () => {
  const Products = [
    { id: "01", img: zoro },
    { id: "02", img: inosuke },
    { id: "03", img: zoro },
    { id: "04", img: levi },
    { id: "05", img: zoro },
    { id: "06", img: sishui },
    { id: "07", img: zoro },
    { id: "08", img: inosuke },
    { id: "09", img: zoro },
    { id: "10", img: levi },
    { id: "11", img: zoro },
    { id: "12", img: sishui },
  ];

  return (
    <>
      <Navbar />

        {/* Collections Bar */}
        <div className="hidden md:flex justify-end">
          <div className="bg-white border border-gray-200 w-[250px] mt-3 me-5 sticky top-5 z-20 rounded-sm">
            <div className="flex justify-between items-center py-0.5 px-1">
              <p className="text-[10px] font-semibold flex items-center gap-2 ms-3">
                Collections
                <span className="text-gray-400 font-normal">01 / 01</span>
              </p>

              <div className="flex gap-1">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="w-7 h-7 border border-black flex items-center justify-center"
                  >
                    <span className="text-xs font-bold">{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      {/* MAIN WRAPPER */}
      <div className="relative min-h-screen">
        {/* LEFT INFO PANEL */}
        <div className="hidden md:block sticky ml-8 top-40 z-10">
          <p className="text-xs font-semibold flex items-center gap-2 text-neutral-600">
            Collections
            <span className="text-neutral-400 font-normal">01 / 01</span>
          </p>

          <h1 className="text-4xl uppercase font-extrabold tracking-wider mt-2 mb-10 text-black">
            Collection
          </h1>

          <p className="text-xs font-semibold flex items-center justify-between w-40 text-neutral-600">
            Products <span className="font-bold text-black">12</span>
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="relative mt-24 md:mt-0 md:absolute md:top-80 w-full te border-t border-l border-neutral-300 overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {Products.map((items, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center
                           h-[320px]
                           border-r border-b border-neutral-300
                           bg-white
                           transition-all duration-300
                           hover:bg-neutral-50 cursor-pointer"
              >
                {/* IMAGE WRAPPER */}
                <div className="flex items-center justify-center h-[220px]">
                  <Image
                    src={items.img}
                    alt={`product-${items.id}`}
                    className="object-contain max-h-[180px]
                               transition-transform duration-500 ease-out
                               group-hover:scale-110"
                    priority
                  />
                </div>

                {/* PRODUCT ID */}
                <span className="absolute bottom-4 left-4 text-[11px] font-semibold tracking-widest text-neutral-600">
                  {items.id}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
