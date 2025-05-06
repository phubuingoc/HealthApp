import React from 'react';
import DiaryCard from '../../../components/DiaryCard';
import mockDiaryData from '../../../data/mockDiaryData';

const DiaryList = () => (
  <section>
    <h2 className="text-lg font-bold mb-4">MY DIARY</h2>
    <div className="grid grid-cols-4 gap-4">
      {mockDiaryData?.map((entry) => (
        <DiaryCard
          key={entry.id}
          date={entry.date}
          time={entry.time}
          text={entry.text}
        />
      ))}
    </div>
    <div className="flex justify-center mt-10">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded shadow">
          自分の日記をもっと見る
        </button>
      </div>
  </section>
);

export default DiaryList;