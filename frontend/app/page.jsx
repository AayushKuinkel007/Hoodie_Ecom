// pages/index.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/ui/Landing";

const Page = () => {
  return (
    <section className="bg-gray-100 min-h-screen relative">
      {/* Navbar */}
      <header className="bg-white w-[95%] md:w-92 mx-auto mt-3 md:fixed md:top-2 md:left-5 z-20 shadow-sm">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="pt-24 md:pt-32 px-4 md:px-10 flex justify-center">
        <Landing />
      </main>
    </section>
  );
};

export default Page;
