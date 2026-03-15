import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'

// ✏️ REPLACE with real client testimonials as you receive them
const testimonials = [
  {
    name: 'Dr. Adaeze Okonkwo',
    role: 'Chief Medical Officer',
    company: 'HealthBridge Nigeria',
    avatar: '👩🏾‍⚕️',
    content:
      "Joseph brings something rare to health tech: genuine clinical credibility. He doesn't just build dashboards — he understands why a clinician needs a particular data point at a particular moment. The drug interaction tool he built for us has already prevented several adverse events. Worth every naira.",
    rating: 5,
    placeholder: true,
  },
  {
    name: 'Emeka Nwachukwu',
    role: 'Head of Product',
    company: 'Telemed Africa',
    avatar: '👨🏿‍💼',
    content:
      "Working with Joseph was a revelation. He asked questions about our clinical workflows before writing a single line of code. The result was an AI triage tool that our doctors actually use — not the typical software that gathers dust. His pharmacy background made all the difference in the design.",
    rating: 5,
    placeholder: true,
  },
  {
    name: 'Fatima Al-Hassan',
    role: 'Research Coordinator',
    company: 'West African Health Institute',
    avatar: '👩🏾‍🔬',
    content:
      "We needed someone who could interpret our clinical trial data and translate it into meaningful visualizations for non-technical stakeholders. Joseph did that and more — he identified data quality issues our own team had missed. His health informatics expertise is genuinely world-class.",
    rating: 5,
    placeholder: true,
  },
  {
    name: 'Dr. Chukwuemeka Obi',
    role: 'Pharmacy Director',
    company: 'Federal Medical Centre, Abuja',
    avatar: '👨🏿‍⚕️',
    content:
      "Joseph built a medication reconciliation tool for our inpatient pharmacy that cut our error rate by over 40% in three months. He understood the nuances of our formulary, our staffing constraints, and our workflow. This wasn't an external consultant guessing — this was a pharmacist who happened to know AI. Invaluable.",
    rating: 5,
    placeholder: true,
  },
  {
    name: 'Sarah Mensah',
    role: 'Founder & CEO',
    company: 'Diagnosia Health Tech',
    avatar: '👩🏾‍💻',
    content:
      "I came to Joseph with a vague idea about improving medication adherence for our chronic disease patients. He turned it into a fully functioning PWA with real pharmacist oversight built in. His communication throughout the project was excellent — always clear about timelines, tradeoffs, and what was technically feasible.",
    rating: 5,
    placeholder: true,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < rating ? '#f0a500' : 'var(--text-muted)', fontSize: '0.9rem' }}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section
      id="testimonials"
      style={{
        padding: '7rem 0',
        background: 'linear-gradient(180deg, #04091a 0%, #060e22 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="noise-overlay" />
      <div className="glow-dot" style={{ width: 500, height: 500, background: 'rgba(240,165,0,0.04)', top: '-5%', right: '-5%' }} />
      <div className="glow-dot" style={{ width: 350, height: 350, background: 'rgba(0,212,255,0.04)', bottom: '0', left: '-5%' }} />

      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label">Client Voices</p>
          <h2 className="section-title">
            What Clients <span className="highlight-gold">Say</span>
          </h2>
          <p style={{ maxWidth: '500px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            The measure of any specialist is the results they produce for the people they serve. Here's what my clients have to say.
          </p>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginTop: '1rem',
            background: 'rgba(240,165,0,0.08)',
            border: '1px dashed rgba(240,165,0,0.25)',
            borderRadius: '6px',
            padding: '0.4rem 0.85rem',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent-gold)',
          }}>
            ✏️ Placeholder testimonials — replace with real ones as they arrive
          </div>
        </motion.div>

        {/* Main carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <div className="card" style={{
            padding: '3rem',
            position: 'relative',
            borderColor: 'rgba(240,165,0,0.15)',
          }}>
            <FaQuoteLeft style={{
              fontSize: '3rem',
              color: 'rgba(240,165,0,0.15)',
              position: 'absolute',
              top: '2rem',
              left: '2.5rem',
            }} />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <StarRating rating={t.rating} />
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  lineHeight: 1.8,
                  margin: '1.5rem 0',
                }}>
                  "{t.content}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    background: 'var(--accent-cyan-dim)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                  }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>{t.name}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: 42,
                height: 42,
                borderRadius: '50%',
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
              }}
            >
              <FiChevronLeft />
            </motion.button>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrent(i)}
                  animate={{ width: i === current ? 24 : 8, background: i === current ? '#f0a500' : 'var(--text-muted)' }}
                  style={{ height: 8, borderRadius: 4, border: 'none', padding: 0 }}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: 42,
                height: 42,
                borderRadius: '50%',
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
              }}
            >
              <FiChevronRight />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
