import React from 'react'
import './Navbar.css'
import {assets} from "../../assets/assets"
import { useState } from 'react'

const Navbar = () => {
    
    const [menu , setMenu] = useState('home');

  return (
    <div className='navbar'>
        <img src={assets.logo} className='logo'/>
        <ul className='navbar-menu'>
            <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
            <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
            <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</li>
            <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>About Us</li>
        </ul>

        <div className="navbar-right">
            <img src={assets.search_icon} className='search-icon-image'/>
            <div className='basket-and-dot'>
                <img src={assets.basket_icon} className='basket-icon-image'/>
                <div className='dot'>.</div>
            </div>
            <button className='sign-in-button'>sign-in</button>
        </div>
    </div>
  )
}

export default Navbar