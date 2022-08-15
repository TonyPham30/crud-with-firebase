import React, { useState } from 'react';
import ListBlog from './ListBlog';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { auth } from '../../../services/firebase.config';
import axios from "axios"
import { apiBase } from '../../../api';
function Blog(blogs) {
    const userCurrent = auth.currentUser ? auth.currentUser.multiFactor.user : null;
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const handleCreateBlog = () => {
        axios.post(`${apiBase}/create-blog`, {
            title,
            content,
            userName: userCurrent ? userCurrent.displayName : null
        }).then(res => {
            alert("create blog success")
            window.location.reload()
        }).catch(err => {
            alert("create blog false")
        })
    }
    return (<div>
        <div className='w-[80%] my-0 mx-auto'>
            <h2 className='text-[#333] font-bold my-[20px]'>
                Create new Blog
            </h2>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { width: '25ch', margin: "0px 20px 0px 0px" },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(e) => setTitle(e.target.value)} />
                <TextField id="outlined-basic" label="Content" variant="outlined" onChange={(e) => setContent(e.target.value)} />
            </Box>
            <div className='mt-[10px]'>
                <Button variant="contained" onClick={() => handleCreateBlog()}>Create Blog</Button>
            </div>
        </div>

        <div className='w-[80%] my-0 mx-auto mt-[5%] flex w-full flex wrap justify-between'>
            {blogs.blogs.length > 0 ? blogs.blogs.map((blog, index) => {
                return <div key={index}><ListBlog blog={blog} /></div>
            }) : <div>Không có blog nào</div>}
        </div>
    </div>)
}
export default Blog