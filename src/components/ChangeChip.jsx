import React from "react";

const Arrow = ({ up }) => {
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

const ChangeChip = ({ change }) => {
  return (
    <div
      className={` p-1 rounded-md flex items-center gap-2 text-sm font-semibold ${
        change > 0
          ? " bg-emerald-100 text-emerald-600"
          : "bg-red-100 text-red-600"
      } `}
    >
      <Arrow up={change > 0} />
      {change.toFixed(2)}%
    </div>
  );
};

export default ChangeChip;
