import React from 'react';
import Banner from './Banner';
import Chart from './Chart';

export default function HeroSection() {
  return (
    <div className="flex h-[50vh]">
      <div className="w-[40%] h-full">
        <Banner />
      </div>
      <div className="w-[60%]  h-full">
        <Chart />
      </div>
    </div>
    
  );
};
