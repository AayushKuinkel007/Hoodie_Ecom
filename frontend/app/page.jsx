import React from "react";
import Navbar from "./components/Navbar";

const page = () => {
  return (
    <>
      <section className="bg-gray-200 h-screen relative">
        <div className="bg-white w-full md:w-100 fixed top-5 left-5">
          <Navbar />
        </div>
      </section>
    </>
  );
};

export default page;
