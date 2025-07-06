import React, { useEffect, useState } from 'react'
import './Blogs.css';
import Blog from '../Blog/Blog';

const Blogs = () => {

    // stor the loading data using useState
    const [blogs, setBlogs] = useState([]); 
    
    // Load data 
    useEffect(()=> {
        fetch('Blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    },[]);

  return (
    <div className='md: w-2/3'>
        <h1 className='text-4xl'>Total blogs: {blogs.length}</h1>
        <div className='py-5'>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    </div>
  )
}

export default Blogs