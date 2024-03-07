import axios from "axios";
import React, { useEffect, useState } from "react";

const TrendingCard = ({ coin }) => {
  return (
    <div className=" w-[100%] flex flex-col gap-2 border border-zinc-300 p-2 rounded-lg">
      <div className=" flex gap-1">
        <img className=" w-[30px]" src={coin.item.large} alt="" />
        <span>{coin.item.symbol}</span>
      </div>
      <span className=" font-semibold">{coin.item.data.price}</span>
      <img src={coin.item.data.sparkline} alt="" />
    </div>
  );
};

const Carousel = ({ coins }) => {
  const [index, setIndex] = useState(0);
  let n = coins.length;
  console.log("n", n);

  const handleLeftClick = () => {
    setIndex(index - 1);
  };

  const handleRightClick = () => {
    setIndex(index + 1);
  };
  return (
    <div className="  relative flex w-[100%] overflow-hidden  items-center">
      {index == 0 ? null : (
        <button
          className=" flex justify-center items-center absolute  bg-white top-[50%] translate-y-[-50%] left-10 rounded-full size-10 shadow-2xl z-10"
          onClick={handleLeftClick}
        >
          <img className=" w-[60%]" src="assets\images\left-arrow.svg" alt="" />
        </button>
      )}
      {coins.map((coin) => {
        console.log(-100 * index);
        return (
          <div
            className={` w-[25%] min-w-[200px] px-2`}
            style={{ transform: `translateX(${-100 * index}%)` }}
          >
            <TrendingCard coin={coin} />
          </div>
        );
      })}
      {index == n - 1 ? null : (
        <button
          className=" flex justify-center items-center absolute right-10 bg-white top-[50%] translate-y-[-50%] rounded-full size-10 shadow-2xl z-10"
          onClick={handleRightClick}
        >
          <img
            className=" w-[60%]"
            src="assets\images\right-arrow.svg"
            alt=""
          />
        </button>
      )}
    </div>
  );
};

const Recommended = () => {
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
      <h2 className=" text-xl font-semibold">You may also Like</h2>
      <Carousel coins={trending} />
      <h2 className=" text-xl font-semibold">Trending coins</h2>
      <Carousel coins={trending} />
    </div>
  );
};

export default Recommended;
