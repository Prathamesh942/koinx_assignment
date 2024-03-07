import axios from "axios";
import React, { useEffect, useState } from "react";
import { Arrow } from "../components/Chart";
import ChangeChip from "./ChangeChip";

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

  return (
    <div className=" bg-white flex flex-col gap-2 p-5  rounded-lg">
      <h2 className=" text-2xl font-semibold">Trending Coins (24h)</h2>
      <div className=" flex flex-col gap-2">
        {trending.slice(0, 3).map((coin, index) => {
          return (
            <div className=" flex justify-between" key={index}>
              <div className=" flex gap-2 items-center">
                <img className=" size-10" src={coin.item.large} alt="" />
                <span>
                  {coin.item.name}
                  <span>({coin.item.symbol})</span>
                </span>
              </div>
              <ChangeChip
                change={coin.item.data.price_change_percentage_24h.usd}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
