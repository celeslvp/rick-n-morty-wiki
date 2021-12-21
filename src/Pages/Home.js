import { Link } from "react-router-dom";

function Home(){

    return(
        <div>
            <div><Link to = "/character">Characters</Link></div>
            <div><Link to = "/location">Locations</Link></div>
            <div><Link to = "/episode">Episodes</Link></div>
        </div>
    )
}

export default Home;