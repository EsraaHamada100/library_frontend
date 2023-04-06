import './styles/App.css';
import Header from './shared/components/Header.js';
import Footer from './shared/components/Footer.js'
import UserBooksView from './user/book_page/UserBooksView';
import LoginPage from './shared/pages/login/LoginPage';
function App() {
  return true?(
    <div className="App">
      {/* <Header element1="Books" element2="Orders" element3="Search terms" /> */}
      <LoginPage />
      {/* <Footer/> */}
    </div>
  ): (
    <div className="App">
      <Header element1="Books" element2="Requests" element3="Users" />
      <Footer/>
    </div>
  );
}

export default App;
