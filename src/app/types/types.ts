
export type Character = {
      "id": number,
      "name": string,
      "status": string,
      "species": string
      "gender": string,
      "origin": {
        "name": string,
        "url": string
      },
      "location": {
        "name": string,
        "url": string
      },
      "image": string,
    }


export type Info = {
    "count": number,
    "pages": number,
    "next": string | null,
    "prev": null | string
}

export type ResultCharacters = {
    info: Info,
    results: Character[]
}