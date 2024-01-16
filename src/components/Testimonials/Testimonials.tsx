//import React from 'react'

import '../../index.css';

import { Data } from "./Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';



export const Testimonials = () => {
  return (
    <>
    <section className='section-testimonials'>
    <section className='testimonials-container container'>
        <div className='testimonials-box'>
            <div className='tb1'>
                <div className='tb1-text'>
                    <p>PARTNERS</p>
                    <h1>. <span>Renergy</span> Brand</h1>
                </div>
            </div>
            <div className='tb2'>
                <Swiper  className='t-card'
                 slidesPerView={1}
                 spaceBetween={10}
                 pagination={{
                   clickable: true,
                 }}
                 breakpoints={{
                   425: {
                     slidesPerView: 1,
                     spaceBetween: 20,
                   },
                   768: {
                     slidesPerView: 2,
                     spaceBetween: 40,
                   },
                   1024: {
                     slidesPerView: 2,
                     spaceBetween: 10,
                   },
                   1440: {
                    slidesPerView:3,
                    spaceBetween: 10,
                  },
                 }}
                 modules={[Pagination]}
                 


                
                >
                    {Data.map(({id,image,title, description}) =>{
                        return(
                            <SwiperSlide  key={id}>
                                 <img className='test-img' src={image} alt="" />
                                <div className='testimonial-card'>
                                <h3 className='test-name'>{title}</h3>
                                <p className='test-des'>{description}</p>
                                </div>
                               
                               
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    </section>
    </section>

    </>
  )
}


export default Testimonials;
