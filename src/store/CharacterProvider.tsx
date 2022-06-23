import iCharacter from "../interfaces/iCharacter";
import CharacterContext from "./CharacterContext";
import { useEffect, useState } from "react";
import getData from "../scripts/getData";
import iChildren from "../interfaces/iChildren";
import iContext from "../interfaces/iContext";

export default function CharacterProvider({ children }: iChildren) {
  const [characters, setCharacters] = useState(Array<iCharacter>());

  useEffect(() => {
    async function getCharacters() {
      const response = await getData().catch((err) => {
        console.error(err);
      });
      setCharacters(response);
    }
    getCharacters();
  }, []);

  const value: iContext = { characters };

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}
