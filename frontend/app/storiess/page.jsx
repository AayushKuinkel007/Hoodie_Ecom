import React from "react";
import Navbar from "../components/Navbar";

const Page = () => {
  return (
    <div className="relative bg-gray-700 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Collections Bar */}
      <div className="bg-white w-[250px] md:mt-3 ms-2.5 md:absolute md:top-2 md:right-5 z-10 hidden md:block rounded-sm">
        <div className="flex justify-between items-center">
          <p className="text-[10px] font-semibold flex items-center gap-2 ms-3">
            Collections
            <span className="text-gray-400 font-normal">01 / 01</span>
          </p>

          <div className="w-7 h-7 border border-black flex items-center justify-center">
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
    </div>
  );
};

export default Page;
