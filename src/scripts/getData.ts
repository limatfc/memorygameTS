interface characterInfo {
  name: string;
  alternate_names: [];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: Date;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: object;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: [];
  alive: boolean;
  image: string;
}

export default async function getData() {
  const response = await fetch("http://localhost:4000/characters");
  const data = await response.json();
  const charactersWithPicture = data.filter(
    (item: characterInfo) => item.image !== ""
  );

  const filteredNameAndImage = charactersWithPicture.map(
    (item: characterInfo) => {
      return { name: item.name, imageURL: item.image, id: item.actor };
    }
  );
  return filteredNameAndImage;
}
