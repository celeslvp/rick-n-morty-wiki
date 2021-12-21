import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getLocationByID } from "../Services/LocationService";
import "./CharacterPage.css"

function LocationPage(){

    const [location, setLocation] = useState({})
    const {id} = useParams()

    useEffect(
        () => {
            const request = async () => {
                try{
                    const response = await getLocationByID(id)
                    setLocation(response.data)
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
            {console.log(location)}
            <p className="Title">{location.name}</p>
            <p><b className="Description">Type: </b>{location.type}</p>
            <p><b className="Description">Dimension: </b>{location.dimension}</p>
        
            <div>
                <button><Link to={"/location/"+(location.id-1)}>Prev</Link></button>
                <button><Link to={"/location/"+(location.id+1)}>Next</Link></button>
            </div>
        </div>
    )
}

export default LocationPage
