
import "../../index.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function Footer(){

    return(
        <>
        
        <div className="footer-box">
            <div className="footer-container container">
                <div className="fb1 col-md-3">
                    <div className="in-f1">
                    <p className="logo">Renergy</p>
                    <div>
                        <a href="#"><FontAwesomeIcon icon="facebook" />1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                    </div>
                    </div>
                </div>
                <div className="fb2 col-md-3">
                    <div className="in-f2">
                        <h4>Contacts</h4>
                        <p>Elliott Ave, Parkville VIC 3052,
Melbourne Canada
Phone: +31 85 964 47 25
Email: r_energy@mail.co</p>
                    </div>
                </div>
                <div className="fb3 col-md-2">
                    <div className="in-f3">
                        <h4>Company and Links</h4>
                        <div className="f-link">
                            <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Case Studios</li>
                            </ul>
                            <ul>
                                <li>Shop</li>
                                <li>Blog</li>
                                <li>Elements</li>
                                <li>Contacts</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="fb4 col-md-3">
                    <div className="in-f4">
                        <h4>Information for Download</h4>
                        <p>Direct link for downloading the file which you can use</p>
                        <a href="#">Download PDF</a>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        </>
    )

}


export default Footer;