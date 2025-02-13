
import BookList from "./BookList.jsx";
import BookDetails from "./BookDetails.jsx";
import Register from "./Register.jsx";
import Login from "./login.jsx";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [selectedBook, setSelectedBook] = useState({

  })

  return (
    <>
    
      <h1>Book Buddy</h1>
      <Register />
      <Login />
      {
        selectedBook.id ?
        
        <BookDetails selectedBook={selectedBook} setSelectedBook={setSelectedBook}/>:
        <BookList setSelectedBook={setSelectedBook}/>
        
      }

     
    </>
  )
}

export default App
