import React, { useEffect, useState } from "react";
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
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const Cryptocurrency = () => {
  const { coin: currentCoin } = useParams();
  const [coin, setCoin] = useState(currentCoin || "bitcoin");

  useEffect(() => {
    if (!currentCoin) {
      return;
    }
    setCoin(currentCoin);
  }, [currentCoin]);

  return (
    <div>
      <Header />
      <div className=" w-[100%]  bg-[#EFF2F5] px-[3vw] py-20 flex flex-col gap-16">
        <div className=" flex gap-5 max-sm:flex-col">
          <div className=" flex-[5] flex flex-col gap-5">
            <Chart coin={coin} />
            <Performance coin={coin} />
            <Sentiment events={events} />
            <Technicals coin={coin} />
            <Tokenomics />
            <Team />
            <div className=" sm:hidden">
              <Recommended />
            </div>
          </div>
          <div className=" flex-[2]">
            <div className=" flex flex-col sticky top-20 gap-3">
              <Getstarted />
              <Trending />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cryptocurrency;
