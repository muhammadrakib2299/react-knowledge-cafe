import React, { useEffect, useState } from 'react'
import './Blogs.css';

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
    <div>
        <h1>Toltal Blogs: {blogs.length}</h1>
    </div>
  )
}

export default Blogs