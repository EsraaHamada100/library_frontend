import React, { useState, useEffect } from 'react';
import SearchIcon from '../../assets/images/search.svg';
import EmptyResult from './components/EmptyResult';
import BooksList from './components/BooksList';
import './styles/UserBooksView.css';
import {API_URL} from '../../shared/constants.js'
// c032e2d7


const UserBooksView = () => {
    console.log('we entered user books view');
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchBooks = async (bookName) => {
        const response = await fetch(`${API_URL}/books?book_name=${bookName}`);
        const data = await response.json();
        console.log(data);
        setBooks(data);
    }

    useEffect(() => {
        searchBooks('');
    }, []);
    return (
        <div className="books-library">
            <h1>Books Library</h1>
            {/* Search bar */}
            <div className="search">
                <input
                    placeholder="Search for books"
                    value={searchTerm}
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={() =>{
                        searchBooks(searchTerm);
                        console.log('You clicked the search icon');
                    }}
                />
            </div>
            {
                books?.length ? <BooksList books= {books}/> : <EmptyResult />

            }

        </div>
    );
}
export default UserBooksView;