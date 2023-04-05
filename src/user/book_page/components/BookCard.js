import '../styles/BookCard.css';
const BookCard = ({book})=>{
    return (
        <div className="book">
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