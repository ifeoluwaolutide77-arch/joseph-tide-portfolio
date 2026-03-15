import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

interface Project {
  title: string
  description: string
  longDesc: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  status: 'live' | 'wip' | 'placeholder'
  accent: string
  icon: string
}

const projects: Project[] = [
  {
    title: 'Health Insights Dashboard',
    description: 'Real-time clinical analytics platform',
    longDesc:
      'An AI-powered dashboard that synthesizes patient data, lab results, and drug records into actionable clinical insights. Built with React, data visualization libraries, and integrated health data APIs. Designed to reduce diagnostic delays and flag drug interaction risks in real time.',
    tags: ['React', 'TypeScript', 'Health Analytics', 'AI', 'Data Viz'],
    liveUrl: 'https://health-insights-dashboard-nu.vercel.app/',
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME',
    status: 'live',
    accent: '#00d4ff',
    icon: '📊',
  },
  {
    title: 'Drug Interaction Checker AI',
    description: 'NLP-powered polypharmacy risk analyzer',
    longDesc:
      'A clinical decision support tool that uses natural language processing to analyze patient medication lists, flag harmful combinations, and recommend safe alternatives — powered by pharmaceutical databases and large language models.',
    tags: ['Python', 'NLP', 'OpenAI API', 'FastAPI', 'Drug Safety'],
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME',
    status: 'wip',
    accent: '#00b89c',
    icon: '💊',
  },
  {
    title: 'EHR Data Normalizer',
    description: 'FHIR-compliant health record pipeline',
    longDesc:
      'A data engineering pipeline that ingests raw electronic health records from disparate sources, normalizes them to FHIR R4 standards, and exposes clean APIs for downstream analytics applications. Reduces data wrangling time for clinical teams.',
    tags: ['FHIR', 'HL7', 'Python', 'SQL', 'ETL'],
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME',
    status: 'wip',
    accent: '#f0a500',
    icon: '🏥',
  },
  {
    title: 'PharmAI Consultant Bot',
    description: 'AI pharmacist assistant for clinicians',
    longDesc:
      'A conversational AI assistant trained on pharmaceutical references, clinical guidelines, and drug databases. Helps clinicians quickly verify dosing, check contraindications, and understand mechanisms of action — without leaving their workflow.',
    tags: ['LLM', 'RAG', 'Claude API', 'Vector DB', 'Healthcare'],
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME',
    status: 'placeholder',
    accent: '#a78bfa',
    icon: '🤖',
  },
  {
    title: 'Patient Readmission Predictor',
    description: 'ML model for 30-day readmission risk',
    longDesc:
      'A machine learning model that predicts 30-day hospital readmission risk using patient demographics, diagnosis codes, medication history, and lab values — helping care teams prioritize discharge planning and follow-up resources.',
    tags: ['scikit-learn', 'Python', 'XGBoost', 'Clinical ML', 'Pandas'],
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME',
    status: 'placeholder',
    accent: '#f472b6',
    icon: '📈',
  },
  {
    title: 'Medication Adherence Tracker',
    description: 'Mobile-first patient engagement app',
    longDesc:
      'A progressive web app that helps chronic disease patients track their medication schedules, log symptoms, and share adherence data directly with their pharmacist — closing the loop between dispensing and patient outcomes.',
    tags: ['React', 'PWA', 'Node.js', 'Health UX', 'Notifications'],
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME',
    status: 'placeholder',
    accent: '#34d399',
    icon: '📱',
  },
]

function StatusBadge({ status }: { status: Project['status'] }) {
  const map = {
    live: { label: '● Live', color: '#34d399', bg: 'rgba(52,211,153,0.12)' },
    wip: { label: '◐ In Progress', color: '#f0a500', bg: 'rgba(240,165,0,0.12)' },
    placeholder: { label: '○ Planned', color: '#8fa3c0', bg: 'rgba(143,163,192,0.12)' },
  }
  const s = map[status]
  return (
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.72rem',
      color: s.color,
      background: s.bg,
      padding: '0.2rem 0.6rem',
      borderRadius: '20px',
    }}>
      {s.label}
    </span>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section
      id="projects"
      style={{
        padding: '7rem 0',
        background: 'linear-gradient(180deg, #04091a 0%, #060e22 100%)',
        position: 'relative',
      }}
    >
      <div className="noise-overlay" />
      <div className="glow-dot" style={{ width: 500, height: 500, background: 'rgba(0,212,255,0.05)', top: '0', right: '-10%' }} />

      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label">Live Work</p>
          <h2 className="section-title">
            Ideas That <span className="highlight">Ship</span>
          </h2>
          <p style={{ maxWidth: '560px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Every project here solves a real clinical problem. Click through and see what I've built — and what's coming next. If a project speaks to you, let's talk.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}
          className="projects-grid"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, borderColor: project.accent + '44' }}
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Accent top bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: `linear-gradient(90deg, ${project.accent}, transparent)`,
              }} />

              {/* Icon and status */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ fontSize: '2rem' }}>{project.icon}</div>
                <StatusBadge status={project.status} />
              </div>

              {/* Title and desc */}
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '0.3rem',
              }}>{project.title}</h3>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: project.accent,
                marginBottom: '0.85rem',
              }}>{project.description}</p>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                flex: 1,
                marginBottom: '1.25rem',
              }}>{project.longDesc}</p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag" style={{ fontSize: '0.72rem', padding: '0.2rem 0.65rem' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: '0.55rem 1.1rem', fontSize: '0.82rem' }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FiExternalLink size={14} /> Live Demo
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{ padding: '0.55rem 1.1rem', fontSize: '0.82rem' }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FiGithub size={14} /> Code
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
