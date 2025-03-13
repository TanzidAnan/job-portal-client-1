import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PravateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location =useLocation();
    console.log(location)

    if (loading) {
        return <div>
            <Bars
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
            />
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate to='/signin' state={location?.pathname}></Navigate>
};

export default PravateRoute;