import axios from "axios";
import React, { useEffect, useState } from "react";

const Technicals = (coin) => {
  //   const [info, setInfo] = useState();
  //   const [loading, setLoading] = useState(true);
  //   useEffect(() => {
  //     const fetchInfo = async () => {
  //       try {
  //         setLoading(true);
  //         const response = await axios.get(
  //           `https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
  //           { headers: { "x-cg-demo-api-key": import.meta.env.VITE_API_KEY } }
  //         );
  //         setInfo(response.data);
  //         setLoading(false);
  //         console.log(info);
  //       } catch (error) {
  //         console.log("Error while fetching data:", error);
  //         setLoading(false);
  //       }
  //     };
  //     fetchInfo();
  //   }, []);
  //   if (loading) return <div>Loading</div>;
  return (
    <div className=" flex flex-col gap-5 bg-white">
      <h2 className=" text-2xl font-semibold">About Bitcoin</h2>
      <h3 className=" font-semibold">What is bitcoin?</h3>
      <p className=" border-b pb-3 border-zinc-200">
        Bitcoin is the first successful internet money based on peer-to-peer
        technology; whereby no central bank or authority is involved in the
        transaction and production of the Bitcoin currency. It was created by an
        anonymous individual/group under the name, Satoshi Nakamoto. The source
        code is available publicly as an open source project, anybody can look
        at it and be part of the developmental process. Bitcoin is changing the
        way we see money as we speak. The idea was to produce a means of
        exchange, independent of any central authority, that could be
        transferred electronically in a secure, verifiable and immutable way. It
        is a decentralized peer-to-peer internet currency making mobile payment
        easy, very low transaction fees, protects your identity, and it works
        anywhere all the time with no central authority and banks. Bitcoin is
        designed to have only 21 million BTC ever created, thus making it a
        deflationary currency
      </p>
      <div className=" flex gap-10">
        <div className="flex-1 flex p-5 bg-gradient-to-br from-teal-300 to-blue-600 rounded-xl gap-5 items-center">
          <img
            className=" w-[40%] object-cover aspect-square rounded-xl"
            src="https://images.pexels.com/photos/20500268/pexels-photo-20500268/free-photo-of-calculator.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className=" flex flex-col gap-2">
            <h4 className=" text-white text-xl font-semibold">
              Calculate your Profits
            </h4>
            <button className=" p-2 font-semibold bg-white rounded-xl">
              Check Now
            </button>
          </div>
        </div>
        <div className="flex-1 flex p-5 bg-gradient-to-br from-red-400  to-red-600 rounded-xl gap-5 items-center">
          <img
            className=" w-[40%] aspect-square object-cover rounded-xl"
            src="https://images.pexels.com/photos/14751274/pexels-photo-14751274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className=" flex flex-col gap-2">
            <h4 className=" text-white text-xl font-semibold">
              Calculate your Profits
            </h4>
            <button className=" p-2 font-semibold bg-white rounded-xl">
              Check Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technicals;
