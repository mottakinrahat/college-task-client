import React, { useContext } from 'react';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { AuthContext } from '../authProvider/AuthProviders';

const SocialLogin = () => {
    const {googleSignIn,githubSignIn}=useContext(AuthContext)

    const handleGoogleLogin=() => {
        googleSignIn()
        .then(result=>{
            const googleLogged=result.user;
            console.log(googleLogged);
        })
        .catch(err => {
       console.log(err.message);
        })
    }

    const handleGithub=() => {
        githubSignIn()
        .then(result => {
            const githubLog=result.user;
            console.log(githubLog);
        })
        .then(err=>{
        console.log(err.message);
        })
    }
    return (
        <div>
            <div className='text-center mt-10'>
          <button onClick={handleGoogleLogin} className="btn btn-circle">
           <FaGoogle></FaGoogle>
          </button>
          <button onClick={handleGithub} className="btn btn-circle btn-outline">
            <FaGithub></FaGithub>
          </button>
        </div>   
        </div>
    );
};

export default SocialLogin;