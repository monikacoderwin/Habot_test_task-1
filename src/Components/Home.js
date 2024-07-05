import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Signup from './Signup'
import Buyer from './Buyer'
import Verification from './Verification'
import Working from './Working'
import Footer from './Footer'
import './Home.css'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Signup />
      <Buyer />
      <Verification />
      <Working />
      <Footer />

    </>
  )
}

export default Home