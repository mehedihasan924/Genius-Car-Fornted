/* eslint-disable react/prop-types */
import React from 'react'

const BannerItems = ({slider}) => {
    const {image , id, prev, next} = slider;
  return (
   <div id={`slide${id}`} className="carousel-item relative w-full">
    <div className='carousel-img'>
      <img src={image} className="w-full rounded-xl " />
    </div>
    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2  left-24 
      top-1/4 ">
        <h1 className='text-6xl font-bold text-white'>
            Affordable <br />
            Price for Car <br />
            Servicing
        </h1>
    </div>
    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 w-2/5 left-24  top-1/2">
            <p className='text-white text-xl'>There are many variations of passages of available,But the Majority Have suffered Alterration in Some Form </p>
                  </div>
       <div className="absolute flex justify-start gap-2 transform -translate-y-1/2 w-2/5 left-24  top-3/4">
            <button className="btn btn-active btn-primary">Primary</button>
            <button className="btn btn-outline btn-secondary">Secondary</button>
     </div>               
    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-24  right-5 bottom-0">
      <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle">❯</a>
    </div>
  </div> 
  )
}

export default BannerItems