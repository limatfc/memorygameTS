import { useContext } from "react";
import CharacterContext from "./CharacterContext";

export default function useCharacter() {
  const context = useContext(CharacterContext);

  return context;
}
