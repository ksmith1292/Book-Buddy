
import BookList from "./BookList.jsx";
import BookDetails from "./BookDetails.jsx";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [selectedBook, setSelectedBook] = useState({

  })

  return (
    <>
    
      <h1>Book Buddy</h1>

      {
        selectedBook.id ?
        <BookDetails selectedBook={selectedBook} setSelectedBook={setSelectedBook}/>:
        <BookList setSelectedBook={setSelectedBook}/>
      }

     
    </>
  )
}

export default App
