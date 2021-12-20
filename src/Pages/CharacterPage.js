import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCharacterByID } from "../Services/CharacterService";
import "./CharacterPage.css"

function CharacterPage(){

    const [character, setCharacter] = useState({})
    const {id} = useParams()

    useEffect(
        () => {
            const request = async () => {
                try{
                    const response = await getCharacterByID(id)
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
            <p><b className="Description">Status: </b>{character.status}</p>
            <p><b className="Description">Species: </b>{character.species}</p>
            <p><b className="Description">Gender: </b>{character.gender}</p>
            <p><b className="Description">Origin Planet: </b>{character?.origin?.name}</p>
            <p><b className="Description">Actual Location: </b>{character?.location?.name}</p>
            <button>Contact</button>
            <div>
                <button><Link to={"/character/"+(character.id-1)}>Prev</Link></button>
                <button><Link to={"/character/"+(character.id+1)}>Next</Link></button>
            </div>
        </div>
    )
}

export default CharacterPage