import React from 'react'
import Navbar from '../Components/Navbar'

import './Css/Blog.css'
import {MdContactPage} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import { Container } from 'react-bootstrap'

function Blog() {
  return (
    <Container className='container foot'>
      
        <div className="box boxs">
          <h1>Reach Me out</h1>
          <div className="icon">
            <MdContactPage id='icon' />
          </div>
          <p>if you need Something or have Something to discuss
            <br></br>feel free to contact me
          </p>
          <div className="soc">
            <div className="ico" data-aos="fade-right"><a href="https://www.instagram.com/riiiiick_17/"><BsInstagram className='ic'/></a></div>
            <div className="ico" data-aos="fade-up"> <a href="https://www.linkedin.com/in/ricky-jonathan-099592239/"><BsLinkedin className='ic'/></a></div>
            <div className="ico" data-aos="fade-left"> <a href="https://wa.me/6285279785228"><BsWhatsapp className='ic'/></a></div>
             
             
          </div>
        </div>
       
      
       
    </Container>
  )
}

export default Blog