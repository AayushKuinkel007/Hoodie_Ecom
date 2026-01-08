"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import zoro from "../Assets/hoodie_images/zoro.png";
import inosuke from "../Assets/hoodie_images/inosuke.png";
import levi from "../Assets/hoodie_images/levi.png";
import sishui from "../Assets/hoodie_images/sishui.png";
import Image from "next/image";
import Footer from "../components/Footer";

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

  const [bgShade, setBgShade] = useState(255);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Start darkening immediately but very gradually
      // The effect continues for much longer (3-4 screen heights)
      const maxScroll = windowHeight * 3;

      // Calculate progress (0 to 1)
      const progress = Math.min(scrollY / maxScroll, 1);

      // Ease out cubic for smoother deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      // 255 (white) → 240 (very light gray) - subtle transition
      const shade = Math.floor(255 - easeProgress * 85);

      setBgShade(shade);
    };

    handleScroll(); // Initialize on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="min-h-[150vh] relative transition-colors duration-300 ease-out"
        style={{
          backgroundColor: `rgb(${bgShade}, ${bgShade}, ${bgShade})`,
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Collections Bar - Desktop Only */}
        <div className="hidden md:flex absolute top-2 right-1 px-5 pt-3 rounded-sm">
          <div className="bg-white border border-gray-200 w-[250px] sticky top-5 z-20 rounded-sm">
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
        {/* Main Content Container */}
        <div className="relative">
          {/* LEFT INFO PANEL - Desktop Only */}
          <div className="hidden md:block md:sticky md:top-40 ml-10 z-10 md:w-48 flex-shrink-0">
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
          <div className="mt-50">
            {/* PRODUCTS GRID */}
            <div className="border-t border-l border-neutral-300">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {Products.map((items, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col items-center justify-center
                             h-[320px]
                             border-r border-b border-neutral-300
                             transition-all duration-300
                            cursor-pointer"
                    style={{
                      backgroundColor: `rgb(${bgShade}, ${bgShade}, ${bgShade})`,
                    }}
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
