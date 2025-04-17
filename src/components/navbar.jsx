import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from "../assets/react-filnal-logo.png"

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><img src={logo} alt="logo" className='logo-img' /></NavLink>
    <button className="navbar-toggler text-warning bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse mx-auto navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className={({isActive})=> isActive ? "text-warning nav-link": "nav-link text-light nav-bold"} aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=> isActive ? "text-warning nav-link": "nav-link text-light nav-bold"} aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=> isActive ? "text-warning nav-link": "nav-link text-light nav-bold"} aria-current="page" to="/menu">Recipes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=> isActive ? "text-warning nav-link": "nav-link text-light nav-bold"} aria-current="page" to="/services">Services</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}

export default Header