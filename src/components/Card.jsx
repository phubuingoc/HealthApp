import React from "react";

const Card = ({ title, subtitle, image }) => {
  return (
    <div className="relative w-72 h-72 border-[24px] border-yellow-400 overflow-hidden group">
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover filter grayscale brightness-50 group-hover:brightness-40 transition"
    />
    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition" />
    <div className="absolute inset-0 flex flex-col items-center justify-center 
                    text-center text-white px-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <span className="mt-2 bg-orange-500 px-4 py-1 text-sm rounded">
        {subtitle}
      </span>
    </div>
  </div>
  );
};

export default Card;
