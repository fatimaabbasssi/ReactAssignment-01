import React from 'react'
import { NavLink } from 'react-router-dom'

const pagenotfound = () => {
  return (
    <div className="page-not-wrapper">
    <div className="page-not-box">
      <div className="page-not-circle">404</div>
      <h1 className="page-not-heading">Page Not Found</h1>
      <p className="page-not-message">Oops! It looks like this page doesn’t exist. Let’s get you back home!</p>
      <NavLink className="page-not-btn" to='/home'  >Back Home</NavLink>
    </div>
  </div>
  )
}

export default pagenotfound