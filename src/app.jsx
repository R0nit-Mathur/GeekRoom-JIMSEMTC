import { useState } from 'react'
import React from 'react'
import Navbar from '/src/components/header'
import BannerOnTop from '/src/components/banner'
import HeroSection from '/src/components/hero'
import AboutJEMTEC from '/src/components/jemtec'
import AboutGeekRoom from '/src/components/aboutgeek'
import Events from '/src/components/events'
import TeamSection from '/src/components/team'
import ContactSection from '/src/components/footer'

function App() {

  return (
    <>
      <Navbar/>
      <BannerOnTop/>
      <HeroSection/>
      <AboutJEMTEC/>
      <AboutGeekRoom/>
      <Events/>
      <TeamSection/>
      <ContactSection/>
    </>
  )
}

export default App
