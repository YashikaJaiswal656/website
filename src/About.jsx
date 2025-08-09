import React from 'react'
import Header from './Include/header'
import Footer from './Include/Footer'
import Vision from './Components/Vision'
import Choose from './Components/Choose'
import Wrap from './Components/Wrap'
const About = () => {
  return (
    <>
    <Header/>
          <div className="slider-container">
        <div className="slider-wrapper">
          
            <div className="slide" style={{ backgroundImage: `url("https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg")` }}> 
              <div className="blur">
                <h1>Empowering a Sustainable Future </h1>
                <p>Finike Lithium provides innovative lithium-ion battery solutions for electric vehicles and renewable energy, driving a sustainable future.</p>
              </div>
            </div>
          
        </div>
        </div>


      <Wrap/>
      <Vision/>   
      <Choose/>
    <Footer/>
    
    </>
  )
}

export default About