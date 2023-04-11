import axios from 'axios';
import { API_URL, DEFAULT_HEADER } from '../shared/variables';

const register = async (formData) => {
  const registerData = {
    name: formData.name,
    email: formData.email,
    password: formData.password,
    phone: formData.phone,
  };
  try {
    const response = await axios.post(`${API_URL}/users/`, registerData, {
      headers: DEFAULT_HEADER,
    });
    if (response.status === 200) {
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export default register;
