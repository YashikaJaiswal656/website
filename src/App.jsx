import React, { useState, useEffect } from 'react';
import "./App.css";
import Header from './Include/header';
import OurProduct from './Components/OurProduct';
import Card from './Components/Card';
import Range from './Components/Range';

import Mission from './Components/Mission';

import WhoTh from './Components/Whoth';
import Footer from './Include/Footer'
import Slider from './Components/Slider';


const App = () => {
 
  return (
    <>
      <Header />

 
<Slider/>
<WhoTh/>
<OurProduct/>
<Mission/>
<Card/>
<Range/>
<Footer/>
    </>
  );
};

export default App;
