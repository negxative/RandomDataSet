import './App.css';
import Dashboard from './Components/Dashboard';
import Cards from './Components/Cards';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Users from './Components/Users';
import Nav from './Components/Nav';
import Nav2 from './Components/Nav2';
function App() {
  return (

    <>
      <Router>
        {/* <Nav2/> */}
        <Nav/>
      
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/projects" element={<Cards />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
