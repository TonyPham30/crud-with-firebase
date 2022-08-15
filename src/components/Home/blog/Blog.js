import React from 'react';
import ListBlog from './ListBlog';
function Blog(blogs) {
    return <div className='w-[80%] my-0 mx-auto mt-[5%] flex w-full flex wrap justify-between'>
        {blogs.blogs.length > 0 ? blogs.blogs.map((blog, index) => {
            return <div key={index}><ListBlog blog={blog} /></div>
        }) : <div>Không có blog nào</div>}
    </div>
}
export default Blog