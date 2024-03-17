import React from 'react'
import img from '../../../assets/images/login/login.svg'
import { Link } from 'react-router-dom'
const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault()
  }
  return (
    <div className="hero my-10 py-20 bg-base-200">
  <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row gap-10">
    <div className="text-center lg:text-left">
      <img className='w-3/4' src={img} alt="" />
    </div>
        <div className="card shrink-0 w-full max-w-sm  shadow-2xl bg-base-100">
         <h1 className="text-5xl text-center font-bold pt-5">Login </h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" /> 
        </div>
          </form>
          <p className='text-center mb-5'> New to Genius Car <Link className='text-orange-600 font-bold' to="/signup"> Sign Up</Link></p>
    </div>
  </div>
</div>
  )
}

export default Login