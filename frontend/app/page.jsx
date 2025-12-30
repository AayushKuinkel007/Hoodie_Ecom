import React from "react";
import Navbar from "./components/Navbar";

const page = () => {
  return (
    <>
      <section className="bg-gray-200 h-screen relative">
        <div className="bg-white w-[95%] md:w-100 fixed m-3 md:m-0 md:top-5 md:left-5">
          <Navbar />
        </div>
      </section>
    </>
  );
};

export default page;
