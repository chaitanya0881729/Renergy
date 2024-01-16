import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode } from "swiper/modules";
import { Pagination} from 'swiper/modules';

//import { RxArrowTopRight } from "react-icons/rx";


import '../../index.css';



  
  import SpaceCity1 from "../../assets/gallery-1.jpg";
  import SpaceCity5 from "../../assets/gallery-2.png";
  import SpaceCity6 from "../../assets/gallery-7.jpg.jpg";
  import SpaceCity7 from "../../assets/blog-in-5.jpg.jpg";
  import SpaceCity8 from "../../assets/blog-bg-2.jpg.jpg";

  
  export const ServiceData = [

    {
      title: "Branding",
      backgroundImage: SpaceCity5,
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      
    },
    {
      title: "Design",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      backgroundImage: SpaceCity6,
    },
    {
      title: "Design",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      backgroundImage: SpaceCity1,
    },
    {
      title: "Seo",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      backgroundImage: SpaceCity7,
    },
    {
      title: "Management",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      backgroundImage: SpaceCity5,
    },
    {
      title: "Production",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      backgroundImage: SpaceCity8,
    },
  ];









const ActiveSlider = () => {
  return (
    <div className="we-container">
      <Swiper

      
        breakpoints={{
          425: {
            slidesPerView: 1,
            
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
          1440:{
            slidesPerView: 5,
            spaceBetween: 3,
          }
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="we-swiper"

      >
        {ServiceData.map((item) => (
          <SwiperSlide className="swiperslider" key={item.title}>
            <div className="we-box1">
              <img src={item.backgroundImage} />
              <div>
                <h1>{item.title} </h1>
                
              </div>
              <p>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;