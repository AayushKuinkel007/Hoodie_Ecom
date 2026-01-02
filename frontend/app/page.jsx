// pages/index.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/ui/Landing";
import Footer from "./components/Footer";

const Page = () => {
  return (
    <>
      <section className="relative">
        {/* Navbar */}
        <header>
          <Navbar/>

          {/* mobile only */}
          <div className="absolute bottom-5 md:hidden">
            <h2 className="text-[10px] font-semibold flex items-center gap-2 ms-3">
              Collections
              <span className="text-gray-400 font-normal">01 / 01</span>
            </h2>
            <h1 className="text-4xl uppercase font-bold ms-4 mb-8">
              Collection
            </h1>
          </div>

          <div className="bg-white absolute left-2.5 flex justify-between items-center md:hidden w-64">
            {/* Left */}
            <h2 className="text-[10px] font-semibold flex items-center gap-2 ms-3">
              Collections
              <span className="text-gray-400 font-normal">01 / 01</span>
            </h2>

            {/* Right box */}
            <div className="w-7 h-7 border border-black flex items-center justify-center">
              <span className="text-xs font-bold">M</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <Landing />
        </main>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default Page;
