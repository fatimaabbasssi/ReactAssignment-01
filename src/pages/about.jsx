import React from 'react'

//components
import Gallery from '../components/gallery'
import Poster from '../components/poster'
import InputComponent from '../components/input'
// images
import biryani from "../assets/biryani.png"
import noodles from "../assets/noodles.png"


const About = () => {
  return (
   <>
   
   <div className='hero-main'>
<div className='hero-para'>
    <h1>Welcome to <span className='hero-span'>CrispyTales</span>_About </h1>
   
<h2 className='pb-3 pt-3'>Delicious recipes made easy - cook, savor, and share the love</h2>
<button type="button" className="btn btn-warning">Read More ⇒ </button>
</div>
<img src={biryani} alt="biryani" className='biryani' />
 </div>
 <div className='hero-icons'>
 <i className="fa-solid fa-mug-saucer h-icons"></i>
 <i className="fa-solid fa-truck h-icons"></i>
 <i className="fa-solid fa-mug-hot h-icons"></i>
 </div>

{/* about */}


<div class="about-section">
  <div class="about-container">
    <div class="about-para">
      <h2 class="about-heading">ABOUT CrispyTales </h2>
      <p>
      At CrispyTales , we believe that cooking is not just about food — it’s about love, creativity, and bringing people together. Our journey started with a simple idea: to make delicious, home-cooked meals accessible to everyone.
      </p>
      <p>
      Whether you're a beginner in the kitchen or a seasoned chef, our curated recipes, expert tips, and diverse meal ideas are designed to inspire and empower you. From hearty classics to modern fusions, we celebrate flavors from all around the world.
      </p>
      <p>Join us in our mission to turn every meal into a memory. Happy cooking!</p>
      <a href="#" class="about-link">Learn more →</a>
    </div>
    <div class="about-img">
      <img src={noodles} alt="City View" />
    </div>
  </div>

  <div class="about-stats">
    <div class="stat">
      <div class="icon">😊</div>
      <div class="text"><strong>100k</strong><br /> User</div>
    </div>
    <div class="stat">
      <div class="icon">🥗</div>
      <div class="text"><strong>500+</strong><br />Recipes</div>
    </div>
    <div class="stat">
      <div class="text highlight">And your happiness.<br /><strong>Is our key to success</strong></div>
    </div>
  </div>
</div>




<div className="about-special-dishes pt-5">
    <h2 className="about-heading text-center">Our Special Dish</h2>
    <p className="about-subtext text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    <div className="about-dishes-list">
      <div className="about-dish-card">
        <img src="https://d1yfn1dfres2va.cloudfront.net/011/19/ee/19ee6358d0eb01376955ab89c9287538_social01.jpg" alt="Charred Avocado" />
        <h3 className="about-dish-title">Charred Avocado</h3>
        <p className="about-dish-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
      <div className="about-dish-card">
        <img src="https://www.seriouseats.com/thmb/mJ6jbHV9xiVhBCucEmXbW_q6mxA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__10__ultra-crispy-roast-potatoes-28189eb8fffd485c9047962b1f9e7606.jpg" alt="Crispy Potatoes" />
        <h3 className="about-dish-title">Crispy Potatoes</h3>
        <p className="about-dish-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
      <div className="about-dish-card">
        <img src="https://www.davita.com/-/media/davita/import/uploadedimages/recipes_v4/breakfast_and_brunch/multigrain-hot-cereal.jpg" alt="Hot Cereal" />
        <h3 className="about-dish-title">Multigrain Hot Cereal</h3>
        <p className="about-dish-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
    </div>
  </div>


  <Poster/>
  


  <Gallery/>

<InputComponent/>
   </>
  )
}

export default About