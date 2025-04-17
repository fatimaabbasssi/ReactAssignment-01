
 import Button from '../components/button'
import { useState , useEffect } from 'react'
import biryani from "../assets/biryani.png"
import InputComponent from '../components/input';
import { useLoaderData } from 'react-router-dom';
const Menu = () => {

  

  // let {recipes } = useLoaderData()
let [recipes , setRecipes] = useState([])

  const fetRecipes = async () => {
    try {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        setRecipes(data.recipes);

    } catch (error) {
        console.log(error);

    }
}

useEffect(() =>{
  fetRecipes()
})

  return (
   <>

<div className='hero-main'>
<div className='hero-para'>
    <h1>Welcome to <span className='hero-span'>CrispyTales</span>_Recipes </h1>
   
<h1>Delicious recipes made easy - cook, savor, and share the love</h1>
<button type="button" className="btn btn-warning">Read More ⇒ </button>
</div>

<img src={biryani} alt="biryani" className='biryani' />

 </div>

 <InputComponent/>

 <div className="recipes">
  <img src="https://img.freepik.com/premium-vector/recipe-book-calligraphy-cover-vector-illustration_155102-287.jpg" alt="" />
 </div>
   <div className="card-main">
{

  recipes.map((recipe , index) =>(

    <div className="card" key={index+recipe.id}>
  <img src={recipe?.image} className="card-img-top" alt={recipe?.name} />
  <div className="card-body">
    <h5 className="card-title">{recipe?.name}</h5>
    <p>{recipe?.discription}</p>
     <Button id={recipe.id}/>
  </div>
</div>
  ))
}
</div>
   </>
  )
}



export default Menu

// const fetRecipes = async () => {
//   try {
//       const response = await fetch('https://dummyjson.com/recipes');
//      return  response.json();

//   } catch (error) {
//       console.log(error);

//   }
// }