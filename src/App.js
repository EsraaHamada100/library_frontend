import './styles/App.css';
<<<<<<< HEAD
import Header from './shared/components/Header.js';
import Footer from './shared/components/Footer.js'
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './shared/Header.js';
import Footer from './shared/Footer.js'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
// import UserBooksView from './pages/UserBooksView';
import MangeUsers from './admin/MangeUsers';
>>>>>>> 28a24ae3e913193d7111e634bb1172e9fd40a044
import UserBooksView from './user/book_page/UserBooksView';
import LoginPage from './shared/pages/login/LoginPage';
function App() {
  return false?(
    <div className="App">
      {/* <Header element1="Books" element2="Orders" element3="Search terms" /> */}
      <LoginPage />
      {/* <Footer/> */}
    </div>
  ): (
    <div className="App">
      <Header element1="Books" element2="Requests" element3="Users" />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MangeUsers/>}>
      </Route>
      </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
