import { Link } from "react-router-dom";
import "./Character.css"

function Episode({data}){
    return(
        <div>
            <p className="Title">{data.name}</p>
            <p>Episode: {data.episode}</p>
            <button><Link to={"/episode/"+data.id}>See More</Link></button>
        </div>
    )
} 

export default Episode;