import { createContext } from "react";
import iContext from "../interfaces/iContext";

const CharacterContext = createContext<iContext>({
  characters: [],
});

export default CharacterContext;
