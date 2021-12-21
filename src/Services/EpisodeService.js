import instance from "../Config/RickAndMortyAPI"

export function getAllEpisodes(){
    return instance.get("episode")
}

export function getEpisodeByID(id){
    return instance.get("episode/"+id)
}