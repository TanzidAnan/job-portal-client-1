import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleSignIn = () => {
    const { googleSignInUser } = useContext(AuthContext);

    const naveget =useNavigate();
    const location =useLocation();
    const form =location.state || '/';

    const hendleGoogleSignIn = () => {
        googleSignInUser()
            .then(result => {
                console.log(result.user);
                naveget(form)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <button onClick={hendleGoogleSignIn}>Google</button>
        </div>
    );
};

export default GoogleSignIn;