import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = blog =>{
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  }

  return (
    <>
    <div className='max-w-7xl p-4 mx-auto'>
      <Header></Header>
      <main className='flex my-5'>
        <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>
    </div>
    </>
  )
}

export default App