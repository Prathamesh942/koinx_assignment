import React from "react";
import Chart from "../components/Chart";
import Performance from "../components/Performance";

const Cryptocurrency = ({ coin }) => {
  return (
    <div className=" w-screen h-screen bg-[#EFF2F5] px-[3vw]">
      {/* <Chart coin={coin} /> */}
      <Performance coin={coin} />
    </div>
  );
};

export default Cryptocurrency;
