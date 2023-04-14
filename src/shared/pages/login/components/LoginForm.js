import { Link, useNavigate } from "react-router-dom";
import signIn from "../../../../utils/auth/signIn";
import { useState } from "react";
import '../styles/LoginForm.css';
const LoginForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleValidation = () => {
        let formIsValid = true;
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(formData.email)) {
            formIsValid = false;
            setErrorMessage("Please enter a valid email address.");
        } else if (formData.password.length < 8) {
            formIsValid = false;
            setErrorMessage("Incorrect password");
        }

        return formIsValid;
    };

    async function handleLoginClick() {
        setErrorMessage('');
        if (handleValidation()) {
            try {
                await signIn(formData);
                navigate('/books', {replace: true});
                // here we reload to change routes to the routes of the specific login user
                window.location.reload();
        } catch (error) {
                setErrorMessage(error.message);
            }
        }
    }

    return (
        <div className="form">
            <form>
                <LoginFormHeader />
                <LoginFormFields formData={formData} handleChange={handleChange} />
                <LoginFormError errorMessage={errorMessage} />
                <LoginFormButton handleLoginClick={handleLoginClick} />
                <LoginFormRegisterLink />
            </form>
        </div>
    );
}

const LoginFormHeader = () => {
    return (
        <h2 >Sign in</h2>
    );
}

const LoginFormFields = ({ formData, handleChange }) => {
    return (
        <>
            <div className="form-group">
                <label htmlFor="email">email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
        </>
    );
}

const LoginFormError = ({ errorMessage }) => {
    return (
        errorMessage && <div className="error">{errorMessage}</div>
    );
}

const LoginFormButton = ({ handleLoginClick }) => {
    return (
        <button
            id="login-btn"
            type="button"
            onClick={async () => { await handleLoginClick() }}
        >
            Login
        </button>
    );
}

const LoginFormRegisterLink = () => {
    return (
        <p>
            Don't have an Account ?
            <Link to='/register'>
                Register
            </Link>
        </p>
    );
}

export default LoginForm;
