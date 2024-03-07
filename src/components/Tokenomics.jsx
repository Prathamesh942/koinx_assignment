import React from "react";

const Tokenomics = () => {
  return (
    <div className=" flex flex-col gap-5 bg-white p-5  rounded-lg max-sm:hidden">
      <h2 className=" text-2xl font-semibold">Tokenomics</h2>
      <h3 className=" text-xl font-semibold">Initial Distribution</h3>
      <div className=" flex items-center gap-10">
        <div
          className=" w-[20%] aspect-square rounded-full"
          style={{
            background: `radial-gradient(closest-side, white 70%, transparent 0% 100%),
    conic-gradient(#5077d1, ${80}%, orange 0)`,
          }}
        ></div>
        <div>
          <div className=" flex items-center gap-2">
            <div className=" w-4 h-4 rounded-full bg-[#5077d1]"></div>
            <span>Crowdsale investors: 80%</span>
          </div>
          <div className=" flex items-center gap-2">
            <div className=" w-4 h-4 rounded-full bg-[orange]"></div>
            <span>Foundation: 20%</span>
          </div>
        </div>
      </div>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        doloremque fugit veritatis nostrum quibusdam vitae, doloribus aspernatur
        suscipit neque atque alias eos praesentium perferendis repellat est
        pariatur assumenda dicta facere tenetur officia. Dolorum laboriosam,
        ipsum iste recusandae explicabo illum? Quibusdam vero debitis a
        voluptate. Earum dolorum amet error pariatur, aspernatur ea nisi sed
        laudantium a voluptate, iusto nostrum ratione molestias dicta fuga
        expedita quod sit illo cupiditate porro cumque minima. Necessitatibus,
        asperiores
      </span>
    </div>
  );
};

export default Tokenomics;
