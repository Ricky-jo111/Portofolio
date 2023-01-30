import Homepage from './Pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import Navba from './Components/Navbar'
import About from './Pages/About'
import Portofolio from './Pages/Portofolio'
import Blog from './Pages/blog'
import React from 'react'
import './Pages/Css/App.css'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Navba />

      
      <div id="Home" className="section Home">
        <Homepage />
      </div>
      <div id="About" className="section About">
        <About />
      </div>
      <div id="Porto"  className="section Porto">
        <Portofolio  />
      </div>
      <div id='Blog' className="section Blog">
        <Blog  />
      </div>
      <div id="Footer" className='section Footer'>
        <Footer />
      </div>
    </div>
  )
}

export default App
