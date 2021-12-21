import { useEffect, useState } from "react";
import Location from "../Components/Location";
import { getAllLocations } from "../Services/LocationService";

function Locations(){
    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            const request = async () => {
                try{
                    const response = await getAllLocations()
                    console.log(response.data.results)
                    setLocations(response.data.results)
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
            {locations.map(location=><Location data={location}/>)}
        </div>
    )
}

export default Locations;