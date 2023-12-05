import React from "react";
import Card from "./Card";

export default function VerticleCardList({ cardList, onClickColumn, colName }) {
  return (
    <div
      className="flex flex-col p-3 hover:shadow-lg hover:bg-slate-50 rounded-md transition-all duration-200 cursor-pointer"
      onClick={() => onClickColumn(colName)}
    >
      {cardList?.length > 0 &&
        cardList?.map((card, index) => (
          <Card
            key={card}
            cardName={card}
            overlapMargin={` ${index === 0 ? "" : "-mt-32"}`}
          />
        ))}
    </div>
  );
}
