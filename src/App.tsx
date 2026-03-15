import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Process from './components/Process'
import Projects from './components/Projects'
import GitHubRepos from './components/GitHubRepos'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Scroll progress bar
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  // Hide default cursor on load
  useEffect(() => {
    document.body.style.cursor = 'none'
    return () => { document.body.style.cursor = 'auto' }
  }, [])

  return (
    <>
      {/* Progress bar */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #00d4ff, #00b89c, #f0a500)',
          transformOrigin: '0%',
          zIndex: 9999,
        }}
      />

      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Process />
        <Projects />
        <GitHubRepos />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
