import instance from "../Config/RickAndMortyAPI"

export function getAllCharacters(){
    return instance.get("character")
}

export function getCharacterByID(id){
    return instance.get("character/"+id)
}