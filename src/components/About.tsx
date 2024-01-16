import React from 'react'; 

import './About.css';

function About(): JSX.Element {
  return (
    <>
      <div className='about-container'>
        <div className='about-box'>
            <div className='box'>
                <div className='b1'>
                    <div className='b-text'>
                        <p>ABOUT</p>
                        <h1>Welcome to Our Renergy Company</h1>
                    </div>
                </div>
                <div className='b2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="43" className='sv'  viewBox="0 0 666 640">
                <defs>
                
    
                <style>
                {`.cls-1 {
                fill: #fff;
                fill-rule: evenodd;
                }`}
               </style>
               </defs>
               <path className="cls-1" d="M142.126,165.926L0,0H436.907S648.342,10.535,665.888,229.136c4.387,153.635-108.788,210.7-157.918,234.4C525.517,553.964,542.186,640,542.186,640L260.565,308.148h189.5s55.271-8.34,50.007-65.844c2.194-60.137-25.442-71.111-60.535-71.111S142.126,165.926,142.126,165.926Z" />
               </svg>
                </div>
            </div>
            <div className='about-text'>
                <h1>We provide future of energy</h1>
                <p>Streamer fish California halibut Pacific saury. Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder</p>
                <p>European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin: herring. Moses sole sea snail grouper discus. European eel slender snipe eel. Gulper eel dealfish ocean sunfish rohu yellow-and-black triplefin Atlantic saury swordfish southern</p>
                <p>Streamer fish California halibut Pacific saury. Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default About;
