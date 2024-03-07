import React, { useState } from "react";

const NewsCard = ({ img, color, title, description }) => {
  return (
    <div className=" flex bg-emerald-50 items-start gap-5 h-[100%] p-2 rounded-xl">
      <div
        className=" flex-1 aspect-square rounded-full flex justify-center items-center max-w-16 min-w-[40px]"
        style={{ backgroundColor: `${color}` }}
      >
        <img className=" w-[60%]" src={img} alt="" />
      </div>
      <div className=" flex-[6] flex flex-col gap-2">
        <h3 className=" font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const EstimateLine = ({ percentage, color }) => {
  return (
    <div className="  w-[100%] rounded-full flex items-center gap-4 ">
      <div
        className=" h-[10px] rounded-full"
        style={{ width: `${percentage}%`, backgroundColor: `${color}` }}
      ></div>
      <span>{percentage}%</span>
    </div>
  );
};

const Sentiment = ({ events }) => {
  const [cardIndex, setCardIndex] = useState(0);
  const n = events.length;

  const handleLeftClick = () => {
    setCardIndex(cardIndex - 1);
  };

  const handleRightClick = () => {
    setCardIndex(cardIndex + 1);
  };

  return (
    <div className=" bg-white flex flex-col gap-5 p-5  rounded-lg">
      <h2 className=" text-2xl font-semibold">Sentiment</h2>
      <h3 className=" text-lg font-semibold text-zinc-600 flex items-center gap-2">
        Key Events
        <span className="bg-slate-400  text-xs rounded-full h-4 w-4 flex items-center justify-center text-white">
          i
        </span>
      </h3>
      <div className=" relative flex w-[100%] overflow-hidden">
        {cardIndex == 0 ? null : (
          <button
            className=" flex justify-center items-center absolute  bg-white top-[50%] translate-y-[-50%] left-10 rounded-full size-10 shadow-2xl z-10"
            onClick={handleLeftClick}
          >
            <img
              className=" w-[60%]"
              src="assets\images\left-arrow.svg"
              alt=""
            />
          </button>
        )}
        {events.map((event, index) => {
          return (
            <div
              key={index}
              className={` w-[60%] min-w-[200px] rounded-xl pr-8 translate-x-[${
                -100 * cardIndex
              }%]`}
            >
              <NewsCard
                img={event.img}
                title={event.title}
                description={event.description}
                color={event.color}
              />
            </div>
          );
        })}
        {cardIndex == n - 1 ? null : (
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
      <h3 className=" text-lg font-semibold text-zinc-600 flex items-center gap-2">
        Analyst Estimates
        <span className="bg-slate-400  text-xs rounded-full h-4 w-4 flex items-center justify-center text-white">
          i
        </span>
      </h3>
      <div className=" w-[100%] flex gap-10">
        <div className="  flex-[1] flex justify-center items-center">
          <div className=" bg-emerald-100 rounded-full w-[100px] aspect-square text-emerald-600 flex justify-center items-center text-2xl font-semibold">
            76%
          </div>
        </div>

        <div className=" flex-[4] flex flex-col gap-8">
          <div className=" flex items-center gap-3">
            <span>Buy</span>
            <EstimateLine percentage={76} color={"rgb(5,150,105)"} />
          </div>
          <div className=" flex items-center gap-3">
            <span>Hold</span>
            <EstimateLine percentage={8} color={"rgb(199,200,206)"} />
          </div>
          <div className=" flex items-center gap-3">
            <span>Sell</span>
            <EstimateLine percentage={16} color={"rgb(220,38,38)"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
