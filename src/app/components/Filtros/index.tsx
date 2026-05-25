import { useState } from "react"


type Nombre ={
    name: string,
    onChange : (name :string) => void
}

type Genero = {
    gender: string;
    onChange: (genero: string) => void
}

type Estado = {
  status: string;
  onChange: (estado: string) => void;
};

export const FiltroEstado = ({ status, onChange }: Estado) => {

  const change = () => {
    if (status === "alive") {
      onChange("dead");
    } else if (status === "dead") {
      onChange("unknown");
    } else {
      onChange("alive");
    }
  };

  return (
    <div>
      <button onClick={change}>{status}</button>
    </div>
  );
};

export const FiltroGenero = ({ gender, onChange }: Genero) => {

  const change = () => {
    if (gender === "male") {
      onChange("female");
    } else if (gender === "female") {
      onChange("genderless");
    } else if (gender === "genderless") {
      onChange("unknown");
    } else {
      onChange("male");
    }
  };

  return (
    <div>
      <button onClick={change}>{gender}</button>
    </div>
  );
};



export const Buscador=({name, onChange}:Nombre) => {


    return (
        <div>
        <input value={name} onChange={(e) => onChange(e.target.value)} placeholder="Buscar por nombre" onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onChange(name)
                    }}}
            />
            <button onClick={() => onChange(name)}>Buscar</button>
        </div>
    )


}


