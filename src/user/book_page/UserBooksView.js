import React, { useState, useEffect } from 'react';
import SearchIcon from '../../assets/images/search.svg';
import EmptyResult from './components/EmptyResult';
import BooksList from './components/BooksList';
import './styles/UserBooksView.css';
import { API_URL, userData } from '../../shared/variables.js';
import { MdFilterListAlt } from 'react-icons/md';
import axios from 'axios';
import FilterPopup from './components/FilterPopup';
import saveSearchTerm from '../../utils/search_terms/saveSearchTerm';


const UserBooksView = () => {

    console.log('we enter the page');
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [author, setAuthor] = useState('');
    const [field, setField] = useState('');

    // state variable for showing the filter pop-up
    const [showFilter, setShowFilter] = useState(false);
    const searchBooks = async (bookName) => {
        console.log('we are in searchBooks');
        const response = await axios(
            `${API_URL}/books?book_name=${bookName}&&author=${author}&&field=${field}`,
            {
                headers: {
                    'Authorization': userData.user_id
                }
            }

        );
        const data = response.data;
        setBooks(data);
        console.log("data =" , data);

    }

    useEffect(() => {
        searchBooks(searchTerm);
    }, [author, field, searchTerm]);
    return (
        <div className="books-library">
            <h1>Books Library</h1>
            {/* Search bar */}
            <div className="search-and-filter">
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
                        onClick={() => {
                            searchBooks(searchTerm);
                            if (searchTerm !== '') {
                                saveSearchTerm(searchTerm);
                            }
                        }}
                    />

                </div>
                <button
                    className="filter-btn"
                    onClick={() => setShowFilter(true)}
                >
                    <MdFilterListAlt size={30} />
                </button>
            </div>

            {/* Show the filter pop-up if showFilter is true */}
            {showFilter && (
                <FilterPopup
                    onClose={() => setShowFilter(false)}
                    onSubmit={(author, field) => {
                        setAuthor(author);
                        setField(field);
                        // Do something with the selected filters (e.g. fetch books with the selected author and field)
                        console.log('Selected filters:', author, field);
                        setShowFilter(false); // Close the filter pop-up
                    }}
                />
            )}

            {/* {
                books?.length ? <BooksList books={books} /> : <EmptyResult />
            } */}

         </div>
    );
}
export default UserBooksView;