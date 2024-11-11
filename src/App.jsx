
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

import { useState } from 'react';

function App() {
  const [bookmarks, setBookmarks] = useState ([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarksAsRead = (id, time) =>{
    const newReadingTime = (readingTime + time);
    setReadingTime(newReadingTime);

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }


  return (
    <>
     
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handleToBookmark={handleToBookmark} handleMarksAsRead={handleMarksAsRead}></Blogs>
    <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
    
    

    </>
  )
}

export default App
