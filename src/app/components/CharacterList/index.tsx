import type { Character } from "@/app/types/types";
import Link from "next/link";




const CharacterList = ({personaje} : {personaje: Character}) => {
    return(
            <div className = "charactercardcontainer">
            <Link href={`/character/${personaje.id}`}>
            <img src={personaje.image}/>
            </Link>
            
            <div className="charactercardinfo">
                <h1>{personaje.name}</h1>
                <p>{personaje.status}</p>
                <p>{personaje.gender}</p>
            </div>
        </div>  
    )
};

export default CharacterList;