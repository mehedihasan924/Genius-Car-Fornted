import React from 'react'
import img1 from '../../../../assets/images/banner/1.jpg';
import img2 from '../../../../assets/images/banner/2.jpg';
import img3 from '../../../../assets/images/banner/3.jpg';
import img4 from '../../../../assets/images/banner/4.jpg';
import img5 from '../../../../assets/images/banner/5.jpg';
const Banner = () => {
   
  return (
      <div>
          <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full" />
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
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
 <div id="slide4" className="carousel-item relative w-full">
    <img src={img5} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
     </div>
  )
}

export default Banner