import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About.jsx';
import App from './App.jsx'
import Customer from './Customer.jsx';
import Lithium from './Lithium.jsx';
import Register from './Register.jsx'
import Contact from './Contact.jsx'
import Complaint from './Complaint.jsx'
import Payement from './Payement.jsx'
import Quote from './Quote.jsx'
import Solar from './Solar.jsx'
import  Evbatteries from './Evbatteries.jsx' 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
  <Route path="/" element={<App />} />
  <Route path="/About" element={<About />} />
  <Route path="/Customer" element={<Customer/>} />
  <Route path="/Lithium-inverter" element={<Lithium/>} />
  <Route path="/Register" element={<Register/>} />
  <Route path="/Contact" element={<Contact/>} />
  <Route path="/Complaint" element={<Complaint/>} />
  <Route path="/Payement" element={<Payement/>} />
  <Route path="/Quote" element={<Quote/>} />
  <Route path="/Solar-batteries" element={<Solar/>} />
  <Route path="/Lithium-batteries" element={<Evbatteries/>} />
</Routes>
</BrowserRouter>
  </StrictMode>,
)
