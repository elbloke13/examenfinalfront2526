import type { Character } from "@/app/types/types";
import Link from "next/link";




const CharacterCard = ({character} : {character: Character}) => {
    return(
        <div>
            <h1 className="nameinfo">{character.name}</h1>
            <p>Género: {character.gender}</p>
            <p>Estado:{character.status}</p>
            <p>Especie: {character.species}</p>
            <p>Id: {character.id}</p>
            <p>Origen: {character.origin.name}</p>
            <p>Lugar: {character.location.name}</p>
  
        </div>   
    )
};

export default CharacterCard;