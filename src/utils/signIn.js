import axios from 'axios';
import { API_URL, DEFAULT_HEADER, setUserData } from '../shared/variables';
import { cacheUserData } from './localStorage';
const signIn = async (formData) => {
  const loginData = {
    email: formData.email,
    password: formData.password,
  };
  try {
    const response = await axios.post(`${API_URL}/users/login`, loginData, {
      headers: DEFAULT_HEADER,
    });
    if (response.status === 200) {
      const userData = response.data.data;
      // here we set the user data so we can access it across the app
      setUserData(userData);
      // here we store the user Id in the local storage so that we could 
      // keep him login
      cacheUserData(userData);
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export default signIn;
