import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
          <div className="footer-content-left">
          <img src={assets.logo}/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos exercitationem
           soluta corporis, animi eaque ea quos quod debitis at a perferendis et iusto reprehenderit!
            Molestiae commodi repellat ratione nulla animi!</p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} />
              <img src={assets.linkedin_icon} />
              <img src={assets.twitter_icon} />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+912 333 8888</li>
                <li>contact@tomato.com</li>
              </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">Copy Right reserved for @ tomato.com and all rights reserved.</p>
    </div>
  )
}

export default Footer