import React from 'react'
import { NavLink } from 'react-router-dom'

const inputComponent = () => {
  return (
   <>
   <div className="input-section">

    <h1 className='text-light'>Subscribe Now</h1>


<div className="main-input">
   <div className="input-div">
<input  type="email" placeholder='Email address' />
   </div>

<button>Subscribe </button>
</div>
   </div>
   </>
  )
}

export default inputComponent