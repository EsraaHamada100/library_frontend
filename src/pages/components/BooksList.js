import BookCard from "./BookCard";

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