
const BookCard = ({book})=>{
    return (
        <div className="book">
            <div>
                <p>{book.publication_date}</p>
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