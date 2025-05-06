import React from 'react';
import HeroSection from './components/HeroSection';
import CategoryTabs from './components/CategoryTabs';
import FoodCard from './components/FoodCard';

const TopPage = () => {
  return (
    <>
      <HeroSection />
      <CategoryTabs />
      <FoodCard />
    </>
  );
};

export default TopPage;
