import React from "react";

const Landing = () => {
  return (
    <>
      <div>
        <h2 className="text-[10px] font-semibold flex items-center gap-2 ms-3">
          Collections
          <span className="text-gray-400 font-normal">01 / 01</span>
        </h2>
        <h1 className="text-4xl uppercase font-bold ms-4 mb-8">Collection</h1>
        <h2 className="text-[10px] font-semibold flex items-center gap-20 ms-3">
          Products
          <span className="text-black font-semibold">10</span>
        </h2>
      </div>
    </>
  );
};

export default Landing;
