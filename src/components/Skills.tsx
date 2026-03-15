import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    category: 'Clinical & Pharmaceutical',
    color: '#00d4ff',
    emoji: '⚕️',
    skills: [
      { name: 'Drug Therapy Management', level: 95 },
      { name: 'Pharmacovigilance', level: 90 },
      { name: 'Clinical Decision Support', level: 88 },
      { name: 'Drug Interaction Analysis', level: 93 },
      { name: 'Regulatory Compliance (NAFDAC)', level: 85 },
    ],
  },
  {
    category: 'Health Informatics & AI',
    color: '#00b89c',
    emoji: '🧠',
    skills: [
      { name: 'Electronic Health Records (EHR)', level: 88 },
      { name: 'Clinical Data Analytics', level: 82 },
      { name: 'AI in Healthcare', level: 80 },
      { name: 'Health Data Visualization', level: 85 },
      { name: 'FHIR / HL7 Standards', level: 75 },
    ],
  },
  {
    category: 'Technology & Development',
    color: '#f0a500',
    emoji: '💻',
    skills: [
      { name: 'Python (Data Science)', level: 78 },
      { name: 'React & TypeScript', level: 72 },
      { name: 'SQL & Database Design', level: 80 },
      { name: 'Machine Learning Basics', level: 70 },
      { name: 'Medical Prompt Engineering', level: 88 },
    ],
  },
]

const tools = [
  'Python', 'React', 'TypeScript', 'SQL', 'Power BI', 'Tableau',
  'TensorFlow', 'Jupyter', 'FHIR', 'HL7', 'Epic EHR', 'OpenAI API',
  'Claude API', 'scikit-learn', 'Pandas', 'Node.js', 'Vercel', 'Git',
]

function SkillBar({ name, level, color, inView }: { name: string; level: number; color: string; inView: boolean }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{name}</span>
        <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color }}>
          {level}%
        </span>
      </div>
      <div style={{
        height: '5px',
        background: 'rgba(255,255,255,0.06)',
        borderRadius: '3px',
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{
            height: '100%',
            borderRadius: '3px',
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: `0 0 10px ${color}44`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      id="skills"
      style={{
        padding: '7rem 0',
        background: 'linear-gradient(180deg, #060e22 0%, #04091a 100%)',
        position: 'relative',
      }}
    >
      <div className="noise-overlay" />
      <div className="glow-dot" style={{ width: 500, height: 500, background: 'rgba(0,212,255,0.04)', bottom: '-10%', left: '-10%' }} />

      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label">Expertise</p>
          <h2 className="section-title">
            Where Clinical Meets <span className="highlight">Digital</span>
          </h2>
          <p style={{ maxWidth: '560px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            My skillset sits at a rare intersection — deep pharmaceutical knowledge combined with modern AI and data engineering capabilities. This is the combination healthcare tech actually needs.
          </p>
        </motion.div>

        {/* Skill bars grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          marginBottom: '4rem',
        }}
          className="skills-grid"
        >
          {skillCategories.map(({ category, color, emoji, skills }, i) => (
            <motion.div
              key={category}
              className="card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ padding: '2rem' }}
            >
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{emoji}</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color,
                }}>{category}</h3>
              </div>
              {skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} color={color} inView={inView} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tools cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
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
            Tools & Technologies
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center' }}>
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                className="tag"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.04, duration: 0.4 }}
                whileHover={{ scale: 1.08, borderColor: 'var(--accent-cyan)' }}
                style={{ cursor: 'default' }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
