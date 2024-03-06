import React from "react";
import Chart from "../components/Chart";

const Cryptocurrency = ({ coin }) => {
  return (
    <div>
      <Chart coin={coin} />
    </div>
  );
};

export default Cryptocurrency;
