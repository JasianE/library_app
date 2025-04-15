import logo from './logo.svg';
import Book from './logic/main';
import BookCard from './components/BookCard';
import './App.css';
import { useState, useEffect } from 'react';
import BookForm from './components/BookForm';

function App() {
  const [books, setBooks] = useState([])
  const [createBook, setCreateBook] = useState(false);

  function addBook(book){
    const myBook = new Book(book[0], book[1], book[2]); //this is a stack
    setBooks([...books, myBook])
  }
  function deleteBook(rfid){
    let newBookArray = [];
    for(let i = 0; i < books.length; i++){
      if(books[i].rfid != rfid){
        newBookArray.push(books[i])
      }
    }
    setBooks(newBookArray);
  }

  function changePage(){
    setCreateBook(false)
  }

  function changeRead(rfid){
    let newBookArray = [];
    for(let i = 0; i < books.length; i++){
      if(books[i].rfid == rfid){
        books[i].changeRead()
      }
      newBookArray.push(books[i])
    }
    setBooks(newBookArray)
  }


  return (
    <div className='container'>
      <h1 className='middle'>Library App</h1>
      {!createBook ?
        <div>
          <div className="book-container">
          {books.map((key) => { //this is a pointer to the object...?
            return <BookCard book={key} deleteBook={deleteBook} changeRead={changeRead}/>
          }) }
          </div>
          <button onClick={(e) => {
          e.preventDefault()
          setCreateBook(true)
        }} className='book-form-button2'>Create New Book</button>
        </div>
          :       
          <BookForm addBook={addBook} changePage ={changePage}/>
      
      }
    </div>
  );
}

export default App;
