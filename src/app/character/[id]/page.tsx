'use client'

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { Character } from "@/app/types/types";
import api from "@/api/api";
import CharacterCard from "@/app/components/CharacterCard";
import { getCharacter } from "@/api/function";


const CharacterDetail = () => {

    const params = useParams();
    const id = params.id;
    const [loading, setLoading] = useState<boolean>(false)
    const [character, setCharacter] = useState<Character>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        buscar(Number(id));
    },[id])

    const buscar = async (id: number) => {
        setLoading(true);

        try {
            const character = await getCharacter(id);
            setCharacter(character);

        } catch (error) {
            setError("Error al encontrar el producto");

        }finally{
            setLoading(false);
        }
        
    }

    return(

        <div>
        {loading && <p>Cargando productos ...</p>}
        {error && <p> {error}</p>}
        {!loading && !error && character && (
        <CharacterCard character={character}/>
        )}
        </div>

    )
}

export default CharacterDetail;