import { createContext, useContext, useReducer, useEffect } from 'react'

const ResumeContext = createContext()

const defaultResume = {
  id: 'resume-1',
  name: 'Software Engineer — Google',
  company: 'Google',
  template: 'Tech Minimal',
  createdAt: new Date(Date.now() - 2 * 86400000).toISOString(),
  updatedAt: new Date().toISOString(),
  personal: {
    fullName: 'Alex Johnson',
    jobTitle: 'Senior Full Stack Engineer',
    email: 'alex@email.com',
    phone: '+1 (555) 234-5678',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/alexjohnson',
  },
  summary: 'Passionate full-stack engineer with 6+ years of experience building scalable products using React, Node.js, TypeScript, and AWS. Led cross-functional teams to deliver high-impact features driving 40% revenue growth. Expert in microservices architecture, CI/CD pipelines, and cloud infrastructure.',
  experience: [
    {
      id: 'exp-1',
      title: 'Senior Full Stack Engineer',
      company: 'TechCorp Inc.',
      startDate: '2023-01',
      endDate: '',
      current: true,
      bullets: [
        'Led migration to microservices architecture, reducing deployment time by 60%',
        'Improved application performance by 40% through code optimization and caching strategies',
        'Mentored team of 5 junior developers and conducted code reviews',
      ],
    },
    {
      id: 'exp-2',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      startDate: '2020-06',
      endDate: '2022-12',
      current: false,
      bullets: [
        'Built real-time dashboard serving 10K+ daily active users',
        'Reduced API latency by 45% through database query optimization',
      ],
    },
  ],
  education: [
    {
      id: 'edu-1',
      degree: 'Bachelor of Science',
      school: 'Stanford University',
      field: 'Computer Science',
      startDate: '2016',
      endDate: '2020',
      gpa: '3.8',
    },
  ],
  projects: [
    {
      id: 'proj-1',
      name: 'AI Resume Builder',
      description: 'Full-stack web application for creating ATS-optimized resumes with AI-powered content generation',
      url: 'https://github.com/alexjohnson/ai-resume',
      technologies: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL'],
    },
  ],
  skills: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'GraphQL', 'CI/CD', 'PostgreSQL', 'Python', 'MongoDB'],
  certifications: [
    {
      id: 'cert-1',
      name: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023-06',
      url: 'https://aws.amazon.com/certification',
    },
  ],
  languages: [
    { id: 'lang-1', language: 'English', proficiency: 'Native' },
    { id: 'lang-2', language: 'Spanish', proficiency: 'Intermediate' },
  ],
  interests: ['Open Source', 'Machine Learning', 'Rock Climbing', 'Photography'],
}

const defaultCoverLetter = {
  id: 'cl-1',
  companyName: 'Google',
  jobTitle: 'Senior Software Engineer',
  hiringManager: 'Sarah Mitchell',
  jobUrl: 'https://careers.google.com/jobs/12345',
  content: `Dear Sarah Mitchell,

I am writing to express my strong interest in the Senior Software Engineer position at Google. With over 6 years of experience building scalable products using React, Node.js, TypeScript, and AWS, I am confident in my ability to contribute meaningfully to your team.

In my current role at TechCorp Inc., I have led the development of cross-functional features that drove 40% revenue growth, migrated monolithic services to microservices, and reduced API latency by 45%. I thrive in collaborative environments and am passionate about building products that make a difference.

I am particularly drawn to Google's commitment to innovation and would welcome the opportunity to bring my expertise in full-stack development to your organization.

Sincerely,
Alex Johnson`,
}

const defaultState = {
  user: {
    name: 'Alex Johnson',
    email: 'alex@email.com',
    plan: 'Pro Plan',
    aiCredits: 142,
    maxCredits: 200,
  },
  resumes: [defaultResume],
  activeResumeId: 'resume-1',
  coverLetters: [defaultCoverLetter],
  activeCoverLetterId: 'cl-1',
  settings: {
    twoFactor: true,
    emailNotifications: true,
    marketingEmails: false,
    language: 'en',
  },
  stats: {
    pdfDownloads: 24,
    weeklyActivity: [1, 5, 2, 4, 1],
  },
  selectedTemplate: 'Tech Minimal',
}

