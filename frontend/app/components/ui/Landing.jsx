"use client";
import React, { useEffect, useState } from "react";
import { TextScramble } from "../TextScramble";

const Landing = () => {
  // Subtle gray at start (Tailwind gray-200 ≈ rgb(229))
  const [bgShade, setBgShade] = useState(229);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 400;

      const progress = Math.min(scrollY / maxScroll, 1);

      // 229 → 180 (subtle → darker gray)
      const shade = Math.floor(229 - progress * 49);

      setBgShade(shade);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="p-6 md:p-10 min-h-screen relative transition-colors duration-300"
      style={{
        backgroundColor: `rgb(${bgShade}, ${bgShade}, ${bgShade})`,
      }}
    >
      {/* Collections Bar */}
      <div className="bg-white w-[250px] md:mt-3 ms-2.5 md:absolute md:top-2 md:right-5 z-10 hidden md:block rounded-sm">
        <div className="flex justify-between items-center">
          <p className="text-[10px] font-semibold flex items-center gap-2 ms-3">
            Collections
            <span className="text-gray-400 font-normal">01 / 01</span>
          </p>

          <div className="w-7 h-7 border border-black flex items-center justify-center rounded-sm">
            <span className="text-xs font-bold">M</span>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute left-5 top-40">
        <p className="text-[10px] font-semibold flex items-center gap-2 ms-3">
          Collections <span className="text-gray-400 font-normal">01 / 01</span>
        </p>
        <h1 className="text-4xl uppercase font-bold ms-4 mb-8">Collection</h1>
        <p className="text-[10px] font-semibold flex items-center gap-20 ms-3">
          Products <span className="text-black font-semibold">10</span>
        </p>
      </div>

      <TextScramble>
        <div className="bg-white absolute bottom-5 left-5 w-92 hover:bg-black hover:text-white p-1">
          <div className="flex justify-between items-center gap-1 font-mono text-[10px] uppercase cursor-pointer">
            <span className="text-[12px]">10 Products</span>
            <span className="text-gray-400 text-[12px]">Discover</span>
          </div>
        </div>
      </TextScramble>
    </section>
  );
};

export default Landing;
