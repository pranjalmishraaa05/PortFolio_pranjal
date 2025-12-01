import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Myself from './Components/Myself'
import BentoGrid from './Components/BentoGrid'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-black text-white font-sans selection:bg-purple-500/30'>
      <Navbar />
      <Hero />
      <Myself />
      <BentoGrid />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App