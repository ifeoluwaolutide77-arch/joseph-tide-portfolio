import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiStar, FiGitBranch, FiExternalLink, FiCode } from 'react-icons/fi'

// ⚠️ REPLACE with your actual GitHub username
const GITHUB_USERNAME = 'ifeoluwaolutide77-arch'

interface Repo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
  topics: string[]
}

const langColors: Record<string, string> = {
  Python: '#3572A5',
  TypeScript: '#2b7489',
  JavaScript: '#f1e05a',
  R: '#198CE7',
  Jupyter: '#DA5B0B',
  HTML: '#e34c26',
  CSS: '#563d7c',
  default: '#8fa3c0',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

function RepoCard({ repo, index, inView }: { repo: Repo; index: number; inView: boolean }) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, borderColor: 'var(--accent-cyan)' }}
      style={{
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        textDecoration: 'none',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <FiCode style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            color: 'var(--accent-cyan)',
            fontWeight: 500,
          }}>
            {repo.name}
          </span>
        </div>
        <FiExternalLink size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
      </div>

      <p style={{
        fontSize: '0.87rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
        flex: 1,
        minHeight: '2.5rem',
      }}>
        {repo.description || 'No description provided.'}
      </p>

      {repo.topics && repo.topics.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {repo.topics.slice(0, 3).map((t) => (
            <span key={t} className="tag" style={{ fontSize: '0.7rem', padding: '0.15rem 0.55rem' }}>{t}</span>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: 'auto' }}>
        {repo.language && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <div style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: langColors[repo.language] || langColors.default,
            }} />
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{repo.language}</span>
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
          <FiStar size={12} /> {repo.stargazers_count}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
          <FiGitBranch size={12} /> {repo.forks_count}
        </div>
        <span style={{ marginLeft: 'auto', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          {formatDate(repo.updated_at)}
        </span>
      </div>
    </motion.a>
  )
}

export default function GitHubRepos() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!inView || GITHUB_USERNAME === 'ifeoluwaolutide77-arch') return
    setLoading(true)

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=9`)
      .then((r) => {
        if (!r.ok) throw new Error('GitHub API error')
        return r.json()
      })
      .then((data: Repo[]) => {
        setRepos(data.filter((r) => !r.name.includes('.github')).slice(0, 9))
        setLoading(false)
      })
      .catch(() => {
        setError('Could not load repositories. Check your GitHub username in the config.')
        setLoading(false)
      })
  }, [inView])

  const isPlaceholder = GITHUB_USERNAME === 'ifeoluwaolutide77-arch'

  // Placeholder repos for display
  const placeholderRepos: Repo[] = [
    {
      id: 1, name: 'health-insights-dashboard', language: 'TypeScript', stargazers_count: 12, forks_count: 3,
      description: 'Real-time clinical analytics dashboard with AI-powered drug insights and patient data visualization.',
      html_url: '#', updated_at: new Date().toISOString(), topics: ['react', 'health-informatics', 'ai'],
    },
    {
      id: 2, name: 'drug-interaction-nlp', language: 'Python', stargazers_count: 8, forks_count: 2,
      description: 'NLP pipeline for extracting and classifying drug-drug interactions from clinical notes.',
      html_url: '#', updated_at: new Date().toISOString(), topics: ['nlp', 'pharmacy', 'python'],
    },
    {
      id: 3, name: 'fhir-etl-pipeline', language: 'Python', stargazers_count: 5, forks_count: 1,
      description: 'FHIR R4-compliant ETL pipeline for normalizing multi-source EHR data into a unified schema.',
      html_url: '#', updated_at: new Date().toISOString(), topics: ['fhir', 'hl7', 'ehr'],
    },
    {
      id: 4, name: 'readmission-risk-model', language: 'Jupyter', stargazers_count: 7, forks_count: 2,
      description: '30-day hospital readmission risk prediction using gradient boosting and clinical feature engineering.',
      html_url: '#', updated_at: new Date().toISOString(), topics: ['machine-learning', 'clinical', 'xgboost'],
    },
    {
      id: 5, name: 'pharmai-chatbot', language: 'TypeScript', stargazers_count: 14, forks_count: 4,
      description: 'LLM-powered pharmacist assistant that answers drug questions using RAG over clinical databases.',
      html_url: '#', updated_at: new Date().toISOString(), topics: ['llm', 'rag', 'chatbot'],
    },
    {
      id: 6, name: 'medication-adherence-pwa', language: 'JavaScript', stargazers_count: 6, forks_count: 1,
      description: 'Progressive web app for tracking medication adherence and syncing with pharmacist dashboards.',
      html_url: '#', updated_at: new Date().toISOString(), topics: ['pwa', 'react', 'health'],
    },
  ]

  const displayRepos = isPlaceholder ? placeholderRepos : repos

  return (
    <section
      id="github"
      style={{
        padding: '7rem 0',
        background: 'linear-gradient(180deg, #060e22 0%, #04091a 100%)',
        position: 'relative',
      }}
    >
      <div className="noise-overlay" />
      <div className="glow-dot" style={{ width: 450, height: 450, background: 'rgba(0,184,156,0.04)', top: '20%', left: '-5%' }} />

      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <p className="section-label">Open Source</p>
          <h2 className="section-title">
            Code I'm <span className="highlight">Proud Of</span>
          </h2>
          <p style={{ maxWidth: '500px', margin: '0 auto 1.5rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            My GitHub is where ideas become real. Explore my repositories — health tech projects, AI experiments, and clinical data tools.
          </p>
          <motion.a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex' }}
          >
            <FiGithub /> View Full Profile
          </motion.a>
        </motion.div>

        {isPlaceholder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            style={{
              background: 'rgba(240,165,0,0.08)',
              border: '1px solid rgba(240,165,0,0.2)',
              borderRadius: 'var(--radius)',
              padding: '0.85rem 1.25rem',
              marginBottom: '2rem',
              textAlign: 'center',
              color: 'var(--accent-gold)',
              fontSize: '0.88rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            ⚠ Replace <strong>YOUR_GITHUB_USERNAME</strong> in <code>src/components/GitHubRepos.tsx</code> to load your live repositories.
            Showing sample repos below.
          </motion.div>
        )}

        {loading && (
          <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '3rem' }}>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}>
              ◌
            </motion.div>
            <p style={{ marginTop: '0.5rem' }}>Loading repositories...</p>
          </div>
        )}

        {error && (
          <div style={{ textAlign: 'center', color: '#f87171', padding: '2rem', fontSize: '0.9rem' }}>{error}</div>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
        }}
          className="repos-grid"
        >
          {displayRepos.map((repo, i) => (
            <RepoCard key={repo.id} repo={repo} index={i} inView={inView} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .repos-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .repos-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
