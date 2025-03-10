import React, { useContext } from 'react';
import registerAnimationData from '../../assets/lottic/register.json'
import Lottie from 'lottie-react';
import AuthContext from '../../Context/AuthContext/AuthContext';

const SignIn = () => {

    const {signInUser} =useContext(AuthContext)

    const hendleSignIn =e =>{
        e.preventDefault();
        const form =e.target;
        const email =form.email.value;
        const password =form.password.value;
        console.log(email,password)
        // password valedation
        // const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;


        signInUser(email,password)
        .then(currentUser =>{
            console.log(currentUser.user)
        })
        .catch(error =>{
            console.log(error.message)
        })

      
    }


    return (
        <div>
            <div className="hero bg-gray-200 min-h-screen rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <Lottie className="ml-11 w-96" animationData={registerAnimationData}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="ml-5 mt-6 text-5xl font-bold">Sign In now!</h1>
                        <form onSubmit={hendleSignIn} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign IN</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;