import React from "react";
import Card from "../../../components/Card";
import { recordCards } from "../../../data/mockRecordCards";

const RecordCard = () => {
  return (
    <div className="flex justify-between gap-8 flex-wrap">
      {recordCards?.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          subtitle={card.subtitle}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default RecordCard;
