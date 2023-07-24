import React, { useContext, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProviders';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef=useRef();

    const from = location.state?.from?.pathname || '/';

    const { loginUser,resetPassword } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err.message);
            })

        const userLoginData = {
            userEmail: email,
            userPassword: password
        }
        console.log(userLoginData);

    }

    const handleResetPassword=() => {
      const email=emailRef.current.value;
      if(!email){
        alert('please provide you email address');
        return;
      }
        resetPassword(email)
        .then(() => {
            alert('please check your email')
        })
        .catch(err => {
            console.log(err);
        })
      
    }


    return (
        <div>
            <div className="card flex-shrink-0 w-auto px-4 py-10 my-20 mx-40  shadow-2xl bg-base-100">
                <form onSubmit={handleLogin}>
                    <div className="card-body ">

                        <h2 className='text-3xl text-center'>Login Now</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" ref={emailRef} placeholder="your email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="your password" name='password' className="input input-bordered" />

                        </div>
                    </div>

                    <label className="label">
                        <a onClick={handleResetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    <div className="form-control mt-6 text-center">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <h2 className='text-center mt-4'>Don't have and account?<Link to='/register' className='text-blue-400'>Register</Link></h2>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;