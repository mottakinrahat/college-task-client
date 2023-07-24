
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import { AuthContext } from '../authProvider/AuthProviders';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext)

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;

        updateUserProfile(name, image);

        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'User Created Successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      })
      .catch((err) => {
        console.log(err.message);
      });
    const userRegisterData = {
      name: name,
      email: email,
      userEmail: email,
      userPassword: password,
    };
    console.log(userRegisterData);
  };


  return (
    <div>
      <div className="card flex-shrink-0 w-auto px-4 py-10 my-20 mx-40  shadow-2xl bg-base-100">
        <form onSubmit={handleRegister}>
          <div className="card-body ">
            <h2 className="text-3xl text-center">Sign Up Now</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="your name" name="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input type="text" placeholder="your image url" name="image" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="your email" name="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="your password" name="password" className="input input-bordered" />
            </div>
          </div>

          <div className="form-control mt-6 text-center">
            <button className="btn btn-primary">Sign Up</button>
          </div>
          <h2 className="text-center mt-4">
            Already have an account? <Link to="/login" className="text-blue-400">Login</Link>
          </h2>
        </form>
       <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
