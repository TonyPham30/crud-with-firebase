import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import {useNavigate} from "react-router-dom"
import CreateBlog from './components/Home/blog/CreateBlog';
function App() {
  const {redirect, setRedirect} = useState(null)
  const accessToken = localStorage.getItem("access_token")
  const navigate = useNavigate()
  useEffect(() => {
    if(accessToken) {
      navigate('/')
    }else {
      navigate('/login')
    }
  }, [accessToken])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/createBlog" element={<CreateBlog/>} />
      </Routes>
    </div>
  );
}

export default App;
