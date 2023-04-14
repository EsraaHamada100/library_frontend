import '../styles/BooksList.css'
import BookCard from "./BookCard";
import React from "react";

const BooksList = (props) => {
    return (
        <div className="container">
            {props.books.map((book) => (
                <BookCard book={book} />
            ))}
        </div>
    );
}

export default BooksList;