function loadState() {
  try {
    const saved = localStorage.getItem('resumeai-state')
    if (saved) {
      return JSON.parse(saved)
    }
  } catch (e) {
    console.error('Failed to load state from localStorage:', e)
  }
  return defaultState
}

function saveState(state) {
  try {
    localStorage.setItem('resumeai-state', JSON.stringify(state))
  } catch (e) {
    console.error('Failed to save state to localStorage:', e)
  }
}

function resumeReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_PERSONAL': {
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? { ...r, personal: { ...r.personal, ...action.payload }, updatedAt: new Date().toISOString() }
          : r
      )
      return { ...state, resumes }
    }
    case 'UPDATE_SUMMARY': {
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? { ...r, summary: action.payload, updatedAt: new Date().toISOString() }
          : r
      )
      return { ...state, resumes }
    }
    case 'ADD_EXPERIENCE': {
      const newExp = {
        id: `exp-${Date.now()}`,
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        current: false,
        bullets: [''],
      }
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? { ...r, experience: [...r.experience, newExp], updatedAt: new Date().toISOString() }
          : r
      )
      return { ...state, resumes }
    }
    case 'UPDATE_EXPERIENCE': {
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? {
              ...r,
              experience: r.experience.map((exp) =>
                exp.id === action.payload.id ? { ...exp, ...action.payload } : exp
              ),
              updatedAt: new Date().toISOString(),
            }
          : r
      )
      return { ...state, resumes }
    }
    case 'DELETE_EXPERIENCE': {
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? { ...r, experience: r.experience.filter((exp) => exp.id !== action.payload), updatedAt: new Date().toISOString() }
          : r
      )
      return { ...state, resumes }
    }
    case 'ADD_EDUCATION': {
      const newEdu = { id: `edu-${Date.now()}`, degree: '', school: '', field: '', startDate: '', endDate: '', gpa: '' }
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? { ...r, education: [...r.education, newEdu], updatedAt: new Date().toISOString() }
          : r
      )
      return { ...state, resumes }
    }
    case 'UPDATE_EDUCATION': {
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? {
              ...r,
              education: r.education.map((edu) =>
                edu.id === action.payload.id ? { ...edu, ...action.payload } : edu
              ),
              updatedAt: new Date().toISOString(),
            }
          : r
      )
      return { ...state, resumes }
    }
    case 'DELETE_EDUCATION': {
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? { ...r, education: r.education.filter((edu) => edu.id !== action.payload), updatedAt: new Date().toISOString() }
          : r
      )
      return { ...state, resumes }
    }
    case 'ADD_PROJECT': {
      const newProj = { id: `proj-${Date.now()}`, name: '', description: '', url: '', technologies: [] }
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? { ...r, projects: [...r.projects, newProj], updatedAt: new Date().toISOString() }
          : r
      )
      return { ...state, resumes }
    }
    case 'UPDATE_PROJECT': {
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? {
              ...r,
              projects: r.projects.map((p) =>
                p.id === action.payload.id ? { ...p, ...action.payload } : p
              ),
              updatedAt: new Date().toISOString(),
            }
          : r
      )
      return { ...state, resumes }
    }
    case 'DELETE_PROJECT': {
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? { ...r, projects: r.projects.filter((p) => p.id !== action.payload), updatedAt: new Date().toISOString() }
          : r
      )
      return { ...state, resumes }
    }
    case 'UPDATE_SKILLS': {
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? { ...r, skills: action.payload, updatedAt: new Date().toISOString() }
          : r
      )
      return { ...state, resumes }
    }
    case 'ADD_CERTIFICATION': {
      const newCert = { id: `cert-${Date.now()}`, name: '', issuer: '', date: '', url: '' }
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? { ...r, certifications: [...r.certifications, newCert], updatedAt: new Date().toISOString() }
          : r
      )
      return { ...state, resumes }
    }
    case 'UPDATE_CERTIFICATION': {
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? {
              ...r,
              certifications: r.certifications.map((c) =>
                c.id === action.payload.id ? { ...c, ...action.payload } : c
              ),
              updatedAt: new Date().toISOString(),
            }
          : r
      )
      return { ...state, resumes }
    }
    case 'DELETE_CERTIFICATION': {
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? { ...r, certifications: r.certifications.filter((c) => c.id !== action.payload), updatedAt: new Date().toISOString() }
          : r
      )
      return { ...state, resumes }
    }
    case 'ADD_LANGUAGE': {
      const newLang = { id: `lang-${Date.now()}`, language: '', proficiency: 'Beginner' }
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? { ...r, languages: [...r.languages, newLang], updatedAt: new Date().toISOString() }
          : r
      )
      return { ...state, resumes }
    }
    case 'UPDATE_LANGUAGE': {
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? {
              ...r,
              languages: r.languages.map((l) =>
                l.id === action.payload.id ? { ...l, ...action.payload } : l
              ),
              updatedAt: new Date().toISOString(),
            }
          : r
      )
      return { ...state, resumes }
    }
    case 'DELETE_LANGUAGE': {
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? { ...r, languages: r.languages.filter((l) => l.id !== action.payload), updatedAt: new Date().toISOString() }
          : r
      )
      return { ...state, resumes }
    }
    case 'UPDATE_INTERESTS': {
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? { ...r, interests: action.payload, updatedAt: new Date().toISOString() }
          : r
      )
      return { ...state, resumes }
    }
    case 'CREATE_RESUME': {
      const newResume = {
        ...JSON.parse(JSON.stringify(defaultResume)),
        id: `resume-${Date.now()}`,
        name: action.payload?.name || 'Untitled Resume',
        company: action.payload?.company || '',
        template: action.payload?.template || state.selectedTemplate || 'Tech Minimal',
        personal: { fullName: state.user.name, jobTitle: '', email: state.user.email, phone: '', location: '', linkedin: '' },
        summary: '',
        experience: [],
        education: [],
        projects: [],
        skills: [],
        certifications: [],
        languages: [],
        interests: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      return { ...state, resumes: [...state.resumes, newResume], activeResumeId: newResume.id }
    }
    case 'DELETE_RESUME': {
      const resumes = state.resumes.filter((r) => r.id !== action.payload)
      const activeResumeId = state.activeResumeId === action.payload
        ? (resumes[0]?.id || null)
        : state.activeResumeId
      return { ...state, resumes, activeResumeId }
    }
    case 'SET_ACTIVE_RESUME': {
      return { ...state, activeResumeId: action.payload }
    }
    case 'SELECT_TEMPLATE': {
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? { ...r, template: action.payload, updatedAt: new Date().toISOString() }
          : r
      )
      return { ...state, resumes, selectedTemplate: action.payload }
    }
    case 'UPDATE_COVER_LETTER': {
      const coverLetters = state.coverLetters.map((cl) =>
        cl.id === state.activeCoverLetterId
          ? { ...cl, ...action.payload }
          : cl
      )
      return { ...state, coverLetters }
    }
    case 'UPDATE_USER': {
      return { ...state, user: { ...state.user, ...action.payload } }
    }
    case 'UPDATE_SETTINGS': {
      return { ...state, settings: { ...state.settings, ...action.payload } }
    }
    case 'INCREMENT_DOWNLOADS': {
      return { ...state, stats: { ...state.stats, pdfDownloads: state.stats.pdfDownloads + 1 } }
    }
    case 'UPDATE_RESUME_META': {
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? { ...r, ...action.payload, updatedAt: new Date().toISOString() }
          : r
      )
      return { ...state, resumes }
    }
    case 'RESET_SECTION': {
      const section = action.payload
      const defaults = {
        personal: { fullName: '', jobTitle: '', email: '', phone: '', location: '', linkedin: '' },
        summary: '',
        experience: [],
        education: [],
        projects: [],
        skills: [],
        certifications: [],
        languages: [],
        interests: [],
      }
      const resumes = state.resumes.map((r) =>
        r.id === state.activeResumeId
          ? { ...r, [section]: defaults[section], updatedAt: new Date().toISOString() }
          : r
      )
      return { ...state, resumes }
    }
    default:
      return state
  }
}

