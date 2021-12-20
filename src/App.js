import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import NotFound from './Pages/NotFound';
import CharacterPage from './Pages/CharacterPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Navigate to = "/login"/>} />
          <Route path = "/login" element = {<Login/>} />
          <Route path = "/register" element = {<Register/>} />
          <Route path = "/home" element = {<Home/>} />
          <Route path = "/character/:id" element = {<CharacterPage/>} />
          <Route path = "*" element = {<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
