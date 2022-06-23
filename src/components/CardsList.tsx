import { useState } from "react";
import iCharacter from "../interfaces/iCharacter";
import iImage from "../interfaces/iImage";
import iName from "../interfaces/iName";
import Card from "./Card";
import Modal from "./Modal";
import WinMessage from "./WinMessage";

interface props {
  easyCharacters: iCharacter[];
  indexes: Array<number>;
}

export default function CardsList({ easyCharacters, indexes }: props) {
  let all = Array<iName | iImage>();
  const [randomCharacter, setRandomCharacters] = useState(all);
  const [clickedItems, setClickedItems] = useState(Array<string>());
  const [showModal, setShowModal] = useState(false);

  easyCharacters.forEach((item) => {
    return all.push({ name: item.name, id: item.id, isMatched: false });
  });
  easyCharacters.map((item) => {
    return all.push({ imageURL: item.imageURL, id: item.id, isMatched: false });
  });

  function onMatch(id: string) {
    const check = clickedItems.includes(id);
    if (!check) {
      setClickedItems((prev) => [...prev, id]);
    }
    if (check) {
      const copy = [...randomCharacter];
      copy.forEach((item) => {
        if (item.id === id) {
          item.isMatched = true;
        }
      });
      setRandomCharacters(copy);
    }
    onFinish();
  }

  function onFinish() {
    const allMatched = randomCharacter.findIndex(
      (item) => item.isMatched === false
    );
    if (allMatched === -1) setShowModal(true);
  }

  return (
    <div className="cards-list-wrapper">
      {indexes.map((index) => (
        <Card item={randomCharacter[index]} key={index} onMatch={onMatch} />
      ))}
      {showModal && (
        <Modal>
          <WinMessage setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
}
