import React from 'react'
import profile from '../Components/img/profile.png'
import Typed from 'typed.js'
import './Css/HomePage.css'
import { useEffect, useRef } from 'react'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'

function Homepage() {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Resume.pdf';
            alink.click();
        })
    })
}

  const el = useRef(null);
  useEffect(() => {
  const typed = new Typed(el.current, {
      strings : ["Web Development", "Front-End Web Development"],
      startDelay : 200,
      backDelay  : 200,
      typeSpeed  : 200,
      backSpeed  : 200,
      smartBackspace : true,
      showCursor : false, 
      loop : true,
    } )
  })
  return (
    <div >
      <div className="container Cont-home">
        <div className="content Home">
            <div className="left">
                <h1>Hi There, I'm Ricky Jonathan</h1>
                
                <div className="type-write">
                  <h4>I'm Into <span ref={el}></span></h4>
                  <h4>Front End Developer | Ui/Ux Designer</h4>
                </div>
                
                <div className="btnDiv">
                    <button onClick={onButtonClick}>Download Resume</button>
                </div>
                
            </div>
            <div className="right">
                <img src={profile} alt=""/>
                <svg width="400" height="470" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#9e9ea6" d="M29.8,-52.9C39.7,-45.9,49.4,-40,53.1,-31.4C56.8,-22.8,54.4,-11.4,54.2,-0.1C54.1,11.2,56.2,22.4,52.7,31.5C49.3,40.6,40.4,47.5,30.6,55C20.9,62.6,10.5,70.8,-1.8,73.9C-14.1,77.1,-28.2,75.2,-36.6,66.9C-44.9,58.6,-47.5,43.7,-53.1,31.5C-58.6,19.3,-67.1,9.6,-70.5,-1.9C-73.8,-13.5,-71.9,-26.9,-66.9,-40.1C-61.9,-53.3,-53.7,-66.1,-42.1,-72.1C-30.4,-78.1,-15.2,-77.1,-2.6,-72.6C10,-68,20,-59.9,29.8,-52.9Z" transform="translate(130 100)" />
                </svg>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage