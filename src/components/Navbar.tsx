import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'GitHub', to: 'github' },
  { label: 'Testimonials', to: 'testimonials' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        background: scrolled
          ? 'rgba(4, 9, 26, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,255,0.08)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="hero" smooth duration={600} offset={-80} style={{ cursor: 'none' }}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}
          >
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #00d4ff, #00b89c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Joseph Tide
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.18em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}>
              Health Informatics & AI
            </span>
          </motion.div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}
          className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              offset={-80}
              spy
              activeClass="nav-active"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                cursor: 'none',
                transition: 'color 0.2s',
                position: 'relative',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                ;(e.target as HTMLElement).style.color = 'var(--accent-cyan)'
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                ;(e.target as HTMLElement).style.color = 'var(--text-secondary)'
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="contact" smooth duration={600} offset={-80}>
            <motion.button
              className="btn-primary"
              style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Hire Me
            </motion.button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--accent-cyan)',
            fontSize: '1.6rem',
            display: 'none',
          }}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(4, 9, 26, 0.97)',
              borderTop: '1px solid var(--border-subtle)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                offset={-80}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.1rem',
                  color: 'var(--text-secondary)',
                  cursor: 'none',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}
