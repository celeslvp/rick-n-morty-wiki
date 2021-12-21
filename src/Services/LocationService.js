import instance from "../Config/RickAndMortyAPI"

export function getAllLocations(){
    return instance.get("location")
}

export function getLocationByID(id){
    return instance.get("location/"+id)
}