import axios from "axios";
import React, { useEffect, useState } from "react";
import TradingViewWidget from "./TradingViewWidget";
import ChangeChip from "./ChangeChip";

const Price = ({ coin }) => {
  const [price, setPrice] = useState();
  const [coinInfo, setCoinInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    const fetchCoinInfo = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/search?query=${coin}`,
          { headers: { "x-cg-demo-api-key": import.meta.env.VITE_API_KEY } }
        );
        if (response.data.coins.length == 0) {
          setError(true);
          return;
        }
        setCoinInfo(response.data.coins[0]);

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    const fetchPrice = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=inr,usd&include_24hr_change=true`,
          { headers: { "x-cg-demo-api-key": import.meta.env.VITE_API_KEY } }
        );
        setPrice(response.data[coin]);
        setLoading(false);
      } catch (error) {
        setError("Something went wrong");
        setLoading(false);
      }
    };
    fetchPrice();
    fetchCoinInfo();
    const intervalId = setInterval(fetchPrice, 60000);
    return () => clearInterval(intervalId);
  }, [coin]);

  if (error == true) {
    return <div>Something went wrong</div>;
  }
  if (loading || !price || !coinInfo) return <div>Loading</div>;

  return (
    <div className=" flex flex-col gap-6">
      <div className=" flex gap-10 items-center">
        <div className=" flex gap-1">
          <img className=" w-8 h-8" src={coinInfo.large} alt="" />
          <span className=" text-xl font-semibold">{coinInfo.name}</span>
          <span className=" text-sm font-semibold text-gray-500">
            {coinInfo.symbol}
          </span>
        </div>
        <span className=" text-white bg-gray-500 flex justify-center items-center p-2 rounded-md">
          Rank #{coinInfo.market_cap_rank}
        </span>
      </div>
      <div className=" flex gap-6 items-center">
        <div className=" flex flex-col gap-1">
          <span className=" text-2xl font-semibold">
            {price.usd.toLocaleString("en-IN", {
              style: "currency",
              currency: "USD",
            })}
          </span>
          <span className=" text-sm font-semibold">
            {price.inr.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </span>
        </div>
        <ChangeChip change={price.usd_24h_change} />
        <span>(24H)</span>
      </div>
    </div>
  );
};

const Chart = ({ coin }) => {
  return (
    <section className=" flex flex-col p-5 gap-6 bg-white  rounded-lg aspect-[5/3]">
      <Price coin={coin} />
      <TradingViewWidget />
    </section>
  );
};

export const Arrow = ({ up }) => {
  if (up) {
    return (
      <svg
        fill="#d1fae5"
        width="10px"
        height="10px"
        viewBox="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.93189 1.24806C7.84228 1.09446 7.67783 1 7.5 1C7.32217 1 7.15772 1.09446 7.06811 1.24806L0.0681106 13.2481C-0.0220988 13.4027 -0.0227402 13.5938 0.0664289 13.749C0.155598 13.9043 0.320967 14 0.5 14H14.5C14.679 14 14.8444 13.9043 14.9336 13.749C15.0227 13.5938 15.0221 13.4027 14.9319 13.2481L7.93189 1.24806Z"
          fill="#059669"
        />
      </svg>
    );
  }
  return (
    <svg
      fill="#dc2626"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="10px"
      height="10px"
      viewBox="0 0 96.154 96.154"
      xml:space="preserve"
    >
      <g>
        <path
          d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61
   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056
   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"
          fill="#dc2626"
        />
      </g>
    </svg>
  );
};

export default Chart;
