import { useState, useEffect } from "react";

const BookList = (props) => {
    const [allBooks, setAllBooks] = useState([]);
  
    useEffect (() => {
    const getBooks = async() => {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books')
      const retrievedBooks = await response.json()
      setAllBooks(retrievedBooks.books)
      
  
    }
    getBooks()
  
    }, [])
  
  return (
    <>
    {
      allBooks.map((singleBook) => {


        return (
          <section key={singleBook.id} onClick = {() => {props.setSelectedBook(singleBook)}} >
            <h2>{singleBook.title}</h2>
            <img src= {singleBook.coverimage} width="200" height="200" />
          </section>
        )
      })

    }
    </>
  )
}

export default BookList