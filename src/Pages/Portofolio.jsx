import React, {useEffect}from 'react'
import '../Pages/Css/Porto.css'
import react from '../Components/img/react-2.svg'
import html from '../Components/img/html-1.svg'
import css from '../Components/img/css-3.svg'
import js from '../Components/img/js.svg'
import git from '../Components/img/git.svg'
import fg from '../Components/img/fg.svg'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { Container } from 'react-bootstrap'


function Portofolio() {

   useEffect(() => {
    Aos.init({duration: 1000});
   }, []);
  return (
    <div>
        
    <Container className="container">
        
    <div className="contents">
        <h1 id='jdl'>Skill</h1>
        <div className="skill">
            
            <div className="skill left">
                <div className="skill-item">
                    <ul>
                        <li data-aos="fade-left"><img src={react} className='icon'  /><h1>React</h1></li>
                        <li data-aos="fade-left"><img src={html} className='icon'  /><h1>Html</h1></li>
                        <li data-aos="fade-left"><img src={css} className='icon'  /><h1>CSS</h1></li>
                       
                    </ul>
                </div>
            </div>
            <div className="skill left">
                <div className="skill-item">
                    <ul>
                     
                        <li data-aos="fade-right" ><img src={js} className='icon'  /><h1>JavaScript</h1></li>
                        <li data-aos="fade-right" ><img src={fg} className='icon'  /><h1>Figma</h1></li>
                        <li data-aos="fade-right" ><img src={git} className='icon'  /><h1>Github</h1></li>
                    </ul>
                </div>
            </div>
        </div>
    
    </div >
      </Container>
    </div>
  )
}

export default Portofolio