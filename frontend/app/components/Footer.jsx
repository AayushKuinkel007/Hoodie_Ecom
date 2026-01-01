import React from "react";

const Footer = () => {
  return (
    <>
      <div className="relative bg-gray-300/20">
        <div className="flex justify-center py-10 px-50 h-[90.8vh] ">
          <p className="text-center font-bold text-5xl w-200 uppercase px-30">
            Born on the road, made for the city. Technical, protective and
            unapologetically feminine, our pieces give women the confidence to
            move freely. A call to carve your own path, with no compromise and
            no concession.
          </p>
        </div>

        <div className="flex justify-between sticky bottom-0 relatives">
          <ul className="flex justify-center items-center bg-white my-2 mx-2 px-3 h-8">
            <li className="relative text-[9px] font-semibold uppercase px-2 after:absolute after:inset-y-0 after:right-0 after:w-px after:bg-gray-300">
              Terms of Service
            </li>
            <li className="relative text-[9px] font-semibold uppercase px-2 after:absolute after:inset-y-0 after:right-0 after:w-px after:bg-gray-300">
              Shipping Policy
            </li>
            <li className="text-[9px] font-semibold uppercase px-2">
              Size Guide
            </li>
          </ul>

          <ul className="flex justify-center items-center bg-white my-2 mx-2 px-3 h-8">
            <li className="relative text-[9px] font-semibold uppercase px-2 after:absolute after:inset-y-0 after:right-0 after:w-px after:bg-gray-300">
              Hello@haha.com
            </li>
            <li className="text-[9px] font-semibold uppercase px-2">
              Instagram
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
