import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiHeart, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer style={{
      background: '#020813',
      borderTop: '1px solid var(--border-subtle)',
      padding: '2.5rem 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <div>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            fontWeight: 600,
            background: 'linear-gradient(135deg, #00d4ff, #00b89c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Joseph Tide
          </span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginLeft: '0.75rem' }}>
            Health Informatics & AI Specialist
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
          Built with <FiHeart style={{ color: '#f0a500' }} /> & React — Lagos, Nigeria
        </div>

        <Link to="hero" smooth duration={800} offset={0}>
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              border: '1px solid var(--border)',
              background: 'var(--bg-card)',
              color: 'var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
            }}
          >
            <FiArrowUp />
          </motion.button>
        </Link>
      </div>
    </footer>
  )
}
