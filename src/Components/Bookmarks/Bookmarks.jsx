import React from 'react'
import './Bookmarks.css';
import SingleBookMark from '../SingleBookMark/SingleBookMark';

const Bookmarks = ({bookmarks, readingTime}) => {
  return (

   <div className='md: w-1/3'>
      <div>
        <h2 className='text-indigo-500 text-lg font-bold bg-indigo-40 border-2 border-indigo-600 rounded-xl p-4 mt-11 mx-4'>Spent time on read: {readingTime} Min</h2>
      </div>
     <div className=' mt-10 ml-5 bg-gray-200  rounded-xl py-10 px-5 border-2 border-indigo-300'>
      <h1 className='text-4xl pb-5'>Bookmarks Blogs: {bookmarks.length}</h1>
      {
        bookmarks.map(bookmark => <SingleBookMark key={bookmark.id} bookmark={bookmark}></SingleBookMark>)
      }
    </div>
   </div>
  )
}

export default Bookmarks