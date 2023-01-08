import React from "react";
import Home from "./Components/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Linktree from "./Components/Linktree";

function App() {
  const navigate = useNavigate();

  const navigateToContrats = () => {
    navigate('/contacts');
  };

  const navigateHome = () => {
    navigate('/');
  };
  return (
    <div className="App">
      <Routes>
       <Route path="/Linktree" element={<Linktree/>}/>
       <Route path="/" element={<Home/>}/>
       </Routes>
    </div>
  );
}

export default App;
