import React from 'react'
import './Blog.css';

const Blog = ({blog}) => {
    
    const {title} = blog;

  return (
    <div>
        <h1>Title : {title}</h1>
    </div>
  )
}

export default Blog