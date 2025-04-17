import React from 'react'

import { NavLink } from 'react-router-dom'
const button = ({id}) => {
  return (
 
   <NavLink to={`/recipes/${id}`} className="btn btn-warning fw-medium w-100 card-btn">View Detail</NavLink>

  )
}

export default button