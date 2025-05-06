import React from 'react';

export default function Banner() {
  return (
    <div className="relative w-full h-full">
      <img
        src="/images/food_banner.jpg"
        alt="Food"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-white text-center">
          <svg width="180" height="180" className="mx-auto">
            <circle
              cx="90"
              cy="90"
              r="85"
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeDasharray="440"
              strokeDashoffset="45"
              transform="rotate(-90 90 90)"
            />
            <text x="50%" y="50%" textAnchor="middle" fill="white" dy=".3em">
              <tspan fontSize="18">05/21</tspan>
              <tspan fontSize="25" dx="10">75%</tspan>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};
