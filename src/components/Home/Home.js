import React, { useEffect, useState } from 'react';
import Navbar from "./Navbar"
import Blog from "./blog/Blog"
import { apiBase } from '../../api';
import axios from "axios"
function Home() {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        axios.get(`${apiBase}`)
        .then(res => {
            console.log(res)
            if(res.data.blogs.length > 0) {
                setBlogs(res.data.blogs)
            }else {
                setBlogs([])
            }
        }).catch(err => {
            console.log(err)
        })
    },[])
    return <div>
        <div>
            <Navbar />
        </div>
        <Blog blogs={blogs}/>
    </div>
}

export default Home