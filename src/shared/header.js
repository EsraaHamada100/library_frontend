import '../styles/Header.css';
import logo from '../assets/images/logo.png'
const Header = () => {
    return (
        <header>
            <div class="logo">
                <img src={logo} alt="Icon" />
                <h2>Library</h2>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Books</a></li>
                    <li><a href="#">My Orders</a></li>
                    <li><a href="#">My Search</a></li>
                </ul>
            </nav>
            <button class="logout">Logout</button>
        </header>
    );
}

export default Header;

