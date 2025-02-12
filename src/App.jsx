import { useEffect, useState } from "react"

const App = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect (() => {
  const getBooks = async() => {
    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books')
    const retrievedBooks = await response.json()
    setAllBooks(retrievedBooks.books)
    console.log(retrievedBooks)

  }
  getBooks()

  }, [])

  return (
    <>
      <h1>Book Buddy</h1>

      {
        allBooks.map((singleBook) => {


          return (
            <section key={singleBook.id} onClick = {() => {}} >
              <h2>{singleBook.title}</h2>
              <img src= {singleBook.coverimage} width="200" height="200" />
            </section>
          )
        })

      }
    </>
  )
}

export default App
