import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaRobot, FaChartLine, FaPills, FaDatabase, FaLaptopMedical, FaFileAlt } from 'react-icons/fa'

const services = [
  {
    icon: FaLaptopMedical,
    title: 'Clinical AI Development',
    price: 'From $500',
    description:
      'I design and build AI-powered clinical tools — decision support systems, drug interaction engines, and triage platforms that physicians and pharmacists actually trust.',
    deliverables: ['Working web application', 'Clinical accuracy review', 'User testing with clinicians', 'Deployment & documentation'],
    color: '#00d4ff',
    popular: false,
  },
  {
    icon: FaChartLine,
    title: 'Health Data Analytics',
    price: 'From $300',
    description:
      'Raw clinical data is worthless until it tells a story. I transform EHR exports, lab results, and prescription records into dashboards and reports your team can act on immediately.',
    deliverables: ['Interactive dashboard', 'Automated reporting', 'KPI framework', 'Insights presentation'],
    color: '#00b89c',
    popular: true,
  },
  {
    icon: FaPills,
    title: 'Pharmaceutical Consulting',
    price: 'From $150/hr',
    description:
      'Need a licensed pharmacist to review your health tech product for clinical accuracy? I provide expert validation for AI outputs, drug content, and safety protocols.',
    deliverables: ['Clinical content audit', 'Drug safety review', 'Regulatory guidance', 'Written report'],
    color: '#f0a500',
    popular: false,
  },
  {
    icon: FaRobot,
    title: 'Medical AI Prompt Engineering',
    price: 'From $250',
    description:
      'Most AI systems fail in healthcare because the prompts ignore clinical nuance. I craft and test medical prompts that produce safe, accurate, and contextually appropriate outputs.',
    deliverables: ['Prompt library', 'Safety guardrails', 'Benchmark testing', 'Iteration rounds'],
    color: '#a78bfa',
    popular: false,
  },
  {
    icon: FaDatabase,
    title: 'EHR Data Engineering',
    price: 'From $400',
    description:
      'I build FHIR-compliant pipelines that clean, normalize, and unify health records from disparate sources — giving your team a single source of truth for clinical intelligence.',
    deliverables: ['FHIR R4 pipeline', 'Data quality framework', 'API documentation', 'Ongoing support'],
    color: '#f472b6',
    popular: false,
  },
  {
    icon: FaFileAlt,
    title: 'Medical Content Writing',
    price: 'From $80',
    description:
      'As a pharmacist, I write drug guides, clinical explainers, patient education materials, and health tech documentation that is medically accurate, clear, and compelling.',
    deliverables: ['Evidence-based content', 'Plain-language writing', 'Medical review', 'Unlimited revisions'],
    color: '#34d399',
    popular: false,
  },
]

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section
      id="services"
      style={{
        padding: '7rem 0',
        background: 'linear-gradient(180deg, #060e22 0%, #04091a 100%)',
        position: 'relative',
      }}
    >
      <div className="noise-overlay" />
      <div className="glow-dot" style={{ width: 450, height: 450, background: 'rgba(0,212,255,0.05)', bottom: '-5%', right: '-5%' }} />

      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label">Services</p>
          <h2 className="section-title">
            How I Can <span className="highlight">Help You</span>
          </h2>
          <p style={{ maxWidth: '560px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            I offer a focused range of services that sit at the intersection of pharmacy expertise and AI capability. Every engagement is tailored — no cookie-cutter solutions.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}
          className="services-grid"
        >
          {services.map(({ icon: Icon, title, price, description, deliverables, color, popular }, i) => (
            <motion.div
              key={title}
              className="card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, borderColor: color + '44' }}
              style={{
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {popular && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'linear-gradient(135deg, #00d4ff, #00b89c)',
                  color: '#04091a',
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '20px',
                  textTransform: 'uppercase',
                }}>
                  Popular
                </div>
              )}

              {/* Top accent line */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '3px',
                background: `linear-gradient(90deg, ${color}, transparent)`,
              }} />

              {/* Icon */}
              <div style={{
                width: 52,
                height: 52,
                borderRadius: '12px',
                background: color + '18',
                border: `1px solid ${color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color,
                fontSize: '1.3rem',
                marginBottom: '1.25rem',
              }}>
                <Icon />
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                fontWeight: 600,
                marginBottom: '0.35rem',
                color: 'var(--text-primary)',
              }}>{title}</h3>

              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color,
                marginBottom: '0.9rem',
                fontWeight: 500,
              }}>{price}</div>

              <p style={{
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '1.25rem',
              }}>{description}</p>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Includes
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {deliverables.map((d) => (
                    <li key={d} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color, fontSize: '0.65rem' }}>◆</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  borderColor: color,
                  color,
                  fontSize: '0.85rem',
                  padding: '0.65rem 1rem',
                }}
              >
                Get a Quote
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
