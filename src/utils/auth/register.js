import axios from 'axios';
import { API_URL, DEFAULT_HEADER, userRoles } from '../../shared/variables';

const register = async (formData) => {
  const registerData = {
    'name': formData.name,
    'email': formData.email,
    'password': formData.password,
    'phone': formData.phone,
    'type': formData.type || userRoles.user,
    'active': formData.active || 0,
  };
  try {
    const response = await axios.post(`${API_URL}/users/`, registerData, {
      headers: DEFAULT_HEADER,
    });
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export default register;
