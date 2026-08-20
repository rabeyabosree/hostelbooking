import React from 'react'
import Navbar from './../../component/common/Navbar';
import Hero from './../../component/common/Hero';
import PopularHostels from './PopularHostels';
import AboutUs from './AboutUs';
import Footer from './../../component/common/Footer';
import PopulerDestinaiosns from './PopulerDestinaiosns';

function Home() {
  return (
    <>
      <Hero />
      <PopularHostels />
      <PopulerDestinaiosns />
      <AboutUs />
    </>
  )
}

export default Home