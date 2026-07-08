import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/home';
import AboutUs from './Components/AboutUs'; // 1. Import file-nya
import ProductFeatures from './Components/ProductFeatures'; // 1. Import file-nya
import RotatingBelt from './Components/RotatingBelt'; // 1. Import file-nya
import TestimonialSection from './Components/TestimonialSection'; // 1. Import file-nya
import Footer from './Components/Footer'; // 1. Import file-nya
import './index.css'; 

function App() {
  return (
    <>
      <Navbar />
      <div id="overview"><Home /></div>
      <div id="solutions"><AboutUs /></div>
      <div id="modules"></div> {/* Fallback for Modules */}
      <div id="features"><ProductFeatures /></div>
      <div id="industries"><RotatingBelt /></div>
      <div id="testimonials"><TestimonialSection /></div>
      <Footer />
    </>
  );
}

export default App;