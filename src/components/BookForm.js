import React, {useState} from "react";
import "../App.css"

function BookForm(props){
    const [title, setTitle] = useState('');
    const [pubYear, setPubYear] = useState('');
    const [author, setAuthor] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log(pubYear)
        const data = [title, pubYear, author]
        props.addBook(data);
        setTitle('');
        setPubYear('')
        setAuthor('')
        props.changePage();
    }
    return(
        <div>
            <form className="book-form">
                <label>Title of Book</label>
                <input type='text' value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                <label>Publication Year</label>
                <input type='text' value={pubYear} onChange={(e) => {setPubYear(e.target.value)}}/>
                <label>Author Name</label>
                <input type='text' value={author} onChange={(e) => {setAuthor(e.target.value)}}/>
                <input className= 'book-form-button' type='submit' onClick={handleSubmit}/>
            </form>
        </div>
    )
}

export default BookForm;