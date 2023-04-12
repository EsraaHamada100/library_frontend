import axios from "axios";
import { API_URL, userData } from "../shared/variables";
const deleteSearchTerm = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/search_terms/${id}`, {headers:{
            'Authorization': userData.user_id
        }});

    } catch (error) {
        console.log(error);
    }
}

export default deleteSearchTerm;