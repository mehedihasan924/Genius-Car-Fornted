import React from 'react'
import { Link } from 'react-router-dom'
import modulName from "../../../assets/logo.svg"
const Header = () => {
  const menuItems = <>
    <li className='font-semobold'><Link to="/"> Home</Link></li>
    <li className='font-semobold'><Link to="/login"> Login</Link></li>
  </>
  return (
  <div className="navbar bg-base-100 h-20 mb-12 pt-12 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {menuItems}
      </ul>
    </div>
              <Link className="btn btn-ghost text-xl">
                  <img src={modulName} alt=""/>
              </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn btn-outline btn-warning">Appointment</button>
  </div>
</div>
  )
}

export default Header