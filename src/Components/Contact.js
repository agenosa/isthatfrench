import React from 'react'
import './Contact.css'
import {FaFacebookSquare, FaInstagramSquare} from 'react-icons/fa'

import opentable from '../Images/opentable.png'; 

const Contact = () => {
    return(
        <div className='contact' id='contact'>
            <div className="container">
                
      <div className="col-1">
        
        <ul>
            <li>Address: 45 Blood Alley Square, Vancouver, BC V5B 0C4</li>
            <li>
                <b>Monday:</b> 5pm-11pm
            </li>
            <li>
                <b>Tuesday:</b> 5pm-11pm
            </li>
            <li>
                <b>Wednesday:</b> Closed
            </li>
            <li>
                <b>Thursday:</b> 5pm-11pm
            </li>
            <li>
                <b>Friday:</b> 5pm-12am
            </li>
            <li>
                <b>Saturday:</b> 5pm-12am
            </li>
            <li>
                <b>Sunday:</b> 5pm-11pm
            </li>
        </ul>
        </div>
        <div className="col-2">
          <h2>Book a reservation</h2>
          <span className="line"></span>
          <a href="https://www.opentable.ca/r/is-that-french-vancouver" target="_blank">
          <img src={opentable} alt='opentable'></img>
          </a>
        </div>
      </div>

        </div>
    )
}

export default Contact