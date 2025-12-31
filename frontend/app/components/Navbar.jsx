import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="p-3">
        <h1 className="text-sm font-bold">UjjyaloHoodie</h1>

        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-3">
            <h2 className="text-[10px] flex gap-1 font-semibold">
              All <span className="text-gray-400">20</span>
            </h2>
            <h2 className="text-[10px] flex gap-1 font-semibold">
              Stores <span className="text-gray-400">4</span>
            </h2>
          </div>

          <h2 className="text-[10px] flex gap-1 font-semibold">
            Cart <span className="text-gray-400">00</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;
