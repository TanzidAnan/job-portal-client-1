import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContext';
import logoImg from '../../../src/assets/logo/fav-icon.png'

const Navber = () => {


  const { user, signOutUser } = useContext(AuthContext);

  const hendleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log('successfull Sign out')
      })
      .catch(error => {
        console.log("no Log out ", error)
      })
  }

  const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/myApplication'>MY Application</NavLink></li>
    <li><NavLink to='/addJob'>Add A Job</NavLink></li>
  </>
  return (
    <div>
      <div className="navbar bg-base-100 mb-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl p-4">
            <img className='w-11' src={logoImg} alt="img logo" />
            <h2>job portal</h2>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <>
              <button className='btn bg-red-600' onClick={hendleSignOut}>Log Out</button>
            </> : <>
              <Link className='btn bg-purple-500' to="/register">Register</Link>
              <Link className='btn bg-purple-100 text-black' to='/signin'>
                <button>Sign In</button>
              </Link>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Navber;