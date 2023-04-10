import axios from 'axios';
import { API_URL, DEFAULT_HEADER, setUserData } from '../shared/variables';

const checkLogin = async () => {

    try {
        const response = await axios.get(`${API_URL}/users/check-login`,{
            withCredentials: true, // Include cookies with each request

        });
        const jsonResponse = await response.json();
        if (response.status === 200) {
            setUserData(jsonResponse.data);
            return true;
        }
    } catch (error) {
        return false;
    }

}
export default checkLogin;