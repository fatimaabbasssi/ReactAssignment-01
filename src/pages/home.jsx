import React from 'react'

// component
import Poster from '../components/poster'
import Gallery from "../components/gallery";
import InputComponent from '../components/input'
// images
import biryani from "../assets/biryani.png"

// react-dom
import { NavLink } from 'react-router-dom'
const home = () => {
  return (
   <>
    <div className='hero-main'>
<div className='hero-para'>
    <h1>Welcome to <span className='hero-span'>CrispyTales</span> </h1>
   
<h1>Delicious recipes made easy - cook, savor, and share the love</h1>
<button type="button" className="btn btn-warning">Read More ⇒ </button>
</div>

<img src={biryani} alt="biryani" className='biryani' />

 </div>
 <div className='hero-icons'>
 <i className="fa-solid fa-bowl-food h-icons"></i>
 <i className="fa-solid fa-truck h-icons"></i>
 <i className="fa-solid fa-wine-glass-empty h-icons"></i>
 </div>

 {/* card */}

 <h1 className='text-center p-2'>Our top Recipes</h1>

<div className='card-main'>

<div className="card" >
  <img src="https://thumbs.dreamstime.com/b/biryani-chicken-rice-spicy-herbs-spices-served-over-yellow-round-metal-dish-bottom-view-meal-364283427.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Biryani</h5>
     <NavLink to="#" className="btn btn-warning fw-medium w-100 card-btn">🧡</NavLink>
  </div>
</div>


{/* 2 */}

<div className="card" >
  <img src="https://media.istockphoto.com/id/1248489319/photo/tiramisu-cake-with-mint.jpg?s=612x612&w=0&k=20&c=bE6ntOpTO7S8T_Rr39cnNkV_252VUB8-vymkN9WsQRQ=" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Tiramisu Cake</h5>
      <NavLink to="#" className="btn btn-warning fw-medium w-100 card-btn">🧡</NavLink>
  </div>
  </div>
  
{/* 3 */}

<div className="card" >
  <img src="https://media.istockphoto.com/id/1133396172/photo/indian-style-fried-chicken-drumsticks.jpg?s=612x612&w=0&k=20&c=PJPDcmGy1C4JW0KN1UTG85FW2H7oqNQRIx9h9K4WOPk=" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Nihari</h5>
      <NavLink to="#" className="btn btn-warning tex-danger fw-medium w-100 card-btn">🧡</NavLink>
  </div>
</div>
</div>

{/* poster section */}

<Poster/>

{/* question section */}

<h1 className='text-center pt-4'>Explore More</h1>

<div className='extra-detail'>

<div className='box'>
<div className='extra-icons'>
<i className="fa-solid fa-wine-glass-empty"></i>
</div>
    <div className="answer"> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate soluta dolores delectus 
    </div>
</div>
{/* 2 */}

<div className='box'>
<div className='extra-icons'>
<i className="fa-solid fa-bowl-food"></i>
</div>
    <div className="answer"> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate soluta dolores delectus 
    </div>
</div>

{/* 3 */}

<div className='box'>
<div className='extra-icons'>
<i className="fa-solid fa-truck "></i>
</div>
    <div className="answer"> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate soluta dolores delectus 
    </div>
</div>


{/* 4 */}

<div className='box'>
<div className='extra-icons'>
<i className="fa-solid fa-truck "></i>
</div>
    <div className="answer"> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate soluta dolores delectus 
    </div>
</div>

{/* 5*/}

<div className='box'>
<div className='extra-icons'>
<i className="fa-solid fa-wine-glass-empty"></i>
</div>
    <div className="answer"> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate soluta dolores delectus 
    </div>
</div>

{/* 6*/}

<div className='box'>
<div className='extra-icons'>
<i className="fa-solid fa-bowl-food "></i>
</div>
    <div className="answer"> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate soluta dolores delectus 
    </div>
</div>



{/* main-hero closing */}
</div>

{/* Gallery */}

<Gallery/>

{/* input section */}
<InputComponent/>



   </>
  )
}

export default home