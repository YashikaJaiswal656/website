import React from 'react'
import Header from './Include/header'
import Footer from './Include/Footer'
const Payement = () => {
  return (
    <>
    <Header/>
<div className="slider-container">
        <div className="slider-wrapper">
          
            <div className="slide" style={{ backgroundImage: `url("https://media.istockphoto.com/id/2078490118/photo/businessman-using-laptop-to-online-payment-banking-and-online-shopping-financial-transaction.jpg?s=612x612&w=0&k=20&c=1x2G24ANsWxG4YW6ZaoeFPEzjmKFE4ZlohVQSwbjGj8=")` }}> 
              <div className="blur">
                <h1>Secure Payments   </h1>
                <p>Fast, secure transactions for Finike Lithium products.</p>
              </div>
            </div>
          
        </div>
        </div>
    <Footer/>
    </>
  )
}

export default Payement