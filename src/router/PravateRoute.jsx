import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import { Navigate } from 'react-router-dom';

const PravateRoute = ({children}) => {

    const {user} =useContext(AuthContext)

    if(user){
        return children
    }

    return <Navigate to='/signin'></Navigate>
};

export default PravateRoute;