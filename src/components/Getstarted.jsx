import React from "react";

const Getstarted = () => {
  return (
    <div className=" w-[100%] rounded-lg bg-[#266BEB] flex flex-col gap-4 text-center px-[10%] py-10 text-white">
      <h2 className=" text-2xl font-semibold">
        Get Started with KoinX for FREE
      </h2>
      <p className=" text-sm">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <img
        src="https://www.koinx.com/_next/static/media/CryptoGuide.555c0e7d.svg"
        alt=""
      />
      <button className=" bg-white p-2 flex justify-center items-center text-black rounded-lg font-semibold">
        Get Started for FREE
      </button>
    </div>
  );
};

export default Getstarted;
