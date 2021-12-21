import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCharacterByID } from "../Services/CharacterService";
import { getEpisodeByID } from "../Services/EpisodeService";
import "./CharacterPage.css"

function EpisodePage(){

    const [episode, setEpisode] = useState({})
    const {id} = useParams()
    console.log(id)

    useEffect(
        () => {
            const request = async () => {
                try{
                    const response = await getEpisodeByID(id)
                    setEpisode(response.data)
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
            {console.log(episode)}
            <p className="Title">{episode.name}</p>
            <p><b className="Description">Air date: </b>{episode.air_date}</p>
            <p><b className="Description">Episode: </b>{episode.episode}</p>
            {/* {episode.characters.map(characterUrl => <SmallCharacter url = {characterUrl}/> */}
        
            <div>
                <button><Link to={"/episode/"+(episode.id-1)}>Prev</Link></button>
                <button><Link to={"/episode/"+(episode.id+1)}>Next</Link></button>
            </div>
        </div>
    )
}

export default EpisodePage
