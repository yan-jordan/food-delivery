import React from 'react'
import './Navbar.css'
import {assets} from "../../assets/assets"
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
    
    const [menu , setMenu] = useState('home');

  return (
    <div className='navbar'>
        <img src={assets.logo} className='logo'/>
        <ul className='navbar-menu'>
            <Link to = '/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
            <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
            <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
            <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>About Us</a>
        </ul>

        <div className="navbar-right">
            <img src={assets.search_icon} className='search-icon-image'/>
            <div className='basket-and-dot'>
                <img src={assets.basket_icon} className='basket-icon-image'/>
                <div className='dot'>.</div>
            </div>
            <button onClick={() => setShowLogin(true)} className='sign-in-button'>sign-in</button>
        </div>
    </div>
  )
}

export default Navbar