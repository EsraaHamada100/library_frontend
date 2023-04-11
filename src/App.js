import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './shared/Header.js';
import Footer from './shared/Footer.js'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
// import UserBooksView from './pages/UserBooksView';
import MangeUsers from './admin/MangeUsers';
import UserBooksView from './user/book_page/UserBooksView';
import CreatUser from './admin/CreatUser';
import UpdateUser from './admin/UpdateUser';
function App() {
  return false?(
    <div className="App">
      <Header element1="Books" element2="Orders" element3="Search terms" />
      <UserBooksView />
      <Footer/>
    </div>
  ): (
    <div className="App">
      <Header element1="Books" element2="Requests" element3="Users" />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MangeUsers/>}></Route>
        <Route path='/creat' element={<CreatUser/>}></Route>
        <Route path='/update/:id' element={<UpdateUser/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
