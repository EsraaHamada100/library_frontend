import './styles/App.css';
import Header from './shared/components/Header.js';
import Footer from './shared/components/Footer.js'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from 'react-router-dom';

import {  userData, userRoles } from './shared/variables';

function App() {
  return (
    <div className="App">
      {userData? (
        <>
          <Header element1="Books" element2="Requests" element3="Search Terms" />
          <Outlet />
          <Footer />
        </>
      ) :(
        <>
          <Outlet />
        </>
      )}
    </div>
  );
}

export default App;
