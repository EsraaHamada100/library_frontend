import { useNavigate } from 'react-router-dom';
import React from "react";
import '../styles/BookCard.css';
const BookCard = ({ book }) => {
    const navigate = useNavigate();
    const handleBookClick = () => {
        navigate(
            '/book-details',
            {
                state: {
                    bookId: book.book_id,
                    bookCover: book.cover_link,
                    title: book.book_name,
                    author: book.author,
                    description: book.description,
                    field: book.field,
                    bookLink: book.pdf_file,
                    chapters: book.chapters,
                }
            }
        );
    }
    return (
        <div className="book"
            onClick={handleBookClick}>
            <div className="date">
                {/* To get only the date not the time associated with it */}
                <p>{book.publication_date.split('T')[0]}</p>
            </div>
            <div className="book-cover">
                <img
                    src={book.cover_link}
                    alt={book.book_name}
                />
            </div>
            <div className="book-info">
                <span>{book.field}</span>
                <h3>{book.book_name}</h3>
            </div>
        </div>
    );
}

export default BookCard;