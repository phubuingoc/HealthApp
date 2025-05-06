import React from 'react';
import BodyRecordChart from './components/BodyRecordChart';
import RecordCard from './components/RecordCard';
import DiaryList from './components/DiaryList';
import ExerciseList from './components/ExerciseList';

const MyRecord = () => {
  return (
    <div
      className="container flex flex-col gap-10 py-10"
    >
      <RecordCard />
      <BodyRecordChart />
      <ExerciseList />
      <DiaryList />
    </div>
  );
};

export default MyRecord;


