import { Link } from "react-router-dom";
import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Images/logo.png";
import "./Nav.css";

const Nav = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <div className="header">
      <nav className="navbar">
        <a href='/' className='logo'>
          <h2>IS THAT FRENCH</h2>
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{color: 'black'}} />) : <FaBars size={30} style={{color: 'black'}} />}
       
        </div>
        <ul className={click ? "nav-menu active" : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/reservations">Reservations</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
