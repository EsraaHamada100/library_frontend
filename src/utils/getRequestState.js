import axios from 'axios';
import { API_URL } from '../shared/variables';

const getRequestState = async (request) => {
    const body = {
        user_id: request.userId,
        book_id: request.bookId,
    }
    try {
        const response = await axios.get(`${API_URL}/requests?user_id=${request.userId}&&book_id=${request.bookId}`,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": request.userId
            },
        });
        if (response.status === 200) {
            if(response.data[0]){
                return response.data[0].approval_state;
            }
            return null;
        }
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export default getRequestState;
