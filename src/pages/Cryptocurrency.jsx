import React from "react";
import Chart from "../components/Chart";
import Performance from "../components/Performance";
import Header from "../components/Header";
import Sentiment from "../components/Sentiment";
import { events } from "../placeholderData/events";
import Technicals from "../components/Technicals";
import Tokenomics from "../components/Tokenomics";
import Team from "../components/Team";
import Trending from "../components/Trending";
import Recommended from "../components/Recommended";
import Getstarted from "../components/Getstarted";

const Cryptocurrency = ({ coin }) => {
  return (
    <div>
      {/* <Header /> */}
      <div className=" w-screen h-screen bg-[#EFF2F5] px-[3vw]">
        {/* <Chart coin={coin} />
        <Performance coin={coin} /> */}
        {/* <Sentiment events={events} /> */}
        {/* <Technicals coin={coin} /> */}
        {/* <Tokenomics /> */}
        {/* <Team /> */}
        {/* <Trending /> */}
        {/* <Recommended /> */}
        <Getstarted />
      </div>
    </div>
  );
};

export default Cryptocurrency;
