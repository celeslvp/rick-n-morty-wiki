import { useEffect, useState } from "react";
import Episode from "../Components/Episode";
import { getAllEpisodes } from "../Services/EpisodeService";

function Episodes(){
    const [episodes, setEpisodes] = useState([])

    useEffect(
        () => {
            const request = async () => {
                try{
                    const response = await getAllEpisodes()
                    console.log(response.data.results)
                    setEpisodes(response.data.results)
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
            {episodes.map(episode=><Episode data={episode}/>)}
        </div>
    )
}

export default Episodes;