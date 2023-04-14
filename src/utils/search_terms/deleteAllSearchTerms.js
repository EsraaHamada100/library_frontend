import axios from "axios";
import { API_URL, userData } from "../../shared/variables";
const deleteAllSearchTerms = async () => {
    try {
        const response = await axios.delete(
            `${API_URL}/search_terms?user_id=${userData.user_id}`, 
            {
                headers:{
                    'Authorization': userData.user_id
                }
            }
        );

    } catch (error) {
        console.log(error);
    }
}

export default deleteAllSearchTerms;