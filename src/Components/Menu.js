import { Link } from "react-router-dom";

function Menu(){
    return(
    <div>
        <Link to = "/home">Home </Link>
        <Link to = "/character">Characters </Link>
        <Link to = "/location">Locations </Link>
        <Link to = "/episode">Episodes </Link>
    </div>
    )
}

export default Menu;