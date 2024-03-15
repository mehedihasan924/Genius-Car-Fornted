import React from 'react'
import person from '../../../../src/assets/images/about_us/person.jpg';
import parts from '../../../../src/assets/images/about_us/parts.jpg';
const About = () => {
  return (
    <div className="hero my-20  bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
              <div className='relative w-1/2'>
                  <img alt='' src={person} className="w-4/5 rounded-lg shadow-2xl" />
                  <img alt='' src={parts} className="w-3/5 right-5 top-1/2   absolute rounded-lg shadow-2xl" />
              </div>        
              <div className='w-1/2'>
                  <p className='py-2 text-2xl font-semobold text-orange-600'>About Us</p>
                  <h1 className=" py-2 text-5xl font-bold"> We are qualified <br />
                      & of experience <br/>
                  in this field</h1>
                  <p className="py-4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                   <p className="py-3">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default About