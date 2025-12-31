import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/ui/Landing";

const page = () => {
  return (
    <>
      <section className="bg-gray-200/50 min-h-screen relative flex flex-col md:block">
        <header>
          {/* Navbar */}
          <div className="bg-white w-[95%] md:w-92 mx-auto mt-3 md:fixed md:top-2 md:left-5 z-20">
            <Navbar />
          </div>

          {/* Collections Bar */}
          <div className="bg-white w-[250px] md:mt-3 ms-2.5 md:absolute md:top-2 md:right-5 z-10">
            <div className="flex justify-between items-center">
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
          </div>
        </header>

        {/* Page Start */}
        <main>
          {/* Landing Section */}
          <section className="absolute top-35 ms-3 p-2">
            <Landing />
          </section>
        </main>
      </section>
    </>
  );
};

export default page;
