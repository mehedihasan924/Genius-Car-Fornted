import React from 'react'
import img from '../../../assets/images/login/login.svg';
import { Link } from 'react-router-dom'
const SignUp = () => {
     const handleSignup = (event) => {
    event.preventDefault()
  }
  return (
     <div className="hero my-10 py-20 bg-base-200">
  <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row gap-10">
    <div className="text-center lg:text-left">
      <img className='w-3/4' src={img} alt="" />
    </div>
        <div className="card shrink-0 w-full max-w-sm  shadow-2xl bg-base-100">
         <h1 className="text-5xl text-center font-bold pt-5">Sign Up </h1>
    <form onSubmit={handleSignup} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="email" name="name" placeholder="email" className="input input-bordered" required />
        </div>
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
        </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="SignUp" /> 
        </div>
          </form>
          <p className='text-center mb-5'> Already have an account? <Link className='text-orange-600 font-bold' to="/login"> Login</Link></p>
    </div>
  </div>
</div>
  )
}

export default SignUp