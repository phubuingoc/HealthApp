import React from 'react';
import { FaUtensils, FaCoffee } from 'react-icons/fa';

const categories = [
  { label: 'Morning', icon: <FaUtensils /> },
  { label: 'Lunch', icon: <FaUtensils /> },
  { label: 'Dinner', icon: <FaUtensils /> },
  { label: 'Snack', icon: <FaCoffee /> },
];

const CategoryTabs = () => {
  return (
    <div className="flex justify-center items-center gap-8 py-6">
      {categories?.map((category) => (
        <div className="relative w-36 h-36">
        <div className="absolute inset-0 border-white custom-shape flex flex-col items-center justify-center text-white">
          <div className="text-5xl mb-1">{category.icon}</div>
          <span className="text-xl">{category.label}</span>
        </div>
      </div>
      ))}
      
    </div>
  );
};

export default CategoryTabs;
