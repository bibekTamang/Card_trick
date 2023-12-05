import React from "react";
import Card from "./Card";

export default function InitialCardList({ cardList }) {
  return (
    <div className="flex flex-wrap justify-center w-2/4">
      {cardList?.length > 0 &&
        cardList?.map((card) => (
          <Card key={card} cardName={card} overlapMargin="-ml-12" />
        ))}
    </div>
  );
}
