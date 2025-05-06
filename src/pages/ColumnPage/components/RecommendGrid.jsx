import React from "react";
import { recommendItems } from "../../../data/mockRecommendItems";
import RecommendCard from "./RecommendCard";

const RecommendGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-12">
       {recommendItems?.map((item, index) => (
        <RecommendCard key={index} title={item.title} subtitle={item.subtitle} />
      ))}
    </div>
  );
};

export default RecommendGrid;
