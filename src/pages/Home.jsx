import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Review from '../components/Review'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='bg-red-200 min-h-screen'>
        <Navbar />
        <Hero />   
        <Intro />    
        <Review />
        
    </div>
  )
}

export default Home