import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiMail, FiLinkedin, FiGithub, FiTwitter,
  FiMessageSquare, FiPhone,
} from 'react-icons/fi'
import { SiUpwork, SiWhatsapp } from 'react-icons/si'

// ✏️ REPLACE with your actual contact info
const contacts = {
  email: 'ifeoluwaolutide1@gmail.com',
  linkedin: 'www.linkedin.com/in/ifeoluwaolutide',
  github: 'https://github.com/ifeoluwaolutide77-arch',
  twitter: 'https://twitter.com/heiskintsugi',
  whatsapp: 'https://wa.me/2348146406950',
  upwork: 'https://www.upwork.com/freelancers/olutiide?mp_source=share',
  phone: '+234 814 640 6950',
}

const socialLinks = [
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    sublabel: 'Connect professionally',
    url: contacts.linkedin,
    color: '#0077b5',
    bg: 'rgba(0,119,181,0.1)',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    sublabel: 'See my code',
    url: contacts.github,
    color: '#e0e0e0',
    bg: 'rgba(224,224,224,0.08)',
  },
  {
    icon: FiTwitter,
    label: 'Twitter / X',
    sublabel: 'Follow for insights',
    url: contacts.twitter,
    color: '#1da1f2',
    bg: 'rgba(29,161,242,0.1)',
  },
  {
    icon: SiWhatsapp,
    label: 'WhatsApp',
    sublabel: 'Quick chat',
    url: contacts.whatsapp,
    color: '#25d366',
    bg: 'rgba(37,211,102,0.1)',
  },
  {
    icon: SiUpwork,
    label: 'Upwork',
    sublabel: 'Hire me for projects',
    url: contacts.upwork,
    color: '#6fda44',
    bg: 'rgba(111,218,68,0.1)',
  },
  {
    icon: FiMail,
    label: 'Email',
    sublabel: contacts.email,
    url: `mailto:${contacts.email}`,
    color: '#00d4ff',
    bg: 'rgba(0,212,255,0.1)',
  },
]

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      id="contact"
      style={{
        padding: '7rem 0 5rem',
        background: 'linear-gradient(180deg, #060e22 0%, #04091a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="noise-overlay" />
      <div className="glow-dot" style={{ width: 600, height: 600, background: 'rgba(0,212,255,0.05)', top: '-10%', left: '50%', transform: 'translateX(-50%)' }} />

      <div className="container" ref={ref}>
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            background: 'linear-gradient(135deg, rgba(0,212,255,0.07) 0%, rgba(0,184,156,0.05) 100%)',
            border: '1px solid rgba(0,212,255,0.15)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            textAlign: 'center',
            marginBottom: '4rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative corners */}
          {[['0','0'], ['0','auto'], ['auto','0'], ['auto','auto']].map(([t, r], i) => (
            <div key={i} style={{
              position: 'absolute',
              top: t === '0' ? 0 : 'auto',
              bottom: t === 'auto' ? 0 : 'auto',
              right: r === '0' ? 0 : 'auto',
              left: r === 'auto' ? 0 : 'auto',
              width: 40,
              height: 40,
              borderTop: t === '0' ? '1.5px solid var(--accent-cyan)' : 'none',
              borderBottom: t === 'auto' ? '1.5px solid var(--accent-cyan)' : 'none',
              borderRight: r === '0' ? '1.5px solid var(--accent-cyan)' : 'none',
              borderLeft: r === 'auto' ? '1.5px solid var(--accent-cyan)' : 'none',
            }} />
          ))}

          <p className="section-label" style={{ marginBottom: '1rem' }}>Open for Work</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 600,
            lineHeight: 1.1,
            marginBottom: '1.25rem',
          }}>
            Have a healthcare problem{' '}
            <span className="highlight">that needs AI?</span>
          </h2>
          <p style={{
            maxWidth: '580px',
            margin: '0 auto 2.5rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            fontSize: '1.05rem',
          }}>
            Whether you're building a health tech product, need pharmaceutical AI consulting, or want to turn messy clinical data into intelligence — I want to hear from you. Let's build something that actually saves lives.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a
              href={`mailto:${contacts.email}`}
              className="btn-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiMail /> Send Me a Message
            </motion.a>
            <motion.a
              href={contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiMessageSquare /> WhatsApp Me
            </motion.a>
          </div>
        </motion.div>

        {/* Social grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <p style={{
            textAlign: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.18em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            Find Me Everywhere
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
          }}
            className="social-grid"
          >
            {socialLinks.map(({ icon: Icon, label, sublabel, url, color, bg }, i) => (
              <motion.a
                key={label}
                href={url}
                target={url.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, borderColor: color + '44' }}
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  textDecoration: 'none',
                }}
              >
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: '10px',
                  background: bg,
                  border: `1px solid ${color}22`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color,
                  fontSize: '1.2rem',
                  flexShrink: 0,
                }}>
                  <Icon />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-primary)' }}>{label}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>{sublabel}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Availability note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          style={{
            marginTop: '3rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            color: 'var(--text-muted)',
            fontSize: '0.88rem',
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: 8, height: 8, borderRadius: '50%', background: '#34d399' }}
          />
          Available for freelance & consulting projects — remote, worldwide
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .social-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .social-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
