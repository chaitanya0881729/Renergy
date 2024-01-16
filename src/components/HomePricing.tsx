import './services.css';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';

import workimg from '../assets/device-bg.png'; 


function HomePricing(){
    return(
        <>

        <div className='pric-container'>
            <div className='services-box'>
                <div className='sb1'>
                  <div className='sb1-text'>
                  <p className='p1'>Pricing</p>
                    <h1>. <span>Pricing Plan</span> for you</h1>
                    <p className='p2'>Members are proactive in both undertaking and applying animal welfare scientific research, contributing being a recognised organisation in animal welfare best-practice.</p>
                  </div>
                </div>

                <div className=''>

                </div>

                <div className='pric-box'>
                    <div className='pric-text'>
                        <div className="col-lg-3"><p className='p1'>Solar Panel Installation</p></div>
                        <div className="col-lg-5"><p className='p2'>[ Prepare for Installation Canthigaster rostrata flounder ]</p></div>
                        <div className="col-lg-2"><p className='p3'>$585</p></div>
                        <div className="col-lg-2"> <a className='btn' href="#">Get Started</a></div>
                    </div>
                    <div className='pric-text'>
                        <div className="col-lg-3"><p className='p1'>Windmill Installation</p></div>
                        <div className="col-lg-5"><p className='p2'>[ Prepare for Installation Canthigaster rostrata flounder ]</p></div>
                        <div className="col-lg-2"><p className='p3'>$630</p></div>
                        <div className="col-lg-2"> <a className='btn' href="#">Get Started</a></div>
                    </div>
                    <div className='pric-text'>
                        <div className="col-lg-3"><p className='p1'>Global Energy Network</p></div>
                        <div className="col-lg-5"><p className='p2'>[ Prepare for Installation Canthigaster rostrata flounder ]</p></div>
                        <div className="col-lg-2"><p className='p3'>$720</p></div>
                        <div className="col-lg-2"> <a className='btn' href="#">Get Started</a></div>
                    </div>
                    <div className='pric-text'>
                        <div className="col-lg-3"><p className='p1'>Sun Energy Analitics</p></div>
                        <div className="col-lg-5"><p className='p2'>[ Prepare for Installation Canthigaster rostrata flounder ]</p></div>
                        <div className="col-lg-2"><p className='p3'>$950</p></div>
                        <div className="col-lg-2"> <a className='btn' href="#">Get Started</a></div>
                    </div>
                </div>



                <div className='working-container'>
                    <div className='working-box'>
                        <div className='work-b1'>
                            <img src={workimg} alt="" />
                        </div>
                        <div className='work-b2'>
                            <div className="col-xl-6 offset-xl-5">
                                <div className='work-blog'>

                                    <div className='work-title'>
                                    <h1>. <span>Working</span> Platform</h1>
                                    </div>

                                    <div className='work-title-2'>
                                    <h1>Renergy's Human Resources</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officiis non molestias delectus maiores repudiandae cupiditate fugiat modi odio voluptate libero quidem reiciendis sed, ipsa maxime alias ea ex quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, dolorem? Eum exercitationem quis repudiandae dolorum, illum voluptatum. Rerum minus, provident labore quae in dolorem. Iure ratione rerum nemo facilis veniam!</p>
                                    </div>
                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>











            </div>
        </div>









        </>
    );
}


export default HomePricing;
