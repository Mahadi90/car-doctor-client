
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../providers/AuthProvider';

const Signup = () => {

    const { craeteUSer } = useContext(AuthContext)

    const handleSignUP = e => {
        e.preventDefault()
    
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(name, email, password)

       craeteUSer(email, password)
       .then(result => {
        const createdUser = result.user;
        console.log(createdUser)
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
            <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
             <form onSubmit={handleSignUP}>

             <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name='name' className="input input-bordered" />
              </div>
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
                <input className="btn btn-primary" type="submit" value='Sign Up' />
              </div>

             </form>
             <p className='text-center'>Already have an account? please <Link className='text-orange-500' to='/login'>Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;