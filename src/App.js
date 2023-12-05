import { useEffect, useState } from "react";
import InitialScreen from "./compoenents/InitialScreen";
import { cardNames } from "./constansts/cardNames";
import SecondScreen from "./compoenents/SecondScreen";

function App() {
  const [initialCardList, setInitialCardList] = useState([]);
  const [isSecondScreenActive, setSecondScreen] = useState(false);
  const [columnCardsDeck, setColumnCardsDeck] = useState({});

  function getRandomUniqueValuesFromArray(numValues) {
    if (numValues > cardNames.length) {
      throw new Error("Cannot select more values than available in the array.");
    }

    const shuffledArray = [...cardNames];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray.slice(0, numValues);
  }

  useEffect(() => {
    const randomCards = getRandomUniqueValuesFromArray(21);
    setInitialCardList(randomCards);
  }, []);

  const onReset = () => {
    setSecondScreen(false);
    const randomCards = getRandomUniqueValuesFromArray(21);
    setInitialCardList(randomCards);
    setColumnCardsDeck({});
  };

  return (
    <div className="h-screen w-full p-8">
      <button
        className="bg-blue-950 text-white px-4 py-2 rounded-md hover:scale-110 transition-all duration-300 text-sm"
        onClick={onReset}
      >
        Reset
      </button>
      {isSecondScreenActive ? (
        <SecondScreen
          initialCardList={initialCardList}
          columnCardsDeck={columnCardsDeck}
          setColumnCardsDeck={setColumnCardsDeck}
          onReset={onReset}
        />
      ) : (
        <InitialScreen
          cardList={initialCardList}
          setSecondScreen={setSecondScreen}
        />
      )}
    </div>
  );
}

export default App;
