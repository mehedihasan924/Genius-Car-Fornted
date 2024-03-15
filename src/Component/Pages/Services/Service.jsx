import React, { useEffect, useState } from 'react'
import ServicesCard from './ServicesCard';

const Service = () => {
    const [service, setServices] = useState([]);
    useEffect(() => {
        fetch('./public/service.json')
            .then(res => res.json())
        .then(data=> setServices(data))
    },[])
  return (
      <div>
          <div className='text-center'>
              <p className='text-2xl font-bold text-orange-600'> Service</p>
              <h1 className='text-5xl font-semibold '>Our Service Area </h1>
              <p> The majority have suffered alterration in form, by injection .</p>  
          </div>
          <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10'>
             
              {
                  service.map(service=>
                      <ServicesCard key={service._id}
                      service={service}
                      > 
                          
                      </ServicesCard>)  
              }
          </div>
    </div>
  )
}

export default Service