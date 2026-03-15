import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      "We start with a conversation about your challenge. I ask the questions most tech consultants don't — about your clinical workflows, your users, and what failure would look like. You leave with clarity.",
    color: '#00d4ff',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Clinical Mapping',
    description:
      "I map your problem to clinical evidence and technical possibilities. This is where my pharmacy background earns its keep — I identify risks, edge cases, and regulatory considerations before a single line of code.",
    color: '#00b89c',
    icon: '🗺️',
  },
  {
    number: '03',
    title: 'Rapid Prototyping',
    description:
      "You see working prototypes early and often. I build iteratively, showing you real demos — not slide decks — and adjusting based on feedback from you and, where possible, actual end users.",
    color: '#f0a500',
    icon: '⚡',
  },
  {
    number: '04',
    title: 'Clinical Validation',
    description:
      "Before any health tool ships, I validate its outputs against clinical standards. I test edge cases, stress-test the AI logic, and document the system's limitations honestly.",
    color: '#a78bfa',
    icon: '✅',
  },
  {
    number: '05',
    title: 'Deployment & Handoff',
    description:
      "I deploy, document, and train your team. You get the source code, full documentation, and a recorded walkthrough. I remain available for questions and iterations after launch.",
    color: '#34d399',
    icon: '🚀',
  },
]

export default function Process() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      id="process"
      style={{
        padding: '7rem 0',
        background: 'linear-gradient(180deg, #04091a 0%, #060e22 100%)',
        position: 'relative',
      }}
    >
      <div className="noise-overlay" />

      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4.5rem' }}
        >
          <p className="section-label">How I Work</p>
          <h2 className="section-title">
            No Black Boxes. <span className="highlight">Just Results.</span>
          </h2>
          <p style={{ maxWidth: '540px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Healthcare demands accountability. Here's exactly how I work with clients — from first call to final handoff.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          {/* Vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(180deg, var(--accent-cyan), transparent)',
              transform: 'translateX(-50%)',
              zIndex: 0,
            }}
            className="process-line"
          />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                  marginBottom: '2.5rem',
                  position: 'relative',
                  zIndex: 1,
                }}
                className="process-step"
              >
                {/* Dot on timeline */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '1.5rem',
                  transform: 'translateX(-50%)',
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: step.color,
                  boxShadow: `0 0 16px ${step.color}88`,
                  zIndex: 2,
                }} />

                {/* Card */}
                <div
                  className="card"
                  style={{
                    width: '44%',
                    padding: '1.75rem',
                    marginLeft: isLeft ? 0 : 'auto',
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{step.icon}</span>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: step.color,
                      letterSpacing: '0.12em',
                    }}>
                      STEP {step.number}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    marginBottom: '0.6rem',
                    color: 'var(--text-primary)',
                  }}>{step.title}</h3>
                  <p style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                  }}>{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .process-line { display: none; }
          .process-step { justify-content: center !important; }
          .process-step > div { width: 100% !important; }
        }
      `}</style>
    </section>
  )
}
