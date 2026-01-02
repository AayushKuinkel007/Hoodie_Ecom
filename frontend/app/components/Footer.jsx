"use client"
import React, { useState } from "react";
import { TextScramble } from "./TextScramble";

const Footer = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const linksLeft = [
    { id: 1, label: "Terms of Service" },
    { id: 2, label: "Shipping Policy" },
    { id: 3, label: "Size Guide", noDivider: true },
  ];

  const linksRight = [
    { id: 4, label: "Hello@haha.com" },
    { id: 5, label: "Instagram", noDivider: true },
  ];

  // Function to render links with hover opacity
  const renderLinks = (links) =>
    links.map((link) => (
      <TextScramble key={link.id}>
        <li
          onMouseEnter={() => setHoveredId(link.id)}
          onMouseLeave={() => setHoveredId(null)}
          className={`relative text-[9px] font-semibold uppercase px-2 cursor-pointer transition-opacity duration-200 ${
            hoveredId && hoveredId !== link.id ? "opacity-40" : "opacity-100"
          } ${!link.noDivider ? "after:absolute after:inset-y-0 after:right-0 after:w-px after:bg-gray-300" : ""}`}
        >
          {link.label}
        </li>
      </TextScramble>
    ));

  return (
    <div className="relative bg-gray-300/20">
      {/* Description */}
      <div className="flex justify-center py-10 px-50 h-[90.8vh]">
        <p className="text-center font-bold text-5xl w-200 uppercase px-30">
          Born on the road, made for the city. Technical, protective and
          unapologetically feminine, our pieces give women the confidence to
          move freely. A call to carve your own path, with no compromise and no
          concession.
        </p>
      </div>

      {/* Footer links */}
      <div className="flex justify-between sticky bottom-0 relative">
        <ul className="flex justify-center items-center bg-white my-2 mx-2 px-3 h-8">
          {renderLinks(linksLeft)}
        </ul>

        <ul className="flex justify-center items-center bg-white my-2 mx-2 px-3 h-8">
          {renderLinks(linksRight)}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
