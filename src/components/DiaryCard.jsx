import React from 'react';

const DiaryCard = ({ date, time, text }) => (
  <div className="w-full border border-gray-300 p-4 bg-white shadow-sm">
    <p className="text-sm font-bold mb-1">{date}</p>
    <p className="text-xs text-gray-500 mb-3">{time}</p>
    <p className="text-sm text-gray-700 line-clamp-5">{text}</p>
  </div>
);

export default DiaryCard;