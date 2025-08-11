import React from 'react'
import Header from './Include/header'
import Footer from './Include/Footer'
const Quote = () => {
  return (
    <>
    <Header/>
<div className="slider-container">
        <div className="slider-wrapper">
          
            <div className="slide" style={{ backgroundImage: `url("https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg")` }}> 
              <div className="blur">
                <h1>Get a Quote   </h1>
                <p>Request a tailored quote for Finike Lithium products, and our team will respond promptly.</p>
              </div>
            </div>
          
        </div>
        </div>
    <Footer/>
    </>
  )
}

export default Quote