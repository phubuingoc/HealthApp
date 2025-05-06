import React from 'react';
import mockExerciseData from '../../../data/mockExerciseData';

const ExerciseList = () => {
  return (
    <div className="bg-main-gray-200 text-white p-4 w-full h-[264px]">
      <div className="flex items-center mb-2">
        <h2 className="text-[15px] font-normal w-24">MY EXERCISE</h2>
        <p className="text-[22px]">2021.05.21</p>
      </div>
      
      <div className="grid grid-cols-2 gap-x-10 gap-y-2 overflow-y-auto h-[192px] pr-4 custom-scrollbar">
        {mockExerciseData?.map((item) => (
          <div key={item.id} className="flex justify-between border-b border-main-gray-300 pb-1">
            <div className="flex-1">
              <div className="flex items-start">
                <span className="text-white text-[5px] w-[5px] h-[5px] rounded-full bg-white mt-[6px] mr-2"></span>
                <div>
                  <p className="text-[15px] leading-tight">{item.title}</p>
                  <span className="text-yellow-100 text-primary-300 text-[15px] font-light">{item.calories}</span>
                </div>
              </div>
            </div>
            <span className="text-yellow-100 text-primary-300 text-[18px]">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;