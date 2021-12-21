import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from './Pages/NotFound';
import CharacterPage from './Pages/CharacterPage';
import LocationPage from './Pages/LocationPage';
import EpisodePage from './Pages/EpisodePage';
import Characters from './Pages/Characters';
import Locations from './Pages/Locations';
import Episodes from './Pages/Episodes';
import Menu from './Components/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Routes>
          <Route path = "/" element = {<Navigate to = "/home"/>} />
          <Route path = "/home" element = {<Home/>} />
          <Route path = "/character" element = {<Characters/>} />
          <Route path = "/character/:id" element = {<CharacterPage/>} />
          <Route path = "/location" element = {<Locations/>} />
          <Route path = "/location/:id" element = {<LocationPage/>} />
          <Route path = "/episode" element = {<Episodes/>} />
          <Route path = "/episode/:id" element = {<EpisodePage/>} />
          <Route path = "*" element = {<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
