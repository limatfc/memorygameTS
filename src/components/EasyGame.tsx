import useCharacter from "../store/useCharacter";
import iCharacter from "../interfaces/iCharacter";
import Loading from "./Loading";
import CardsList from "./CardsList";

export default function EasyGame() {
  const { characters } = useCharacter();
  let easyCharacters = Array<iCharacter>();
  const indexes = Array<number>();

  if (characters.length === 0) return <Loading />;

  do {
    const index = Math.floor(Math.random() * characters.length);
    if (easyCharacters.length === 0) {
      easyCharacters.push(characters[index]);
    } else if (easyCharacters.length > 0) {
      const check = easyCharacters.find(
        (item) => item.name === characters[index].name
      );
      if (!check) {
        easyCharacters.push(characters[index]);
      }
    }
  } while (easyCharacters.length < 10);

  do {
    const randomIndex = Math.floor(Math.random() * 20);
    if (indexes.length === 0) {
      indexes.push(randomIndex);
    } else if (indexes.length > 0) {
      const check = indexes.includes(randomIndex);
      if (!check) {
        indexes.push(randomIndex);
      }
    }
  } while (indexes.length < 20);

  return (
    <div>
      <p>
        Yay, you have chosen the easy mode. It's definetely a great place to
        start. So, let's?
      </p>
      <CardsList easyCharacters={easyCharacters} indexes={indexes} />
    </div>
  );
}
