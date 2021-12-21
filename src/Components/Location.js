import { Link } from "react-router-dom";
import "./Character.css"

function Location({data}){
    return(
        <div>
            <p className="Title">{data.name}</p>
            <p>Type: {data.type}</p>
            <button><Link to={"/location/"+data.id}>See More</Link></button>
        </div>
    )
} 

export default Location;