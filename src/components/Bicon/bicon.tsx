import React from 'react';
import '../../index.css';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


import BRAND1 from '../../assets/brand-1.png.png';
import BRAND2 from '../../assets/brand-2.png.png';
import BRAND3 from '../../assets/brand-3.png.png';
import BRAND4 from '../../assets/brand-4.png.png';
import BRAND5 from '../../assets/brand-5.png.png';

const data = [
  {
     avatar: BRAND1,
    id:1, 
},
  { 
    avatar: BRAND2,
    id:2, 
},
  { avatar: BRAND3,
    id:3,
 },
  { avatar: BRAND4, 
id:4,},
  { avatar: BRAND5,
id:5, },
];

const Bicon: React.FC = () => {
 


  return (
    <>
           <Swiper  className='t-card'
                 slidesPerView={1}
                 spaceBetween={10}
                 pagination={{
                   clickable: true,
                 }}
                 breakpoints={{
                   425: {
                     slidesPerView: 1,
                     spaceBetween: 2,
                   },
                   768: {
                     slidesPerView: 2,
                     spaceBetween: 2,
                   },
                   1024: {
                     slidesPerView: 4,
                     spaceBetween: 20,
                   },
                   1440: {
                    slidesPerView: 5,
                    spaceBetween: 2,
                  },
                 }}
                 modules={[Pagination]}
                 
                
                >
                    {data.map(({id,avatar}) =>{
                        return(
                            <SwiperSlide className='bicon-swiper'  key={id}>
                                <img className='brand-img ' src={avatar} alt="" />
                                 
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
    </>
  );
};

export default Bicon;
