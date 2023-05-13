import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../shared/SocialLogin/SocialLogin';

const Login = () => {

    const { logIn } = useContext(AuthContext)
    
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

   const handleLogIn = e => {
    e.preventDefault()

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password)

    logIn(email, password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        navigate(from, {replace: true})
    })
    .catch(error => {
        console.log(error)
    })
   }

    return (
        <div className="hero min-h-screen bg-base-200 mb-4">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 me-4">
           <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Login!</h1>
             <form onSubmit={handleLogIn}>

             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value='Login' />
              </div>

             </form>
             <p className='text-center'>New to Cars doctor? please <Link className='text-orange-500' to='/signup'>Sign Up</Link></p>
             <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;