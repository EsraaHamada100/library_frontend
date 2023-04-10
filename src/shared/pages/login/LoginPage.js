import React, { useState } from 'react';
import './styles/LoginPage.css';
import image from '../../../assets/images/login_image.png';
import signIn from '../../../utils/signIn.js';
import { Link } from 'react-router-dom';
import AuthPageImage from '../../components/AuthPageImage';
import LoginForm from './components/LoginForm';

const LoginPage = () => {


  return (
    <div className="container">
      <AuthPageImage />
      <LoginForm />

    </div>
  );


}

export default LoginPage;