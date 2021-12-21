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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Navigate to = "/home"/>} />
          <Route path = "/home" element = {<Home/>} />
          <Route path = "/character/:id" element = {<CharacterPage/>} />
          <Route path = "*" element = {<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
