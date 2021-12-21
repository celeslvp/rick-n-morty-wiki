import { useEffect, useState } from "react";
import { getAllCharacters } from "../Services/CharacterService";
import Character from "../Components/Character";

function Characters(){
    const [characters, setCharacters] = useState([])

    useEffect(
        () => {
            const request = async () => {
                try{
                    const response = await getAllCharacters()
                    console.log(response.data.results)
                    setCharacters(response.data.results)
                }catch(e){
                    console.log(e)
                }
            }
            request()
        },
        []
    )

    return(
        <div>
            {characters.map(character=><Character data={character}/>)}
        </div>
    )
}

export default Characters;