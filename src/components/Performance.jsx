import axios from "axios";
import React, { useEffect, useState } from "react";

const Lowhigh = ({ low, high, duration, current }) => {
  console.log(Math.trunc(((current - low) * 100) / (high - low)));
  return (
    <div className=" flex justify-between items-center text-gray-600 text-sm">
      <div className="flex flex-[1] flex-col items-start">
        <span>{duration} Low</span>
        <span className=" text-zinc-600  font-medium">
          {low.toLocaleString("en-IN")}
        </span>
      </div>
      <div className="flex-[5] flex justify-center items-center relative">
        <div className="w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full">
          {current ? (
            <div
              className="absolute top-1 flex flex-col translate-x-[-20%] items-center"
              style={{
                left: `${Math.trunc(((current - low) * 100) / (high - low))}%`,
              }}
            >
              <img className=" size-2" src="assets\images\up.svg" alt="" />
              <span>
                {current.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </div>
          ) : null}
        </div>
      </div>
      <div className=" flex flex-[1] flex-col items-end">
        <span>{duration} High</span>
        <span className=" text-zinc-600  font-medium">
          {high.toLocaleString("en-IN")}
        </span>
      </div>
    </div>
  );
};

const MarketInfo = ({ name, value }) => {
  return (
    <div className=" flex justify-between py-4 border-b border-zinc-300 w-[100%] text-sm">
      <span className=" text-zinc-600">{name}</span>
      <span className=" text-zinc-800 font-medium">{value}</span>
    </div>
  );
};

const Performance = ({ coin }) => {
  const [fundamentals, setFundamentals] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchFundamentals = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coin}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
          { headers: { "x-cg-demo-api-key": import.meta.env.VITE_API_KEY } }
        );
        setFundamentals(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error while fetching data:", error);
        setLoading(false);
      }
    };
    fetchFundamentals();
  }, []);
  if (loading) return <div>Loading</div>;
  return (
    <div className=" flex flex-col bg-white gap-8 px-[2vw] py-5 rounded-md">
      <h2 className=" text-2xl font-semibold">Performance</h2>
      <Lowhigh
        low={fundamentals.market_data.low_24h.usd}
        high={fundamentals.market_data.high_24h.usd}
        duration={"Today's"}
        current={fundamentals.market_data.current_price.usd}
      />
      <Lowhigh low={16930} high={49743} duration={"52W"} />
      <div>
        <h2 className=" text-lg font-semibold text-zinc-600 flex items-center gap-2">
          Fundamentals{" "}
          <span className="bg-slate-400  text-xs rounded-full h-4 w-4 flex items-center justify-center text-white">
            i
          </span>
        </h2>
        <div className=" flex justify-between gap-10">
          <div className=" flex flex-col flex-1 justify-between">
            <MarketInfo
              name={"Bitcoin Price"}
              value={fundamentals.market_data.current_price.usd.toLocaleString(
                "en-US",
                {
                  style: "currency",
                  currency: "USD",
                }
              )}
            />
            <MarketInfo
              name={"24h Low / 24h High"}
              value={`${fundamentals.market_data.low_24h.usd.toLocaleString(
                "en-US",
                {
                  style: "currency",
                  currency: "USD",
                }
              )} / ${fundamentals.market_data.high_24h.usd.toLocaleString(
                "en-US",
                {
                  style: "currency",
                  currency: "USD",
                }
              )}`}
            />
            <MarketInfo
              name={"24h Low / 24h High"}
              value={`${fundamentals.market_data.low_24h.usd.toLocaleString(
                "en-US",
                {
                  style: "currency",
                  currency: "USD",
                }
              )} / ${fundamentals.market_data.high_24h.usd.toLocaleString(
                "en-US",
                {
                  style: "currency",
                  currency: "USD",
                }
              )}`}
            />
            <MarketInfo
              name={"Trading Volume"}
              value={fundamentals.market_data.total_volume.usd.toLocaleString(
                "en-US",
                {
                  style: "currency",
                  currency: "USD",
                }
              )}
            />
            <MarketInfo
              name={"Market Cap Rank"}
              value={`#${fundamentals.market_data.market_cap_rank}`}
            />
          </div>
          <div className=" flex flex-col flex-1 justify-between">
            <MarketInfo
              name={"Market Cap"}
              value={fundamentals.market_data.market_cap[
                fundamentals.symbol
              ].toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            />
            <MarketInfo name={"Market Cap Dominance"} value={`38.343%`} />
            <MarketInfo name={"Volume / Market Cap"} value={0.0718} />
            <MarketInfo name={"All-Time High"} value={"$69,044.77"} />
            <MarketInfo name={"All-Time Low"} value={"$67.81"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
