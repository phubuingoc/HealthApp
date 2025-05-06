import { useEffect, useState } from "react";
import { getFoodData } from "../../../api/foodApi";

export default function FoodCard() {
  const [visible, setVisible] = useState(8);
  const [foodData, setFoodData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getFoodData();
        setFoodData(data);
      };
      fetchData();
    }, []);
  const showMore = () => {
    setVisible((prev) => prev + 4);
  };

  const visibleItems = foodData.slice(0, visible);

  return (
    <div
      className="container"
    >
      <div className="grid grid-cols-4 gap-4">
        {visibleItems?.map((item, index) => (
          <div key={index} className="relative mb-4">
            <img src={item.img} alt={item.category} className="w-full h-64 object-cover rounded" />
            <div className="absolute bottom-0 left-0 bg-yellow-400 text-white text-sm px-2 py-1 font-medium">
              {item.date}.{item.category}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visible < foodData.length && (
        <div className="flex justify-center py-6">
          <button
            onClick={showMore}
            className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-md shadow hover:brightness-110"
          >
            記録をもっと見る
          </button>
        </div>
      )}
    </div>
  );
};