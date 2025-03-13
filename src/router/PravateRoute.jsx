import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

const PravateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location =useLocation();
    console.log(location)

    if (loading) {
        return <div>
           <BeatLoader />
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate to='/signin' state={location?.pathname}></Navigate>
};

export default PravateRoute;