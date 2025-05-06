import React from "react";
import BlogCard from "./BlogCard";
import { blogCards } from "../../../data/mockBlogCards";

function BlogGrid() {
  return (
    <>
        <div className="grid grid-cols-4 gap-4">
            {blogCards?.map((card, index) => (
                <BlogCard key={index} {...card} />
            ))}
        </div>
        <div className="flex justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded shadow">
            コラムをもっと見る
            </button>
        </div>
    </>
  );
}

export default BlogGrid;
