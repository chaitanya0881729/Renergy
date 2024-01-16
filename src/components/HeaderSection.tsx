import { Parallax } from "react-parallax";
import promo from "../assets/promo.jpg";
import "./HeaderSection.css";

function Header(){
    return(
        <div className="header">
            <Parallax strength={600} bgImage={promo}>
                <div className="content">
                    <div className="text-content">
                        <b>Business Hand in Hand</b> With new Technology
                    </div>
                </div>
            </Parallax>
        </div>

        
    );
}


export default Header;