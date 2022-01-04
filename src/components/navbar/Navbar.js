import React from 'react';
import {Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import  style  from './Navbar.module.css';


function Navbar() {
    return (
        <header>
          <div>
          <nav class={`navbar navbar-expand-lg  ${style.Headertop}`}>
            <ul className={`navbar-nav ${style.NavbarNav}`}>
                <li className="nav-item"><Link className={`nav-link ${style.Nav_link}`} to="/">HOME </Link></li>
                <li className="nav-item"><Link className={`nav-link ${style.Nav_link}`} to="/">ABOUT </Link></li>
                <li className="nav-item"><Link className={`nav-link ${style.Nav_link}`} to="/">CONTACT US </Link></li>
                {/* <li><Link to="/posts">POSTS</Link></li> */}
              
                
            </ul>
            </nav>
          </div>
            
        </header>
    )
}

export default Navbar
