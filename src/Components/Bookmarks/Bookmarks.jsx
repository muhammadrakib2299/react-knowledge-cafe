import React from 'react'
import './Bookmarks.css';
import SingleBookMark from '../SingleBookMark/SingleBookMark';

const Bookmarks = ({bookmarks}) => {
  return (
    <div className='md: w-1/3 mt-10 ml-5 bg-gray-200 rounded-3xl py-10 px-5'>
      <h1 className='text-4xl pb-5'>Bookmarks Blogs: {bookmarks.length}</h1>
      {
        bookmarks.map(bookmark => <SingleBookMark key={bookmark.id} bookmark={bookmark}></SingleBookMark>)
      }
    </div>
  )
}

export default Bookmarks