import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {

  return (
    <>
    <div>
      <Header></Header>
      <main className='flex p-4 mx-4'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </div>
    </>
  )
}

export default App