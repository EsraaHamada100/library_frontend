import './styles/SearchTermsPage.css';
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdDeleteOutline } from 'react-icons/md';
import getSearchTerms from '../../utils/search_terms/getSearchTerms';
import deleteSearchTerm from '../../utils/search_terms/deleteSearchTerm';
import deleteAllSearchTerms from '../../utils/search_terms/deleteAllSearchTerms';
const SearchTermsPage = () => {
    const [searchTermsList, setSearchTermsList] = useState([]);
    const getUserSearchTerms = async () => {
        const data = await getSearchTerms();
        console.log('search terms', data);
        setSearchTermsList(data.reverse());
    }
    useEffect(() => {
        console.log('get user search terms')
        getUserSearchTerms();
    }, []);

    const handleDeleteIconClick = (id) => {
        deleteSearchTerm(id);
        /* delete it from my list also so that I don't have to call
         the API again and again, here I get the data from prvState and filter it
         to remove the deleted book so searchTermsList will have all elements
         except what I have delete, I use this way to make the update happens immediately
        */
        setSearchTermsList(prevState => prevState.filter(item => item.search_id !== id));
    }

    const handleDeleteAllButtonClick = () => {
        if (window.confirm("Are you sure you want to delete all search terms?")) {
            console.log('we delete all search terms');
            deleteAllSearchTerms();
            setSearchTermsList([]);
        }
    }

    return searchTermsList ? (
        <div className='search-terms-page'>
            <button type="button" onClick={handleDeleteAllButtonClick}>
                <RiDeleteBin6Line size={25} />
                <span>Delete All</span>
            </button>

            <table>
                <thead>
                    <tr>
                        <th>Search Date</th>
                        <th>Search Term</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {searchTermsList.map((item, index) => (
                        <tr key={item.search_id} className={index % 2 === 0 ? "even" : "odd"}>
                            <td>{item.search_date.split('T')[0]}</td>
                            <td>{item.search_word}</td>
                            <MdDeleteOutline
                                size={20}
                                className="raw-delete-icon"
                                onClick={() => handleDeleteIconClick(item.search_id)}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ) : (<div>NO REQUESTS FOUND</div>);

}
export default SearchTermsPage;