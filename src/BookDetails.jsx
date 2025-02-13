const BookDetails = (props) => {
  
  return(
    <section>
      <img src= {props.selectedBook.coverimage} width="200" height="200" />
      <h2>{props.selectedBook.title}</h2>
      <h2>{props.selectedBook.author}</h2>
      <h2>{props.selectedBook.description}</h2>
      <button onClick={()=> {props.setSelectedBook({})}}>Back</button>
    </section>
  )
}

export default BookDetails