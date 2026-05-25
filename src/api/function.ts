import api from "./api";
import type { Character, ResultCharacters } from "@/app/types/types";



export const getCharacters = async (page:number,name:string, gender:string, status: string) =>{
    const data = await api.get<ResultCharacters>(`character/?page=${page}&name=${name}&gender=${gender}&status=${status}`);
    return data.data;

}

export const getCharacter = async (id:number) =>{
    const data = await api.get<Character>(`character/${id}`);
    return data.data;
}

