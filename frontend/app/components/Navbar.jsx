"use client";
import React, { useState } from "react";
import { TextScramble } from "./TextScramble";

const Navbar = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const Navlinks = [
    { id: 1, link: "All", value: "20" },
    { id: 2, link: "Stores", value: "4" },
    { id: 3, link: "Cart", value: "00" },
  ];

  return (
    <div className="p-2">
      <h1 className="text-sm font-bold">UjjyaloHoodie</h1>

      <div className="flex justify-between items-center mt-3">
        {/* LEFT: All + Stores */}
        <div className="flex gap-6">
          {Navlinks.slice(0, 2).map((item) => (
            <div
              className={`transition-opacity duration-200 ${
                hoveredId && hoveredId !== item.id
                  ? "opacity-40"
                  : "opacity-100"
              }`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <TextScramble className="group flex items-center gap-1 font-mono text-[10px] uppercase cursor-pointer">
                <span>{item.link}</span>
                <span className="text-gray-400 group-hover:text-black">{item.value}</span>
              </TextScramble>
            </div>
          ))}
        </div>

        {/* RIGHT: Cart */}
        <div
          className={`transition-opacity duration-200 ${
            hoveredId && hoveredId !== Navlinks[2].id
              ? "opacity-40"
              : "opacity-100"
          }`}
          onMouseEnter={() => setHoveredId(Navlinks[2].id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <TextScramble className="group flex items-center gap-1 font-mono text-[10px] uppercase cursor-pointer">
            <span>{Navlinks[2].link}</span>
            <span className="text-gray-400 group-hover:text-black">{Navlinks[2].value}</span>
          </TextScramble>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
