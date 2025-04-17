import React from 'react'
//components
import Poster from '../components/poster'
import Gallery from '../components/gallery'

// images
import biryani from "../assets/biryani.png"
const services = () => {
  return (
    <>
   
    <div className='hero-main'>
 <div className='hero-para'>
     <h1>Welcome to <span className='hero-span'>CrispyTales</span>_Services </h1>
    
 <h2 className='pb-3 pt-3'>Delicious recipes made easy - cook, savor, and share the love</h2>
 <button type="button" className="btn btn-warning">Read More ⇒ </button>
 </div>

 <img src={biryani} alt="biryani" className='biryani' />
  </div>

  <h1 className='text-center text-warning p-3'>Our Services</h1>

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

</div>
  <Poster/>
 

 <Gallery/>
    </>
  )
}

export default services