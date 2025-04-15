import React from "react";
import "../App.css"

function BookCard(props){
    function handleDelete(e){
        e.preventDefault();
        props.deleteBook(props.book.rfid);
    }
    function handleChange(e){
        e.preventDefault()
        props.changeRead(props.book.rfid);
    }
    return(
        <div className="book-box">
            <h1 className="book-title">{props.book.title}</h1>
            <h2 className="book-author">{props.book.author}</h2>
            <h2 className="book-author">{props.book.year}</h2>
            <h2 className="book-author">{props.book.read ? "Read" : "Not Read"}</h2>
            <button className="book-actions-button" onClick={handleDelete}>Delete</button>
            <button className="toggle-read" onClick={handleChange}>Change Read</button>
        </div>
    )
}

export default BookCard;