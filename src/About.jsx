import React from 'react'
import Header from './Include/header'
import Footer from './Include/Footer'
import Slider from './Components/Slider'
import Vision from './Components/Vision'
import Choose from './Components/Choose'
import Wrap from './Components/Wrap'
const About = () => {
  return (
    <>
    <Header/>
    <Slider/>
    
      <Wrap/>
      <Vision/>   
      <Choose/>
    <Footer/>
    
    </>
  )
}

export default About