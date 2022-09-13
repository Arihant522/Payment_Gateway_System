import './App.css';
import React from "react";
import Headers from './components/Headers';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About"
function App() {
  return (
    <div className="App">
      <Router>
        <Headers/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
