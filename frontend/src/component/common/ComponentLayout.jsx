import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function ComponentLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default ComponentLayout