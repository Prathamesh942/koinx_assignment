import React from "react";
import Chart from "../components/Chart";
import Performance from "../components/Performance";
import Header from "../components/Header";
import Sentiment from "../components/Sentiment";
import { events } from "../placeholderData/events";

const Cryptocurrency = ({ coin }) => {
  return (
    <div>
      {/* <Header /> */}
      <div className=" w-screen h-screen bg-[#EFF2F5] px-[3vw]">
        {/* <Chart coin={coin} />
        <Performance coin={coin} /> */}
        <Sentiment events={events} />
      </div>
    </div>
  );
};

export default Cryptocurrency;
