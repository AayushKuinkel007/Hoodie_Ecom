"use client";
import React, { useEffect, useState } from "react";

const Landing = () => {
  const [bgShade, setBgShade] = useState(500); // light gray start

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 400; // adjust for sensitivity

      const progress = Math.min(scrollY / maxScroll, 1);
      const shade = Math.floor(230 - progress * 80); // darker on scroll

      setBgShade(shade);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      style={{
        backgroundColor: `rgb(${bgShade}, ${bgShade}, ${bgShade})`,
        transition: "background-color 0.2s linear",
      }}
      className="p-6 md:p-10 min-h-screen relative"
    >
      {/* Collections Bar */}
      <div className="bg-white w-[250px] md:mt-3 ms-2.5 md:absolute md:top-2 md:right-5 z-10 hidden md:block">
        <div className="flex justify-between items-center">
          <h2 className="text-[10px] font-semibold flex items-center gap-2 ms-3">
            Collections
            <span className="text-gray-400 font-normal">01 / 01</span>
          </h2>

          <div className="w-7 h-7 border border-black flex items-center justify-center">
            <span className="text-xs font-bold">M</span>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute left-5 top-40">
        <h2 className="text-[10px] font-semibold flex items-center gap-2 ms-3">
          Collections <span className="text-gray-400 font-normal">01 / 01</span>
        </h2>
        <h1 className="text-4xl uppercase font-bold ms-4 mb-8">Collection</h1>
        <h2 className="text-[10px] font-semibold flex items-center gap-20 ms-3">
          Products <span className="text-black font-semibold">10</span>
        </h2>
      </div>

      <div className="bg-white absolute bottom-5 left-5 w-92">
        <div className="flex justify-between bg-white p-1">
          <h1 className="text-[12px]">10 Products</h1>
          <span className="text-gray-400 text-[12px]">Discover</span>
        </div>
      </div>
    </section>
  );
};

export default Landing;
