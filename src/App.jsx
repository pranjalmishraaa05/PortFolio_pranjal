import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Myself from './Components/Myself'
import BentoGrid from './Components/BentoGrid'
import Timeline from './Components/Timeline'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import Resume from './Components/Resume'
import LoadingScreen from './Components/LoadingScreen'

const Home = () => (
  <>
    <Hero />
    <Myself />
    <BentoGrid />
    <Timeline />
    <Testimonials />
    <Footer />
  </>
)

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div className='min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 overflow-x-hidden'>
        <AnimatePresence mode="wait">
          {loading && <LoadingScreen onLoadingComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  )
}

export default App