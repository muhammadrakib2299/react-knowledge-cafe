import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, SetReadingTime] = useState(0);

  // hanndle Bookmark button fucntion
  const handleAddBookmark = blog =>{
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  }

  // Handle Mark as read button function
  const handleMarkAsRead = time => {
      const newReadingTime = readingTime + time;
      SetReadingTime(newReadingTime);
  }

  return (
    <>
    <div className='max-w-7xl p-4 mx-auto'>
      <Header></Header>
      <main className='flex my-5'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddBookmark={handleAddBookmark}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </main>
    </div>
    </>
  )
}

export default App