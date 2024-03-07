import React from "react";

const Header = () => {
  return (
    <header className=" fixed flex justify-between w-[100%] px-[3vw] items-center bg-white shadow-sm h-16 z-20">
      <img className=" w-16" src="assets\images\logo.svg" alt="" />
      <nav className=" flex gap-5 font-medium">
        <button>Crypto Taxes</button>
        <button>Free Tools</button>
        <button>Resource Center</button>
        <button className=" bg-[#266BEB] p-2 px-6 rounded-lg text-white">
          Get started
        </button>
      </nav>
    </header>
  );
};

export default Header;
