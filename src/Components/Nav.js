// import { Link } from "react-router-dom";
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import {AiFillFacebook} from 'react-icons'
import { Link } from 'react-scroll'
import logo from "../Images/logo.png";
import "./Nav.css";

const Nav = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)
  return (
    <div className="header">
      <nav className="navbar">
        <li className="logo">
            <Link to="/">IS THAT FRENCH</Link>
          </li>
        <div className="hamburger" onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{color: 'black'}} />) : <FaBars size={30} style={{color: 'black'}} />}
       
        </div>
        <ul className={click ? "nav-menu active" : 'nav-menu'}>
          <li className="nav-item">
            <Link to="hero" spy={true} smooth={true} offset={-100}  duration={500} onClick={closeMenu} >Home</Link>
          </li>
          <li className="nav-item">
            <Link to="about" spy={true} smooth={true}   offset={-100} duration={500} onClick={closeMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="gallery" spy={true} smooth={true}  offset={-108} duration={500} onClick={closeMenu}>Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="contact" spy={true} smooth={true}   offset={-108} duration={500} onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
