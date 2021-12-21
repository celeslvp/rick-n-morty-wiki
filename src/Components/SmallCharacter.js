import { useEffect, useState } from "react";
import { getByURL } from "../Services/GeneralService";
import "./CharacterPage.css"

function SmallCharacter({url}){

    const [character, setCharacter] = useState({})

    useEffect(
        () => {
            const request = async () => {
                try{
                    const response = await getByURL(url)
                    setCharacter(response.data)
                }catch(e){
                    console.log(e)
                }
            }
            request()
        },
        [id]
    )

    return(
        <div>
            {console.log(character)}
            <p className="Title">{character.name}</p>
        </div>
    )
}

export default SmallCharacter