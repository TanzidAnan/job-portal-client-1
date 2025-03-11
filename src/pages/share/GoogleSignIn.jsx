import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext/AuthContext';

const GoogleSignIn = () => {
    const { googleSignInUser } = useContext(AuthContext);
    const hendleGoogleSignIn = () => {
        googleSignInUser()
            .then(result => {
                console.log(result.user)
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