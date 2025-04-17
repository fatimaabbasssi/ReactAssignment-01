import React from 'react'
import './mystyle.css'
// all components
import Header from '../components/navbar'
import Home from './home'
// import About from './About'
import About from './about'
import Menu from './menu'
import DetailPage from './detailpage'
import Services from './services'
import Footer from '../components/footer'
import Pagenotfound from './pagenotfound'
import { Route, Routes } from 'react-router-dom'
const main = () => {
  return (
    <>
    <Header/>

    <Routes>

     <Route path='/' element={<Home/>} />
     <Route path="/home" element={<Home/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/menu" element={<Menu/>} />
     <Route path='/recipes/:id' element={<DetailPage/>} />
     <Route path="/services" element={<Services/>} />
     <Route path="*" element={<Pagenotfound/>} />

    </Routes>

    <Footer/>
    </>
  )
}

export default main