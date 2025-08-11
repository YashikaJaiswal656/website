import React from 'react'
import Header from './Include/header'
import Footer from './Include/Footer'
const Complaint = () => {
  return (
    <>
    <Header/>
<div className="slider-container">
        <div className="slider-wrapper">
          
            <div className="slide" style={{ backgroundImage: `url("https://blog.ipleaders.in/wp-content/uploads/2016/08/before-you-file-a-complaint.jpg")` }}> 
              <div className="blur">
                <h1>Complaint Register   </h1>
                <p>Our dedicated team is here to assist with any issues related to your Finike Lithium products.</p>
              </div>
            </div>
          
        </div>
        </div>
    <Footer/>
    </>
  )
}

export default Complaint