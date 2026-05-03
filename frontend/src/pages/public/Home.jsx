import React from 'react'
import Navbar from './../../component/common/Navbar';
import Hero from './../../component/common/Hero';
import Destinations from './Destinations';
import PopularHostels from './PopularHostels';
import AboutUs from './AboutUs';
import Footer from './../../component/common/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Destinations /> */}
      <PopularHostels />
      <AboutUs />
      <Footer />
    </>
  )
}

export default Home