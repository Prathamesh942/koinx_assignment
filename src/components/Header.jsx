import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className=" fixed flex justify-between w-[100%] px-[3vw] items-center bg-white shadow-sm h-16 z-20">
      <img className=" w-16" src="assets\images\logo.svg" alt="" />
      <button className="sm:hidden" onClick={() => setOpen(!open)}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 8h16M4 12h16M4 16h16"
          ></path>
        </svg>
      </button>
      <nav
        className={` flex gap-5 font-medium ${
          open
            ? "flex-col absolute right-0 top-16 p-3 bg-white"
            : "max-sm:hidden"
        }`}
      >
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
