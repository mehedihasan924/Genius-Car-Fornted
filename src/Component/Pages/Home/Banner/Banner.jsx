import React from 'react'
import img1 from '../../../../assets/images/banner/1.jpg';
import img2 from '../../../../assets/images/banner/2.jpg';
import img3 from '../../../../assets/images/banner/3.jpg';
import img4 from '../../../../assets/images/banner/4.jpg';
import img5 from '../../../../assets/images/banner/5.jpg';
import './Banner.css'
import BannerItems from './BannerItems';

const bannerData = [
    {
      image: img1,
      prev: 5,
      id: 1,
      next:2
    },
     {
      image: img2,
      prev: 1,
      id: 2,
      next:3
    },
       {
      image: img3,
      prev: 2,
      id: 3,
      next:4
    },
        {
      image: img4,
      prev: 3,
      id: 4,
      next:5
    },
    {
      image: img5,
      prev: 4,
      id: 5,
      next:1
     }
   ]

const Banner = () => {
  return (
  <div>
      <div className="carousel w-full">
        {
          bannerData.map(slider =>
            <BannerItems
              key={slider.id}
              slider={slider}
            >     
          </BannerItems>)
        }
 {/* <div id="slide2" className="carousel-item relative w-full">
    <div className='carousel-img'>
      <img src={img2} className="w-full" />
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
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>  */}

</div>
     </div>
  )
}

export default Banner