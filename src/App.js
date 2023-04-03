import './styles/App.css';
import Header from './shared/header.js'
function App() {
  return true?(
    <div className="App">
      <Header element1="Books" element2="Orders" element3="Search terms" />
    </div>
  ): (
    <div className="App">
      <Header element1="Books" element2="Requests" element3="Users" />
    </div>
  );
}

export default App;
