import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgimg from "../Assets/op.jpg";
const Page = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgimg.src})`,
          height: "100%",
          width: "100%",
        }}
      >
        {/* Collections Bar */}
        <div className="hidden md:flex justify-end">
          <div className="bg-white w-[250px] mt-3 me-5 sticky top-5 z-20 rounded-sm">
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

        <div className="hidden md:block sticky ml-5 top-40">
          <p className="text-[10px] font-semibold flex items-center gap-2 ms-3">
            Collections{" "}
            <span className="text-gray-400 font-normal">01 / 01</span>
          </p>
          <h1 className="text-4xl uppercase font-bold ms-4 mb-8">Collection</h1>
          <p className="text-[10px] font-semibold flex items-center gap-20 ms-3">
            Products <span className="text-black font-semibold">10</span>
          </p>
        </div>

        <div className="bg-white absolute bottom-5 left-5 w-92 hover:bg-black hover:text-white p-1">
          <div className="flex justify-between items-center gap-1 font-mono text-[10px] uppercase cursor-pointer">
            <span className="text-[12px]">10 Products</span>
            <span className="text-gray-400 text-[12px]">Discover</span>
          </div>
        </div>
        
      </div>

      <Footer />
    </>
  );
};

export default Page;
