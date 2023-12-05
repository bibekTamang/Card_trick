import React from "react";
import Card from "./Card";

export default function Result({ card, onReset }) {
  return (
    <div className="h-5/6 w-full bg-white absolute top-0 bottom-0 m-auto bg-opacity-90 flex flex-col items-center justify-center">
      <p className="text-2xl pb-6 text-gray-600 font-medium">YOUR CARD</p>
      <Card cardName={card} overlapMargin="" />
      <button
        className="bg-green-800 text-white px-6 py-2 rounded-md hover:scale-110 transition-all duration-200 mt-8"
        onClick={onReset}
      >
        I own you mind !
      </button>
    </div>
  );
}
