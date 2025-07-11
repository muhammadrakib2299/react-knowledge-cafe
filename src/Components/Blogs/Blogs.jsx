import React, { useEffect, useState } from 'react'
import './Blogs.css';
import Blog from '../Blog/Blog';

const Blogs = ({handleAddBookmark}) => {

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
        <div>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddBookmark={handleAddBookmark}
                ></Blog>)
            }
        </div>
    </div>
  )
}

export default Blogs