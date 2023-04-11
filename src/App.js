import './styles/App.css';
import Header from './shared/components/Header.js';
import Footer from './shared/components/Footer.js'

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import MangeUsers from './admin/MangeUsers';
import UserBooksView from './user/book_page/UserBooksView';
import LoginPage from './shared/pages/login/LoginPage';
import checkLogin from './utils/checkLogIn';
import { setUserData, userData, userRoles } from './shared/variables';
import { useEffect, useState } from 'react';
import { getCachedUserData, getCachedUserId } from './utils/localStorage';
function App() {

  return (
    <div className="App">
      {userData? userData.type == userRoles.user?(
        <>
          <Header element1="Books" element2="Requests" element3="Users" />
          <Outlet />
          <Footer />
        </>
      ) : (
        <>
          
        </>
      ):(
        <>
          <Outlet />
        </>
      )}
    </div>
  );
}

export default App;
