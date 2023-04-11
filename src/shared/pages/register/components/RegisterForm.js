import { useState } from "react";
import register from "../../../../utils/register";
import { Link } from "react-router-dom";
import '../styles/RegisterForm.css';

const RegisterForm = ({ openTheSnackbar }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleValidation = () => {
    let formIsValid = true;
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      formIsValid = false;
      setErrorMessage("Please enter a valid email address.");
    } else if (formData.password.length < 8) {
      formIsValid = false;
      setErrorMessage("Password should be at least 8 characters long.");
    } else if (formData.password !== formData.confirmPassword) {
      formIsValid = false;
      setErrorMessage("Passwords do not match.");
    }

    return formIsValid;
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleRegisterClick() {
    setErrorMessage('');
    if (handleValidation()) {
      try {
        await register(formData);
        openTheSnackbar();
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  }

  return (
    <div className="register-form">
      <form>
        <RegisterFormHeader />
        <RegisterFormFields formData={formData} handleChange={handleChange} />
        <RegisterFormError errorMessage={errorMessage} />
        <RegisterFormButton handleRegisterClick={handleRegisterClick} />
        <RegisterFormLoginLink />
      </form>

    </div>
  );
}

const RegisterFormHeader = () => {
  return (
    <h2>Sign Up</h2>
  );
}

const RegisterFormFields = ({ formData, handleChange }) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
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
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
}

const RegisterFormError = ({ errorMessage }) => {
  return (
    errorMessage && <div className="error">{errorMessage}</div>
  );
}

const RegisterFormButton = ({ handleRegisterClick }) => {
  return (
    <button
      id="register-btn"
      type="button"
      onClick={async () => { await handleRegisterClick(); }}
    >
      Register
    </button>
  );
}

const RegisterFormLoginLink = () => {
  return (
    <p>
      Already have an Account ?
      <Link to='/login'>
        Login
      </Link>
    </p>
  );
}

export default RegisterForm;
