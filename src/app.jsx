import { useState } from 'react'
import React from 'react'
import Navbar from './components/header'
import BannerOnTop from './components/banner'
import HeroSection from './components/hero'
import AboutJEMTEC from './components/jemtec'
import AboutGeekRoom from './components/aboutgeek'
import Events from './components/events'
import TeamSection from './components/team'
import ContactSection from './components/footer'

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
