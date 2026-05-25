"use client";

import { useEffect, useState } from "react";
import { ResultCharacters } from "@/app/types/types";
import api from "@/api/api";
import Paginador from "@/app/components/Paginador";
import CharacterList from "./components/CharacterList";
import { getCharacters } from "@/api/function";
import { Buscador, FiltroEstado, FiltroGenero } from "./components/Filtros";


const CharactersPage = () => {

    const [characters, setCharacters] = useState<ResultCharacters>();
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [name,setName] = useState<string>("")
    const [gender,setGender] = useState<string>("")
    const [status,setStatus] = useState<string>("")


    const fetchCharacters = async () => {

      setLoading(true);

        try{
          const characters = await getCharacters(page,name,gender,status);
          setCharacters(characters);
        }catch(e){
            alert(String(e));
        }finally{
          setLoading(false);
        }
    }

    useEffect(()=>{
        fetchCharacters();
    },[page,name,gender,status]);

    if(loading){
        return(<h1>Loading...</h1>)
    }

    return (
      <div>
        <Buscador name={name} onChange={setName}></Buscador>
        <FiltroGenero gender={gender} onChange={setGender}></FiltroGenero>
        <FiltroEstado status={status} onChange={setStatus}></FiltroEstado>
          <div className="ContainerCharacters">
            {characters && (
              <>
                {characters.results.map((e) => (
                  <CharacterList key={e.id} personaje={e} />
                ))}

                <Paginador next={!!characters?.info.next} prev={!!characters?.info.prev} pages={characters.info.pages} page={page} setPage={(e) => {setPage(e); }} />
              </>
            )}
        </div>
      </div>

    )
};

export default CharactersPage;