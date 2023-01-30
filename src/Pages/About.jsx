import React from 'react'
import merbabu from '../Components/img/merbabu.jpeg'
import './Css/About.css'
import logo from '../Components/img/logo.png'
import lo from '../Components/img/skil.svg'

function About() {
  return (
    <div>
      <div className="container">
        <div className="content">
            <div className="about">
                <h1>About </h1>
                <div className="img">
                    <div className="intro">
                        <div className="left-item">
                          <h4 className='judul'>Description</h4>
                        <p>I am a final year student at Satya Wacana Christian University,
                          Faculty of Information Technology Department of Informatics who took
                          area of ​​interest Software Engineering and Product Design I have Passions
                          in Web development.
                          </p>
                        </div>
                        <div className="right-item">
                        <h4 className='judul'>Academic Background</h4>
                          <div className="item-isi">
                            <img src={logo} alt="" />
                            <div className="isi">
                              <p>2018-2023</p>
                              <h2>Universitas Kristen <br></br>
                              Satya Wacana</h2>
                              <p>Bachelor of Applied Science - Informatics Engineering</p>
                            </div>
                          </div>
                        </div>
                    </div>
                    <h1 id="exp">Experience</h1>
                    <div className="experience">
                      
                        <div className="box">
                           <div className="item-isi">
                            <img  src={lo} alt="" />
                            <div className="isi">
                              <p>August - December 2022</p>
                              <h2>Bootcamp  <br></br>
                              Front End Developer
                              </h2>
                              <h3>#Tech4Impact - Skilvul Batch </h3>
                              <p className='tech'>React Js</p>
                            </div>
                          </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About