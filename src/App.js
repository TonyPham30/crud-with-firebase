import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import {useNavigate} from "react-router-dom"
import CreateBlog from './components/Home/blog/CreateBlog';
import { auth } from './services/firebase.config';
function App() {
  const {redirect, setRedirect} = useState(null)
  const accessToken = localStorage.getItem("access_token")
  const navigate = useNavigate()
  useEffect(() => {
    if(accessToken) {
      navigate('/')
    } else {
      navigate("/login")
    }
  }, [])
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
