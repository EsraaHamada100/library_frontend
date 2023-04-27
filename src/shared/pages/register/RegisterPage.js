import React, { useState } from 'react';
import Snackbar from '../../components/SnackBar';
import RegisterForm from './components/RegisterForm';
import FormImage from '../../components/AuthPageImage';
const RegisterPage = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    return (
        <div className="container">
            <RegisterForm openTheSnackbar={()=>setOpenSnackbar(true)} />
            <FormImage />
            <Snackbar
                open={openSnackbar}
                onClose={()=>setOpenSnackbar(false)}
                message="We will approve your account in 24 hours than you can login"
            />

        </div>
    );


}

export default RegisterPage;