import React from "react";
import InitialCardList from "./InitialCardList";

export default function InitialScreen({ cardList, setSecondScreen }) {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <p className="text-2xl pb-10 text-center leading-relaxed text-gray-700">
        This is a magic trick, that will tell the card you think in you mind,
        <br /> pick you card in mind and click on go.
      </p>
      <InitialCardList cardList={cardList} />
      <button
        className="px-8 py-2 font-medium bg-gray-700 text-white rounded-md mt-16 hover:scale-110 transition-all duration-300"
        onClick={() => setSecondScreen(true)}
      >
        Go
      </button>
    </div>
  );
}
