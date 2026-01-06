"use client";
import React, { useState } from "react";
import Link from "next/link"; // for navigation
import { TextScramble } from "./TextScramble";

const Navbar = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const Navlinks = [
    { id: 1, link: "All", value: "20", path: "/products" },
    { id: 2, link: "Stories", value: "4", path: "/storiess" },
    { id: 3, link: "Cart", value: "00", path: "" },
  ];

  return (
    <div className="bg-white w-[95%] md:w-92 mx-auto mt-3 md:fixed md:top-2 md:left-5 z-20 shadow-sm rounded-sm">
      <div className="px-2 py-1">

        <Link href="/" className="text-sm font-bold">UjjyaloHoodie</Link>

        <div className="flex justify-between items-center mt-3">
          {/* LEFT: All + Stories */}
          <div className="flex gap-6">
            {Navlinks.slice(0, 2).map((item) => (
              <Link key={item.id} href={item.path}>
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
                    <span className="text-gray-400 group-hover:text-black">
                      {item.value}
                    </span>
                  </TextScramble>
                </div>
              </Link>
            ))}
          </div>

          {/* RIGHT: Cart */}
          <Link href={Navlinks[2].path}>
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
                <span className="text-gray-400 group-hover:text-black">
                  {Navlinks[2].value}
                </span>
              </TextScramble>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
