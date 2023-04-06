import '../../styles/Header.css';
import logo from '../../assets/images/logo.png'
const Header = (props) => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="A logo for a library" />
                <h2>Library</h2>
            </div>
            <nav>
                <ul>
                    <li><a href="#">{props.element1}</a></li>
                    <li><a href="#">{props.element2}</a></li>
                    <li><a href="#">{props.element3}</a></li>
                </ul>
            </nav>
            <button className="logout">Logout</button>
        </header>
    );
}

export default Header;

