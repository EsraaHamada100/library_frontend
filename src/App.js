import './styles/App.css';
import Header from './shared/Header.js';
import Footer from './shared/Footer.js'
function App() {
  return true?(
    <div className="App">
      <Header element1="Books" element2="Orders" element3="Search terms" />
      <Footer/>
    </div>
  ): (
    <div className="App">
      <Header element1="Books" element2="Requests" element3="Users" />
      <Footer/>
    </div>
  );
}

export default App;
