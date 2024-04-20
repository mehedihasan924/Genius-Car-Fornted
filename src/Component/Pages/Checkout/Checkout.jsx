import { connectAuthEmulator } from 'firebase/auth';
import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Checkout = () => {
  const { title, price } = useLoaderData();
  const {user} = useContext(AuthContext);
  return (
    <div>  
      <form className='my-12 text-center'>
        <h2 className='text-4xl'> You are about order: {title}</h2>
        <h3>Price: ${price}</h3>
        <div className='grid my-5 pt-10 grid-cols-1 lg:grid-cols-2 gap-5 '>
          <input type="text" placeholder="Frist Name" className="input input-bordered input-primary w-full " />
          <input type="text" placeholder="Last Name" className="input input-bordered input-primary w-full " />
          <input type="tel" placeholder="Your Phone" defaultValue={user?.email} className="input input-bordered input-primary w-full " />
          <input type="email" placeholder="Your Email" className="input input-bordered input-primary w-full " readOnly />
        </div>
         <textarea className="textarea textarea-primary h-24 w-full" placeholder="Your Message"></textarea>
      <input className='btn btn-secondary mt-5' type="submit"  value="Place Your Order"/>
      </form>
    </div>
  )
}
export default Checkout
