import React from "react";
import Chart from "../components/Chart";

const Cryptocurrency = ({ coin }) => {
  return (
    <div className=" w-screen h-screen bg-[#EFF2F5] px-[3vw]">
      <Chart coin={coin} />
    </div>
  );
};

export default Cryptocurrency;
