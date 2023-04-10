import image from '../../assets/images/login_image.png';
import '../../styles/AuthPageImage.css';

const AuthPageImage = () => {
    return (
        <div className="auth-page-image">

            <img src={image} alt="Login " />
        </div>
    );
}

export default AuthPageImage;