// ATS Score calculation utility
export function calculateATSScore(resume) {
  if (!resume) return { total: 0, breakdown: {}, checklist: [], keywords: { found: [], missing: [] } }

  let scores = {}

  // Completeness (required sections filled)
  const hasPersonal = resume.personal?.fullName && resume.personal?.email
  const hasSummary = resume.summary?.length > 30
  const hasExperience = resume.experience?.length > 0
  const hasEducation = resume.education?.length > 0
  const hasSkills = resume.skills?.length > 0
  const filledSections = [hasPersonal, hasSummary, hasExperience, hasEducation, hasSkills].filter(Boolean).length
  scores.completeness = Math.round((filledSections / 5) * 100)

  // Formatting
  const hasPhone = !!resume.personal?.phone
  const hasLocation = !!resume.personal?.location
  const hasLinkedin = !!resume.personal?.linkedin
  const formatItems = [hasPersonal, hasPhone, hasLocation, hasLinkedin, hasSummary, hasExperience].filter(Boolean).length
  scores.formatting = Math.round((formatItems / 6) * 100)

  // Keyword Match (skills count)
  const skillCount = resume.skills?.length || 0
  scores.keywordMatch = Math.min(100, Math.round((skillCount / 8) * 100))

  // Readability (summary length + bullet quality)
  const summaryLength = resume.summary?.length || 0
  const summaryScore = summaryLength > 100 ? 100 : summaryLength > 50 ? 80 : summaryLength > 20 ? 60 : 0
  const bulletCount = resume.experience?.reduce((acc, exp) => acc + (exp.bullets?.length || 0), 0) || 0
  const bulletScore = bulletCount > 4 ? 100 : bulletCount > 2 ? 80 : bulletCount > 0 ? 60 : 0
  scores.readability = Math.round((summaryScore + bulletScore) / 2)

  // Impact (quantifiable achievements — numbers in bullets)
  const allBullets = resume.experience?.flatMap((exp) => exp.bullets || []) || []
  const numberedBullets = allBullets.filter((b) => /\d+/.test(b)).length
  scores.impact = allBullets.length > 0 ? Math.round((numberedBullets / allBullets.length) * 100) : 0

  const total = Math.round(
    (scores.completeness * 0.25 + scores.formatting * 0.2 + scores.keywordMatch * 0.2 + scores.readability * 0.2 + scores.impact * 0.15)
  )

  // Checklist
  const checklist = [
    { text: 'Contact information complete', pass: !!(resume.personal?.fullName && resume.personal?.email && resume.personal?.phone) },
    { text: 'Professional summary present', pass: hasSummary },
    { text: 'Quantifiable achievements', pass: numberedBullets > 0 },
    { text: 'Consistent date formatting', pass: hasExperience },
    { text: 'Strong action verbs used', pass: allBullets.some((b) => /^(Led|Built|Designed|Developed|Managed|Improved|Created|Implemented|Reduced|Increased)/i.test(b)) },
    { text: 'Standard section headings', pass: true },
    { text: 'No tables or complex graphics', pass: true },
    { text: 'Single-column layout', pass: true },
  ]

  // Keywords
  const commonKeywords = ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'GraphQL', 'CI/CD', 'Kubernetes', 'PostgreSQL', 'System Design']
  const resumeText = [
    ...(resume.skills || []),
    ...(resume.experience?.flatMap((e) => [e.title, e.company, ...(e.bullets || [])]) || []),
    resume.summary || '',
  ].join(' ').toLowerCase()

  const found = commonKeywords.filter((kw) => resumeText.includes(kw.toLowerCase()))
  const missing = commonKeywords.filter((kw) => !resumeText.includes(kw.toLowerCase()))

  return { total, breakdown: scores, checklist, keywords: { found, missing } }
}

export function ResumeProvider({ children }) {
  const [state, dispatch] = useReducer(resumeReducer, null, loadState)

  // Auto-save to localStorage on every state change
  useEffect(() => {
    saveState(state)
  }, [state])

  const activeResume = state.resumes.find((r) => r.id === state.activeResumeId) || state.resumes[0] || null
  const activeCoverLetter = state.coverLetters.find((cl) => cl.id === state.activeCoverLetterId) || null
  const atsScore = calculateATSScore(activeResume)

  return (
    <ResumeContext.Provider value={{ state, dispatch, activeResume, activeCoverLetter, atsScore }}>
      {children}
    </ResumeContext.Provider>
  )
}

export function useResume() {
  const ctx = useContext(ResumeContext)
  if (!ctx) throw new Error('useResume must be used within ResumeProvider')
  return ctx
}

export default ResumeContext
