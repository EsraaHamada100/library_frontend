import axios from 'axios';
import { API_URL } from '../shared/variables';

 const orderBook = async (request) => {
    const body = {
        user_id: request.userId,
        book_id: request.bookId,
    }
    try {
        const response = await axios.post(`${API_URL}/requests/`, body, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": request.userId
            },
        });
        if (response.status !== 200)  {
            throw new Error(response.data.message);
        }
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export default orderBook;
