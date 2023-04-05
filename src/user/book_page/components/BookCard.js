import '../styles/BookCard.css';
const BookCard = ({book})=>{
    return (
        <div className="book">
            <div>
                {/* To get only the date not the time associated with it */}
                <p>{book.publication_date.split('T')[0]}</p>
            </div>
            <div>
                <img 
                    src={book.cover_link}
                    alt={book.book_name} 
                />
            </div>
            <div>
                <span>{book.field}</span>
                <h3>{book.book_name}</h3>
            </div>
        </div>
    );
}

export default BookCard;