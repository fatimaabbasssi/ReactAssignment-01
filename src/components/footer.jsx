import React from 'react'

import logo from "../assets/react-filnal-logo.png"
import { NavLink } from 'react-router-dom'
const footer = () => {
  return (
   <>
   <div className='footer'>

   <div className="glow-top"></div>
        <div className="container">
            <div className="logo"><img className="logo-footer" src={logo} alt="" /></div>
            <ul className="footer-links">
                <li ><NavLink to="/">Home</NavLink></li>
                <li ><NavLink to="/about">About</NavLink></li>
                <li ><NavLink to="#">Recipes</NavLink></li>
                <li ><NavLink to="#">Services</NavLink></li>
            </ul>
            <div className="social-icons ">
                <a href="#"><i className="fab fa-facebook-f face"></i></a>
                <a href="#"><i className="fab fa-twitter twit"></i></a>
                <a href="#"><i className="fab fa-instagram insta"></i></a>
                <a href="#"><i className="fab fa-linkedin-in face"></i></a>
            </div>
        </div>

        
        <div className="glow-bottom"></div> 

   </div>

   <div className="creater-footer">
    &copy; Created by Fatima Abbasi
   </div>

   </>
  )
}

export default footer