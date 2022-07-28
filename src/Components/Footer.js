import { Link } from "react-router-dom";
import {FaFacebookSquare, FaInstagramSquare} from 'react-icons/fa'
import {AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai'
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import './Footer.css'
export default function Footer() {
  return (
    <footer>

    <div className='footer-content'>
      <h3>Is That French</h3>
        <ul className='socials'>
          <li>
            <a href="https://www.facebook.com/IsThatFrench" target="_blank">

            <BsFacebook/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/isthatfrench_winebar/" target="_blank">
          <BsInstagram/>
            </a>
          </li>
          <li>
            <BsLinkedin/>
          </li>
          <li>
            <BsTwitter/>
          </li>
          <li>
            <a href="mailto:someone@example.com">
            <MdEmail/>
            </a>
          </li>
        </ul>
    </div>
    <div className='footer-bottom'>
      <p>&copy;2022 Is That French. designed by <span>HigherStack</span></p>
    </div>
    </footer>
  );
}
