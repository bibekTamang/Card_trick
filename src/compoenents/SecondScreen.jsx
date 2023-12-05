import React, { useEffect, useState } from "react";
import VerticleCardList from "./VerticleCardList";
import ShuffleAnimation from "./ShuffleAnimation";
import Result from "./Result";

const MAX_CLICK = 3;

export default function SecondScreen({
  initialCardList,
  columnCardsDeck,
  setColumnCardsDeck,
  onReset,
}) {
  const [noOfClick, setNoOfClick] = useState(1);
  const [isShuffling, setIsShuffling] = useState(false);
  const [resultCard, setResultCard] = useState("");
  const [showResult, setShowResult] = useState(false);

  const setUpCardDeck = (cardList) => {
    const deckColumn = {
      deck1: [],
      deck2: [],
      deck3: [],
    };
    cardList.forEach((card, index) => {
      const targetDeck = index % 3;

      if (targetDeck === 0) {
        deckColumn.deck1.push(card);
      } else if (targetDeck === 1) {
        deckColumn.deck2.push(card);
      } else {
        deckColumn.deck3.push(card);
      }
    });
    return deckColumn;
  };

  function generateSingleArray(middleKey) {
    const keys = Object.keys(columnCardsDeck);
    let firstIndex = 0;
    let lastIndex = 0;
    if (!keys.includes(middleKey)) {
      return null;
    }
    const middleIndex = keys.indexOf(middleKey);
    if (middleIndex === 0) {
      firstIndex = middleIndex + 1;
      lastIndex = middleIndex + 2;
    } else if (middleIndex === 1) {
      firstIndex = middleIndex - 1;
      lastIndex = middleIndex + 1;
    } else {
      firstIndex = middleIndex - 2;
      lastIndex = middleIndex - 1;
    }
    const singleArray = [
      ...columnCardsDeck[keys[firstIndex]],
      ...columnCardsDeck[middleKey],
      ...columnCardsDeck[keys[lastIndex]],
    ];
    return singleArray;
  }
  const onClickColumn = (colName) => {
    if (noOfClick <= MAX_CLICK) {
      setNoOfClick(noOfClick + 1);
      setIsShuffling(true);
      const shuffledDeck = generateSingleArray(colName);
      const columnDeck = setUpCardDeck(shuffledDeck);
      setColumnCardsDeck(columnDeck);
      setTimeout(() => {
        setIsShuffling(false);
        if (noOfClick === MAX_CLICK) {
          const resultcard = columnDeck?.deck2[3];
          setResultCard(resultcard);
          setShowResult(true);
        }
      }, 1500);
    }
  };

  useEffect(() => {
    const deckcolumn = setUpCardDeck(initialCardList);
    setColumnCardsDeck(deckcolumn);
  }, []);
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <p className="text-xl pb-4">
        Choose the column in which you see your card.
      </p>
      {noOfClick === 2 && (
        <span className="text-lg pb-2 font-medium">Again !</span>
      )}
      {noOfClick === 3 && (
        <span className="text-lg pb-2 font-medium">One Last Time !</span>
      )}
      {Object.keys(columnCardsDeck).length > 0 && (
        <div className="flex gap-6 mt-4">
          <VerticleCardList
            cardList={columnCardsDeck?.deck1}
            onClickColumn={onClickColumn}
            colName="deck1"
          />
          <VerticleCardList
            cardList={columnCardsDeck?.deck2}
            onClickColumn={onClickColumn}
            colName="deck2"
          />
          <VerticleCardList
            cardList={columnCardsDeck?.deck3}
            onClickColumn={onClickColumn}
            colName="deck3"
          />
        </div>
      )}
      {isShuffling && <ShuffleAnimation />}
      {showResult && <Result card={resultCard} onReset={onReset} />}
    </div>
  );
}
