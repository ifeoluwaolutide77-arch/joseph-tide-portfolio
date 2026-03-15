import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaMicroscope, FaRobot, FaGlobe } from 'react-icons/fa'

const highlights = [
  { icon: FaGraduationCap, label: 'Pharmacy Degree', value: 'Licensed Pharmacist' },
  { icon: FaMicroscope, label: 'Clinical Experience', value: 'Drug Therapy & Patient Care' },
  { icon: FaRobot, label: 'AI Specialization', value: 'Health Informatics & ML' },
  { icon: FaGlobe, label: 'Remote Ready', value: 'Global Clients Welcome' },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      id="about"
      style={{
        padding: '7rem 0',
        background: 'linear-gradient(180deg, #04091a 0%, #060e22 100%)',
        position: 'relative',
      }}
    >
      {/* Decorative line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1px',
        height: '80px',
        background: 'linear-gradient(180deg, transparent, var(--accent-cyan))',
      }} />

      <div className="noise-overlay" />
      <div className="glow-dot" style={{ width: 400, height: 400, background: 'rgba(0,184,156,0.05)', top: '10%', right: '-5%' }} />

      <div className="container" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '5rem',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Image column */}
          <motion.div variants={itemVariants} style={{ position: 'relative' }}>
            {/* Decorative frame */}
            <div style={{
              position: 'absolute',
              top: -16,
              left: -16,
              right: 16,
              bottom: 16,
              border: '1px solid rgba(0,212,255,0.2)',
              borderRadius: 'var(--radius-lg)',
              zIndex: 0,
            }} />

            {/* Gold accent corner */}
            <div style={{
              position: 'absolute',
              bottom: -20,
              right: -20,
              width: 80,
              height: 80,
              borderRight: '2px solid rgba(240,165,0,0.4)',
              borderBottom: '2px solid rgba(240,165,0,0.4)',
              borderRadius: '0 0 12px 0',
              zIndex: 3,
            }} />

            {/* Photo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                aspectRatio: '4/5',
                background: 'var(--bg-card)',
              }}
            >
              <img
                src="/portfolio-pic.jpg"
                alt="Joseph Tide – Health Informatics & AI Specialist"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                  filter: 'contrast(1.05) brightness(0.95)',
                }}
              />
              {/* Overlay gradient at bottom */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '30%',
                background: 'linear-gradient(transparent, rgba(4,9,26,0.5))',
              }} />

              {/* Cyan tint overlay on edges */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at top right, rgba(0,212,255,0.06) 0%, transparent 60%)',
                mixBlendMode: 'screen',
              }} />
            </motion.div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{
                position: 'absolute',
                bottom: 24,
                left: -28,
                background: 'rgba(4,9,26,0.92)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1rem 1.25rem',
                backdropFilter: 'blur(10px)',
                zIndex: 4,
              }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--accent-cyan)',
                lineHeight: 1,
              }}>6+</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                Years Clinical<br />Experience
              </div>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <motion.div variants={itemVariants}>
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              The Pharmacist Who{' '}
              <span className="highlight">Speaks AI</span>
            </h2>
            <div className="divider" />

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
              What if I told you your health data holds answers your doctors haven't found yet? I'm Joseph Tide — a licensed pharmacist who pivoted into health informatics because I saw firsthand how much clinical insight gets buried in data that nobody knows how to use.
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
              Today, I design and build AI-powered healthcare systems — from drug interaction dashboards to predictive analytics tools — that give clinicians clarity and patients better outcomes. My clinical background means I don't just build tools; <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>I build tools that actually make sense to the people using them.</strong>
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '2rem', fontSize: '1.05rem' }}>
              If you're in healthcare or building a health tech product, I want to hear about what problem keeps you up at night. Chances are, I've already thought about a solution.
            </p>

            {/* Highlight cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.85rem',
            }}>
              {highlights.map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  className="card"
                  whileHover={{ scale: 1.03, borderColor: 'var(--accent-cyan)' }}
                  style={{ padding: '1rem 1.1rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}
                >
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: '8px',
                    background: 'var(--accent-cyan-dim)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.9rem',
                    flexShrink: 0,
                  }}>
                    <Icon />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 500, marginTop: '0.15rem' }}>{value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}
