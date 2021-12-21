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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Navigate to = "/home"/>} />
          <Route path = "/home" element = {<Home/>} />
          <Route path = "/character/:id" element = {<CharacterPage/>} />
          <Route path = "/location/:id" element = {<LocationPage/>} />
          <Route path = "/episode/:id" element = {<EpisodePage/>} />
          <Route path = "*" element = {<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
