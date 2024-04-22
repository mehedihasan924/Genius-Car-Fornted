/* eslint-disable no-undef */
import { connectAuthEmulator } from 'firebase/auth';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Checkout = () => {
  const { _id ,title, price } = useLoaderData();
  // const { user } = useContext(AuthContext);
  
  const handelPlaceOrder = event => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.fristName.value} ${form.lastName.value}`;
    const email = form.email.value;       // user?.email || 'unregister';
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message
    }
    // if (phone.length > 10) {
    //   alert("Phone Number Should be 10 characters or longer")
    // }
    // else {      
    // }
    
     fetch("http://localhost:4000/orders",
    {  method: "POST",
      headers: {
       "Content-Type": "application/json"
      },
      body: JSON.stringify(order),
    }
      )
      .then(res => res.json())
       .then(data => {
          console.log(data)
          if (data.acknowledged) {
            alert("User Added Successfully")
            event.target.reset()
          }
         })
  }
  return (
    <div>  
      <form className='my-12 text-center' onSubmit={handelPlaceOrder}>
        <h2 className='text-4xl'> You are about order: {title}</h2>
        <h3>Price: ${price}</h3>
        <div className='grid my-5 pt-10 grid-cols-1 lg:grid-cols-2 gap-5 '>
          <input name="fristName" type="text" placeholder="Frist Name" className="input input-bordered input-primary w-full " />
          <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered input-primary w-full " />
          <input name="phone" type="tel" placeholder="Your Phone"  className="input input-bordered input-primary w-full " />
          <input name="email" type="email" placeholder="Your Email" className="input input-bordered input-primary w-full " />
        </div>
      <textarea  name="message"  className="textarea textarea-primary h-24 w-full" placeholder="Your Message"></textarea>
      <input className='btn btn-secondary mt-5' type="submit"  value="Place Your Order"/>
      </form>
    </div>
  )
}
export default Checkout
