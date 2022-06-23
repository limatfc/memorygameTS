import iName from "../interfaces/iName";
import iImage from "../interfaces/iImage";
import back from "../assets/images/card.png";
import { useState } from "react";

interface props {
  item: iName | iImage;
  onMatch: Function;
}

const isName = (o: any): o is iName => {
  return Boolean(o.name);
};

export default function Card({ item, onMatch }: props) {
  const [isOpen, setIsOpen] = useState(false);

  function onClick() {
    setIsOpen(true);
    onMatch(item.id);
  }

  let label = item.isMatched ? "green" : "black";

  return (
    <div className="card-wrapper">
      {!isOpen && (
        <button onClick={onClick}>
          <img src={back} alt="a caldron" />
        </button>
      )}
      {!isName(item) && isOpen && (
        <div className={`character-pic ${label}`}>
          <img src={item.imageURL} alt="the character`s face" />
        </div>
      )}

      {isName(item) && isOpen && (
        <div className={`character-pic ${label}`}>
          <h3>{item.name}</h3>
        </div>
      )}
    </div>
  );
}
