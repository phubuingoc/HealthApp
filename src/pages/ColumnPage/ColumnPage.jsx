import React from 'react';
import RecommendCard from './components/RecommendGrid';
import BlogGrid from './components/BlogGrid';
const ColumnPage = () => {
  return (
    <div
      className="container flex flex-col gap-10 py-10"
    >
      <RecommendCard />
      <BlogGrid />
    </div>
  );
};

export default ColumnPage;


