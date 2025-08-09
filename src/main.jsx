import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About.jsx';
import App from './App.jsx'
// import Customer from './Customer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
  <Route path="/" element={<App />} />
  <Route path="/About" element={<About />} />
  {/* <Route path="/Customer" element={<Customer/>} /> */}
</Routes>
</BrowserRouter>
  </StrictMode>,
)
