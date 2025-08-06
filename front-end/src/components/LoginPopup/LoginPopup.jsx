import React, { useState } from 'react'
import './LoginPopup.css'
import {assets} from '../../assets/assets'


const LoginPopup = ({setShowLogin}) => {

    const [currState , setCurrState] = useState("login")

  return (
    <div className='login-popup'>

        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />
            </div>

        <div className='login-popup-inputs'>
             {currState === "login" ? <></> : <input type="name" placeholder='   Your Name' required />}
             <input type="email" placeholder='   Your email' required />
             <input type="password" placeholder='   Password' required/>
        </div>
        <button className='create-account-button'>{currState === "Sign up" ? "Create account" : "Login "}</button>

        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing , i agree to the terms of use and privacy policy.</p>
        </div>

        {currState === "login" 
        ? <p>create a new account?  <span onClick={() => setCurrState("Sign up")}>  Click Here! </span></p>
        : <p>Already have an account?  <span onClick={() => setCurrState("login")}>  Login Here! </span></p>
        }

        </form>

    </div>
  )
}

export default LoginPopup
