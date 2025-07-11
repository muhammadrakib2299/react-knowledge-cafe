import React from 'react'
import './Blog.css';
import { FaBookmark } from "react-icons/fa";


const Blog = ({blog, handleAddBookmark}) => {
    
    const {title,cover,author,author_img, reading_time, posted_date, hashtags} = blog;

  return (
    <div className='my-10 p-2'>
        <img className='w-full mb-8'  src={cover} alt='' />
        <div className='flex justify-between'>

            <div className='flex mb-5'> 
                <img className='w-14' src={author_img} alt="" />
                <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div className='flex items-start'>
                <span>{reading_time} min read</span>
                <button 
                onClick={() => handleAddBookmark(blog)}
                className='ml-2 text-2xl cursor-pointer'
                > <FaBookmark /></button>

            </div>
        </div>
        <h1 className='text-4xl pb-2'>Title : {title}</h1>
        <p>
            {
                hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hash}</a></span>)
            }
        </p>
        <button className='my-4 cursor-pointerp-4'>Mark as read</button>
    </div>
  )
}


export default Blog