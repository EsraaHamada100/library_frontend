import '../../styles/Header.css';
import logo from '../../assets/images/logo.png';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { setUserData, userData } from '../variables';
import { deleteCachedUserData } from '../../utils/localStorage';
const Header = (props) => {
    // from here I can get the location path and now in which route the website is
    // and according to this I will color the nav elements
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogoutClick = ()=>{
        console.log('you click logout');
        setUserData(null);
        deleteCachedUserData();
        navigate('/login', {replace: true});
        window.location.reload();
        // return <Navigate to="/login" replace />;
    }
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="A logo for a library" />
                <h2>Library</h2>
            </div>
            <nav>
                <ul>
                    <li><Link to="/books" className={location.pathname === '/books' ? 'books-link active' : 'books-link'}>{props.element1}</Link></li>
                    <li><Link to="/requests" className={location.pathname === '/requests' ? 'requests-link active' : 'requests-link'}>{props.element2}</Link></li>
                    <li><Link to="/search-terms" className={location.pathname === '/search-terms' ? 'search-terms-link active' : 'search-terms-link'}>{props.element3}</Link></li>
                </ul>
            </nav>
            <button className="logout" onClick={handleLogoutClick}>Logout</button>
        </header>
    );
}

export default Header;

