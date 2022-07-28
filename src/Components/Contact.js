import React from 'react'
import './Contact.css'
import {FaFacebookSquare, FaInstagramSquare} from 'react-icons/fa'

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
          <h2>Contact Us</h2>
          <span className="line"></span>
          
          <button className="button"><FaFacebookSquare/></button>
                    
          <button className="button"><FaInstagramSquare/></button>
                    
          <button className="button">Reserve Now</button>
        </div>
      </div>

        </div>
    )
}

export default Contact