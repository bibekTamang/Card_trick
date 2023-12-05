import React, { useEffect, useState } from "react";
const cardImages = {
  AC: import("../assets/AC.svg"),
  AS: import("../assets/AS.svg"),
  AD: import("../assets/AD.svg"),
  AH: import("../assets/AH.svg"),
  KC: import("../assets/KC.svg"),
  KS: import("../assets/KS.svg"),
  KD: import("../assets/KD.svg"),
  KH: import("../assets/KH.svg"),
  QC: import("../assets/QC.svg"),
  QS: import("../assets/QS.svg"),
  QD: import("../assets/QD.svg"),
  QH: import("../assets/QH.svg"),
  JC: import("../assets/JC.svg"),
  JS: import("../assets/JS.svg"),
  JD: import("../assets/JD.svg"),
  JH: import("../assets/JH.svg"),
  TC: import("../assets/TC.svg"),
  TS: import("../assets/TS.svg"),
  TD: import("../assets/TD.svg"),
  TH: import("../assets/TH.svg"),
  "9C": import("../assets/9C.svg"),
  "9S": import("../assets/9S.svg"),
  "9D": import("../assets/9D.svg"),
  "9H": import("../assets/9H.svg"),
  "8C": import("../assets/8C.svg"),
  "8S": import("../assets/8S.svg"),
  "8D": import("../assets/8D.svg"),
  "8H": import("../assets/8H.svg"),
  "7C": import("../assets/7C.svg"),
  "7S": import("../assets/7S.svg"),
  "7D": import("../assets/7D.svg"),
  "7H": import("../assets/7H.svg"),
  "6C": import("../assets/6C.svg"),
  "6S": import("../assets/6S.svg"),
  "6D": import("../assets/6D.svg"),
  "6H": import("../assets/6H.svg"),
  "5C": import("../assets/5C.svg"),
  "5S": import("../assets/5S.svg"),
  "5D": import("../assets/5D.svg"),
  "5H": import("../assets/5H.svg"),
  "4C": import("../assets/4C.svg"),
  "4S": import("../assets/4S.svg"),
  "4D": import("../assets/4D.svg"),
  "4H": import("../assets/4H.svg"),
  "3C": import("../assets/3C.svg"),
  "3S": import("../assets/3S.svg"),
  "3D": import("../assets/3D.svg"),
  "3H": import("../assets/3H.svg"),
  "2C": import("../assets/2C.svg"),
  "2S": import("../assets/2S.svg"),
  "2D": import("../assets/2D.svg"),
  "2H": import("../assets/2H.svg"),
};

export default function Card({ cardName, overlapMargin }) {
  const [cardImage, setCardImage] = useState(null);

  useEffect(() => {
    const loadCardImage = async () => {
      const imageModule = await cardImages[cardName];
      const imageSrc = imageModule.default;
      setCardImage(imageSrc);
    };

    loadCardImage();
  }, [cardName]);
  return (
    <div className={`p-2 ${overlapMargin}`}>
      <img src={cardImage} className="h-44" />
    </div>
  );
}
