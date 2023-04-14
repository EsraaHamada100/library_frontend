import './styles/App.css';
import * as React from 'react';
import Header from './shared/components/Header.js';
import Footer from './shared/components/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from 'react-router-dom';

import {  userData, userRoles } from './shared/variables';

function App() {
  return (
    <div className="App">
      {/* {userData && userData.type === userRoles.user? (
        <>
          <Header element1="Books" element2="Requests" element3="Search Terms" />
          <Outlet />
          <Footer />
        </>
      ) : */}
      (
        <>
          <Header element1="Books" element2="Requests" element3="Users" />
          <Outlet />
          <Footer />
        </>
      ) 
      {/* } */}
    </div>
  );
}

export default App;
