import '../../styles/Header.css';
import logo from '../../assets/images/logo.png';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { setUserData } from '../variables';
import { deleteCachedUserData } from '../../utils/auth/localStorage';
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
                    <li><Link to={props.routes[0]} className={location.pathname === props.routes[0]? 'nav1 active' : 'nav1'}>{props.element1}</Link></li>
                    <li><Link to={props.routes[1]} className={location.pathname === props.routes[1] ? 'nav2 active' : 'nav2'}>{props.element2}</Link></li>
                    <li><Link to={props.routes[2]} className={location.pathname === props.routes[2] ? 'nav3 active' : 'nav3'}>{props.element3}</Link></li>
                </ul>
            </nav>
            <button className="logout" onClick={handleLogoutClick}>Logout</button>
        </header>
    );
}

export default Header;

