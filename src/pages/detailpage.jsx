import React from 'react'
import { useState , useEffect } from 'react';
 import { useParams} from "react-router-dom"
 import biryani from "../assets/biryani.png"

const Detailpage = () => {

        let  { id } = useParams();
        let  [recipe, setRecipe] = useState({})

        // let fetrecipe = async () =>{
        //     try {
        //         let res = await fetch(`https://dummyjson.com/recipes/${id}`)
        //         res = res.json()
        //         setRecipe(res)
        //     } catch (error) {
        //         console.log(error);
                
        //     }
        // }
    
        useEffect(() => {
            // fetrecipe()
            fetch(`https://dummyjson.com/recipes/${id}`)
                .then(res => res.json())
                .then(res => setRecipe(res)
                );
                
        },[])
    
   
  return (
    <>

<div className='hero-main'>
<div className='hero-para'>
    <h1>Welcome to <span className='hero-span'>CrispyTales</span>_Details </h1>
   
<h1>Delicious recipes made easy - cook, savor, and share the love</h1>
<button type="button" className="btn btn-warning">Read More ⇒ </button>
</div>

<img src={biryani} alt="biryani" className='biryani' />

 </div>

    <div className="detail-main">

<h1 className='text-center text-warning pb-5'>Recipe Detail </h1>
      <div className="recipe-body">
                <img  src={recipe?.image} alt="" />
                <div className="recipe-inner mb-0">
                    <h1>{recipe?.name}</h1>
                    <ul>
                            <li>`{recipe?.ingredients}`<br/> ,</li>
                    </ul>
                    <p>{recipe?.instructions}</p>
                </div>
        </div>

        </div>
    </>
  )
}

export default Detailpage