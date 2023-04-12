import axios from "axios";
import { API_URL, userData } from "../shared/variables";
const getSpecificUserRequests = async () => {
    try {
        const response = await axios(`${API_URL}/requests?user_id=${userData.user_id}}`, {headers:{
            'Authorization': userData.user_id
        }});
        const data = response.data;
        return data;
    } catch (error) {
        return [];
    }
}

export default getSpecificUserRequests;