import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProviders';
import logo from '../../assets/logo.png'

const Navbar = () => {
    const{user,logOut}=useContext(AuthContext)
  console.log(user);

    const navLink = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to='/college'>college</Link></li>
        <li><Link to='admisson'>admission</Link></li>
        <li><Link to='mycollege'>My college</Link></li>
    </>
    const handleLogout=()=>{
        logOut()
        .then(result=>{
          console.log(result);
        })
        .catch(err=>{
          console.log(err.message);
        })
      }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                  <img src={logo} className='w-20' alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
         
       
                <div className="navbar-end">
                   <Link to='/userprofile'><h2 className='mr-4 cursor-pointer'>{user?.displayName}</h2></Link>
                    <img className='w-10 rounded-full border-2 mr-2' src={user?.photoURL} alt="" />
                   {user? <button onClick={handleLogout} className='btn btn-sm bg-blue-700 text-white'>Logout</button>:<Link to='/login'><button className='btn btn-sm bg-blue-700 text-white'>Login</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;