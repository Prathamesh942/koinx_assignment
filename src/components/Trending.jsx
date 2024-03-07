import axios from "axios";
import React, { useEffect, useState } from "react";
import { Arrow } from "../components/Chart";

const Trending = () => {
  const [trending, setTrending] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `
          https://api.coingecko.com/api/v3/search/trending`,
          { headers: { "x-cg-demo-api-key": import.meta.env.VITE_API_KEY } }
        );
        setTrending(response.data.coins);
        setLoading(false);
      } catch (error) {
        console.log("Error while fetching data:", error);
        setLoading(false);
      }
    };
    fetchTrending();
  }, []);
  if (loading) return <div>Loading</div>;
  console.log(trending);
  return (
    <div className=" bg-white flex flex-col gap-2">
      <h2 className=" text-2xl font-semibold">Trending Coins (24h)</h2>
      <div className=" flex flex-col gap-2">
        {trending.slice(0, 3).map((coin) => {
          console.log("coin", coin);
          return (
            <div className=" flex justify-between">
              <div className=" flex gap-2 items-center">
                <img className=" size-10" src={coin.item.large} alt="" />
                <span>
                  {coin.item.name}
                  <span>({coin.item.symbol})</span>
                </span>
              </div>
              <div
                className={` p-1 px-2 rounded-md flex items-center gap-2 ${
                  coin.item.data.price_change_percentage_24h.usd > 0
                    ? " bg-emerald-100 text-emerald-600"
                    : "bg-red-100 text-red-600"
                } `}
              >
                <Arrow
                  up={coin.item.data.price_change_percentage_24h.usd > 0}
                />
                {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
