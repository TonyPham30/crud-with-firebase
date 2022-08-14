import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import {Redirect} from "react-router-dom"
function App() {
  const {redirect, setRedirect} = useState(null)
  useEffect(() => {
    if(redirect) {
      setRedirect(null)
    }
  }, [redirect])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
