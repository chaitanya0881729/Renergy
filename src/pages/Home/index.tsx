import React from 'react';
import '../../index.css';
import About from '../../components/About';
import HeaderSection from '../../components/HeaderSection';
//import Bicon from '../../components/brand';
import Services from '../../components/Services';
import Benefits from '../../components/Benefits';
//import ActiveSlider from '@/components/wecreated/wecreated';
import HomePricing from '@/components/HomePricing';
import Homeblog from '@/components/Blog';
import Testimonials from '@/components/Testimonials/Testimonials';
//import Bicon from '@/components/Bicon/bicon';


function Home(): JSX.Element {
  return (
    <>
      <HeaderSection />
      <About />
      
      <Services/>
      <Benefits/>
    
      <HomePricing/>
      <Homeblog/>
      <Testimonials/>
      
    </>
  );
}

export default Home;
