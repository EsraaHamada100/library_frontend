import React, { useEffect, useState } from 'react';
import '../styles/FilterPopup.css';
import FilterDropdownList from './FilterDropDownList';
import axios from 'axios';
import { API_URL, userData } from '../../../shared/variables';

const FilterPopup = ({ onClose, onSubmit }) => {
    const [author, setAuthor] = useState('');
    const [field, setField] = useState('');
    const [authorOptions, setAuthorOptions] = useState([]);
    const [fieldOptions, setFieldOptions] = useState([]);

    const getFiltersValues = async () => {
        await getAuthors();
        await getFields();

    }
    const getAuthors = async () => {
        const response = await axios(`${API_URL}/books/authors`, {
            headers: {
                'Authorization': userData.user_id
            }
        });
        const data = response.data.authors;
        setAuthorOptions(data);
    }

    const getFields = async () => {
        const response = await axios(`${API_URL}/books/fields`, {
            headers: {
                'Authorization': userData.user_id
            }
        });
        const data = response.data.fields;
        setFieldOptions(data);
    }

    useEffect(() => {
        getFiltersValues();
        console.log(authorOptions, fieldOptions);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(author, field);
    };

    return (
        <div className="filter-popup">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Author:</label>
                    <FilterDropdownList
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)}
                        headValue={'All authors'}
                        options={authorOptions}
                    />
                </div>
                <div className="form-group">
                    <label>Field:</label>
                    <FilterDropdownList
                        value={field}
                        onChange={(event) => setField(event.target.value)}
                        headValue={'All fields'}
                        options={fieldOptions}
                    />
                </div>
                <div className="form-actions">
                    <button type="submit" className="filters-submit-button">
                        Submit
                    </button>
                    <button type="button" className="close-button" onClick={onClose}>
                        Close
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FilterPopup;