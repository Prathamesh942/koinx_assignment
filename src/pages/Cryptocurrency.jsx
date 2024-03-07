import React from "react";
import Chart from "../components/Chart";
import Performance from "../components/Performance";
import Header from "../components/Header";

const Cryptocurrency = ({ coin }) => {
  return (
    <div>
      <Header />
      <div className=" w-screen h-screen bg-[#EFF2F5] px-[3vw]">
        <Chart coin={coin} />
        <Performance coin={coin} />
      </div>
    </div>
  );
};

export default Cryptocurrency;
