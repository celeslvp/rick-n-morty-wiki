import { Link } from "react-router-dom";
import "./Character.css"

function Character({data}){
    return(
        <div>
            <p className="Title">{data.name}</p>
            <p>Status: {data.status}</p>
            <button><Link to={"/character/"+data.id}>See More</Link></button>
        </div>
    )
} 

export default Character;