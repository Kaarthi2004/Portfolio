import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
    return(
        <div className="navbar">
            {/* sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <span>Ranga Kaarthi</span>
                <div className="social">
                    <a href="#"><img src="/facebook.png"></img></a>
                    <a href="#"><img src="/instagram.png"></img></a>
                    <a href="#"><img src="/youtube.png"></img></a>
                    <a href="#"><img src="/dribbble.png"></img></a>
                </div>

            </div>
        </div>    

    )
}

export default Navbar;