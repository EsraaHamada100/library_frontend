import axios from 'axios';
import { API_URL, userData } from '../shared/variables';

 const saveSearchTerm = async (searchWord) => {
    const body = {
        user_id: userData.user_id,
        search_word: searchWord,
        search_date: new Date(), 
    }
    try {
        const response = await axios.post(`${API_URL}/search_terms/`, body, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": userData.user_id,
            },
        });
        if (response.status !== 200)  {
            console.log(response.data.message);
        }
    } catch (error) {
        console.log(error.response.data.message);
    }
};

export default saveSearchTerm;