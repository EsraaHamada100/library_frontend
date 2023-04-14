import React from 'react';
import {Navigate} from 'react-router-dom';
import {userData} from '../../shared/variables'
const ProtectedRoute = ({expectedRole, children})=> {
    if(!userData || expectedRole !== userData.type){
        return <Navigate to='/' replace />
    }
    return children;
};

export default ProtectedRoute;