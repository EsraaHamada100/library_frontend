import axios from "axios";
import { API_URL, userData } from "../../shared/variables";
const getSearchTerms = async () => {
    try {
        const response = await axios(`${API_URL}/search_terms?user_id=${userData.user_id}`, {
            headers: {
                'Authorization': userData.user_id
            }
        });
        const data = response.data;
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export default getSearchTerms;