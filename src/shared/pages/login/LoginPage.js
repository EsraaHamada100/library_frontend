import React from 'react';
import './styles/LoginPage.css';
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