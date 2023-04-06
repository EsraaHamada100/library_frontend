import React, { useState } from 'react';
import './styles/LoginPage.css';
import image from '../../../assets/images/login_image.png';
import { API_URL } from '../../constants.js';
const LoginPage = () => {
  // making the span be like a button
  // const registerBtn = document.getElementById('register-btn');
  // registerBtn.addEventListener('click', () => {
  //   console.log('Register button clicked!');
  // });

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');



  const handleChange = (event) => {
    // Here we get a copy from the data in formData and change
    // only the event value either name or password
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  const handleRegisterClick = () => {
    console.log('Register button clicked!');
  };
  return (
    <div className="container">
      <div className="image">
        <img src={image} alt="Login " />
      </div>
      <div className="form">
        <form>
          <h2>Sign in</h2>
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>
          {/* This will only appear if there is and error message */}
          {errorMessage && <div className="error">{errorMessage}</div>}
          {/* Here I don't use type= submit because that will cause the page to be reloaded */}
          <button 
            id="login-btn" 
            type="button" 
            onClick={async ()=>{await signIn()}}
          >
            Login
          </button>
          <p>
            Don't have an Account ?
            <span id="register-btn" onClick={handleRegisterClick}>
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );

  async function signIn() {
    console.log('we are in login');

    const loginData = {
      email: formData.email,
      password: formData.password,
    };
    console.log(JSON.stringify(loginData));
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData),
    });
    const data = await response.json();
    console.log(data);
    if(response.status != 200){
      setErrorMessage(data.message);
    }
  }
}

export default LoginPage;