import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { HiArrowDown } from 'react-icons/hi'
import { FaFlask, FaBrain, FaDatabase, FaHeartbeat } from 'react-icons/fa'

const roles = [
  'Health Informatics Specialist',
  'AI in Healthcare Expert',
  'Clinical Data Scientist',
  'Pharmacist & Technologist',
]

const floatingIcons = [
  { icon: FaFlask, top: '20%', left: '8%', delay: 0, color: '#00d4ff' },
  { icon: FaBrain, top: '65%', left: '5%', delay: 0.5, color: '#00b89c' },
  { icon: FaDatabase, top: '15%', right: '10%', delay: 1, color: '#f0a500' },
  { icon: FaHeartbeat, top: '70%', right: '6%', delay: 1.5, color: '#00d4ff' },
]

// Animated hexagon background
function HexGrid() {
  return (
    <svg
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.04,
        pointerEvents: 'none',
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="hex" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon
            points="30,2 58,17 58,45 30,50 2,45 2,17"
            fill="none"
            stroke="#00d4ff"
            strokeWidth="0.8"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)" />
    </svg>
  )
}

// Typewriter
function Typewriter({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[index]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, texts])

  return (
    <span style={{ color: 'var(--accent-cyan)' }}>
      {displayed}
      <span style={{
        display: 'inline-block',
        width: '2px',
        height: '1.1em',
        background: 'var(--accent-cyan)',
        marginLeft: '2px',
        verticalAlign: 'text-bottom',
        animation: 'blink 1s step-end infinite',
      }} />
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  )
}

// Animated particle dots
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = []

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      })
    }

    let animId: number
    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`
        ctx.fill()

        // Connect nearby particles
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(animate)
    }

    animate()

    const onResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'linear-gradient(160deg, #04091a 0%, #060e22 50%, #071220 100%)',
        overflow: 'hidden',
      }}
    >
      <HexGrid />
      <Particles />

      {/* Glow blobs */}
      <div className="glow-dot" style={{ width: 500, height: 500, background: 'rgba(0,212,255,0.05)', top: '-10%', left: '-10%' }} />
      <div className="glow-dot" style={{ width: 400, height: 400, background: 'rgba(0,184,156,0.06)', bottom: '0%', right: '-5%' }} />
      <div className="glow-dot" style={{ width: 300, height: 300, background: 'rgba(240,165,0,0.05)', top: '30%', right: '20%' }} />

      {/* Floating icons */}
      {floatingIcons.map(({ icon: Icon, top, left, right, delay, color }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -12, 0] }}
          transition={{ delay, duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top,
            left,
            right,
            zIndex: 1,
            color,
            fontSize: '1.6rem',
            opacity: 0.3,
          }}
        >
          <Icon />
        </motion.div>
      ))}

      {/* Hero content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}
        >
          <span className="tag">
            <span style={{ marginRight: '0.4rem' }}>⚕</span>
            Pharmacist × AI Specialist
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            fontWeight: 600,
            lineHeight: 1.05,
            marginBottom: '0.5rem',
          }}
        >
          Hi, I'm{' '}
          <span style={{
            background: 'linear-gradient(135deg, #00d4ff 0%, #00b89c 50%, #f0a500 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Joseph Tide
          </span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--text-secondary)',
            marginBottom: '1.75rem',
            minHeight: '2.5rem',
          }}
        >
          <Typewriter texts={roles} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{
            maxWidth: '640px',
            margin: '0 auto 2.5rem',
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
          }}
        >
          I bridge the gap between clinical pharmacy and cutting-edge AI —{' '}
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
            turning complex health data into intelligent systems
          </strong>{' '}
          that improve patient outcomes and empower healthcare teams.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link to="projects" smooth duration={700} offset={-80}>
            <motion.button className="btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              View My Work
            </motion.button>
          </Link>
          <Link to="contact" smooth duration={700} offset={-80}>
            <motion.button className="btn-outline" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              Let's Collaborate
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          style={{
            display: 'flex',
            gap: '3rem',
            justifyContent: 'center',
            marginTop: '4rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '6+', label: 'Years in Pharmacy' },
            { value: 'AI', label: 'Powered Solutions' },
            { value: '100%', label: 'Client Focus' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.5rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #00d4ff, #00b89c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1,
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.25rem', letterSpacing: '0.05em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--text-muted)',
          fontSize: '0.78rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-mono)',
          zIndex: 2,
        }}
      >
        <span>Scroll</span>
        <HiArrowDown />
      </motion.div>
    </section>
  )
}
