import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './shared/Header.js';
import Footer from './shared/Footer.js'
import UserBooksView from './pages/UserBooksView';
// import MangeUsers from './pages/components/Admin/MangeUsers';
// import UserViewData from './pages/components/Admin/UserViewData';
import MangeUsers from './pages/components/Admin/MangeUsers';
function App() {
  return true?(
    <div className="App">
      <Header element1="Books" element2="Orders" element3="Search terms" />
      <UserBooksView />
      <Footer/>
    </div>
  ): (
    <div className="App">
      <Header element1="Books" element2="Requests" element3="Users" />
      <MangeUsers/>
      <Footer/>
    </div>
  );
}

export default App;
