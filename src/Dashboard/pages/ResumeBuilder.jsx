import { useState } from 'react'
import { FiUser, FiAlignLeft, FiBriefcase, FiBook, FiFolder, FiStar, FiAward, FiGlobe, FiHeart, FiDownload, FiRefreshCw, FiCheck, FiPlus, FiTrash2, FiX } from 'react-icons/fi'
import { RiSparkling2Fill } from 'react-icons/ri'
import { useResume } from '../../context/ResumeContext'

export default function ResumeBuilder() {
  const { state, dispatch, activeResume, atsScore } = useResume()
  const [activeSection, setActiveSection] = useState('personal')
  const [saved, setSaved] = useState(false)
  const [skillInput, setSkillInput] = useState('')
  const [interestInput, setInterestInput] = useState('')

  if (!activeResume) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        <p>Create a resume first to start building.</p>
      </div>
    )
  }

  const sections = [
    { id: 'personal', label: 'Personal Info', icon: FiUser },
    { id: 'summary', label: 'Summary', icon: FiAlignLeft },
    { id: 'experience', label: 'Experience', icon: FiBriefcase },
    { id: 'education', label: 'Education', icon: FiBook },
    { id: 'projects', label: 'Projects', icon: FiFolder },
    { id: 'skills', label: 'Skills', icon: FiStar },
    { id: 'certifications', label: 'Certifications', icon: FiAward },
    { id: 'languages', label: 'Languages', icon: FiGlobe },
    { id: 'interests', label: 'Interests', icon: FiHeart },
  ]

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleReset = () => {
    dispatch({ type: 'RESET_SECTION', payload: activeSection })
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'personal':
        return (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {['fullName', 'jobTitle', 'email', 'phone', 'location', 'linkedin'].map((field) => (
              <div key={field}>
                <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block uppercase">
                  {field.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                <input
                  type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                  value={activeResume.personal?.[field] || ''}
                  onChange={(e) => dispatch({ type: 'UPDATE_PERSONAL', payload: { [field]: e.target.value } })}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
                />
              </div>
            ))}
          </form>
        )
      case 'summary':
        return (
          <div className="mt-8">
            <textarea
              value={activeResume.summary || ''}
              onChange={(e) => dispatch({ type: 'UPDATE_SUMMARY', payload: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full h-48 resize-none"
              placeholder="Write a brief professional summary..."
            />
            <div className="text-right text-xs text-gray-500 mt-2">
              {activeResume.summary?.length || 0}/500
            </div>
          </div>
        )
      case 'experience':
        return (
          <div className="mt-8">
            {(activeResume.experience || []).map((exp) => (
              <div key={exp.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-4 relative">
                <button
                  onClick={() => dispatch({ type: 'DELETE_EXPERIENCE', payload: exp.id })}
                  className="absolute top-5 right-5 text-red-400 hover:text-red-300 transition"
                >
                  <FiTrash2 size={16} />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pr-8">
                  <div>
                    <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">TITLE</label>
                    <input
                      type="text"
                      value={exp.title || ''}
                      onChange={(e) => dispatch({ type: 'UPDATE_EXPERIENCE', payload: { id: exp.id, title: e.target.value } })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">COMPANY</label>
                    <input
                      type="text"
                      value={exp.company || ''}
                      onChange={(e) => dispatch({ type: 'UPDATE_EXPERIENCE', payload: { id: exp.id, company: e.target.value } })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">START DATE</label>
                    <input
                      type="month"
                      value={exp.startDate || ''}
                      onChange={(e) => dispatch({ type: 'UPDATE_EXPERIENCE', payload: { id: exp.id, startDate: e.target.value } })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block flex justify-between">
                      <span>END DATE</span>
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={exp.current || false}
                          onChange={(e) => dispatch({ type: 'UPDATE_EXPERIENCE', payload: { id: exp.id, current: e.target.checked } })}
                        />
                        <span className="normal-case tracking-normal">Currently working here</span>
                      </label>
                    </label>
                    <input
                      type="month"
                      value={exp.endDate || ''}
                      disabled={exp.current}
                      onChange={(e) => dispatch({ type: 'UPDATE_EXPERIENCE', payload: { id: exp.id, endDate: e.target.value } })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full disabled:opacity-50 [color-scheme:dark]"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">BULLETS</label>
                  {(exp.bullets || []).map((bullet, idx) => (
                    <div key={idx} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={bullet}
                        onChange={(e) => {
                          const newBullets = [...exp.bullets]
                          newBullets[idx] = e.target.value
                          dispatch({ type: 'UPDATE_EXPERIENCE', payload: { id: exp.id, bullets: newBullets } })
                        }}
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white outline-none focus:border-violet-500 transition flex-1"
                      />
                      <button
                        onClick={() => {
                          const newBullets = exp.bullets.filter((_, i) => i !== idx)
                          dispatch({ type: 'UPDATE_EXPERIENCE', payload: { id: exp.id, bullets: newBullets } })
                        }}
                        className="text-red-400 p-2 hover:bg-white/5 rounded-xl transition"
                      >
                        <FiX size={16} />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => dispatch({ type: 'UPDATE_EXPERIENCE', payload: { id: exp.id, bullets: [...(exp.bullets || []), ''] } })}
                    className="text-violet-400 text-sm hover:text-violet-300 transition flex items-center gap-1 mt-2"
                  >
                    <FiPlus size={14} /> Add Bullet
                  </button>
                </div>
              </div>
            ))}
            <button
              onClick={() => dispatch({ type: 'ADD_EXPERIENCE' })}
              className="w-full border border-dashed border-white/20 hover:border-violet-500 hover:bg-white/5 rounded-2xl p-4 text-violet-400 transition flex items-center justify-center gap-2"
            >
              <FiPlus size={18} /> Add Experience
            </button>
          </div>
        )
      case 'education':
        return (
          <div className="mt-8">
            {(activeResume.education || []).map((edu) => (
              <div key={edu.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-4 relative">
                <button
                  onClick={() => dispatch({ type: 'DELETE_EDUCATION', payload: edu.id })}
                  className="absolute top-5 right-5 text-red-400 hover:text-red-300 transition"
                >
                  <FiTrash2 size={16} />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-8">
                  <div>
                    <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">DEGREE</label>
                    <input
                      type="text"
                      value={edu.degree || ''}
                      onChange={(e) => dispatch({ type: 'UPDATE_EDUCATION', payload: { id: edu.id, degree: e.target.value } })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">SCHOOL</label>
                    <input
                      type="text"
                      value={edu.school || ''}
                      onChange={(e) => dispatch({ type: 'UPDATE_EDUCATION', payload: { id: edu.id, school: e.target.value } })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">FIELD OF STUDY</label>
                    <input
                      type="text"
                      value={edu.field || ''}
                      onChange={(e) => dispatch({ type: 'UPDATE_EDUCATION', payload: { id: edu.id, field: e.target.value } })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">START DATE</label>
                    <input
                      type="month"
                      value={edu.startDate || ''}
                      onChange={(e) => dispatch({ type: 'UPDATE_EDUCATION', payload: { id: edu.id, startDate: e.target.value } })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">END DATE</label>
                    <input
                      type="month"
                      value={edu.endDate || ''}
                      onChange={(e) => dispatch({ type: 'UPDATE_EDUCATION', payload: { id: edu.id, endDate: e.target.value } })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full [color-scheme:dark]"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">GPA</label>
                    <input
                      type="text"
                      value={edu.gpa || ''}
                      onChange={(e) => dispatch({ type: 'UPDATE_EDUCATION', payload: { id: edu.id, gpa: e.target.value } })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={() => dispatch({ type: 'ADD_EDUCATION' })}
              className="w-full border border-dashed border-white/20 hover:border-violet-500 hover:bg-white/5 rounded-2xl p-4 text-violet-400 transition flex items-center justify-center gap-2"
            >
              <FiPlus size={18} /> Add Education
            </button>
          </div>
        )
      case 'projects':
        return (
          <div className="mt-8">
            {(activeResume.projects || []).map((proj) => (
              <div key={proj.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-4 relative">
                <button
                  onClick={() => dispatch({ type: 'DELETE_PROJECT', payload: proj.id })}
                  className="absolute top-5 right-5 text-red-400 hover:text-red-300 transition"
                >
                  <FiTrash2 size={16} />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-8 mb-4">
                  <div>
                    <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">PROJECT NAME</label>
                    <input
                      type="text"
                      value={proj.name || ''}
                      onChange={(e) => dispatch({ type: 'UPDATE_PROJECT', payload: { id: proj.id, name: e.target.value } })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">URL</label>
                    <input
                      type="url"
                      value={proj.url || ''}
                      onChange={(e) => dispatch({ type: 'UPDATE_PROJECT', payload: { id: proj.id, url: e.target.value } })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">TECHNOLOGIES (Comma separated)</label>
                    <input
                      type="text"
                      value={(proj.technologies || []).join(', ')}
                      onChange={(e) => dispatch({ type: 'UPDATE_PROJECT', payload: { id: proj.id, technologies: e.target.value.split(',').map(s => s.trim()).filter(Boolean) } })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
                      placeholder="React, Node, MongoDB..."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">DESCRIPTION</label>
                    <textarea
                      value={proj.description || ''}
                      onChange={(e) => dispatch({ type: 'UPDATE_PROJECT', payload: { id: proj.id, description: e.target.value } })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full h-24 resize-none"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={() => dispatch({ type: 'ADD_PROJECT' })}
              className="w-full border border-dashed border-white/20 hover:border-violet-500 hover:bg-white/5 rounded-2xl p-4 text-violet-400 transition flex items-center justify-center gap-2"
            >
              <FiPlus size={18} /> Add Project
            </button>
          </div>
        )
      case 'skills':
        return (
          <div className="mt-8">
            <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">ADD SKILL</label>
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && skillInput.trim()) {
                  e.preventDefault()
                  dispatch({ type: 'UPDATE_SKILLS', payload: [...(activeResume.skills || []), skillInput.trim()] })
                  setSkillInput('')
                }
              }}
              placeholder="Press Enter to add skill"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full mb-4"
            />
            <div className="flex flex-wrap gap-2">
              {(activeResume.skills || []).map((skill, idx) => (
                <div key={idx} className="bg-violet-500/20 text-violet-300 rounded-full px-3 py-1 text-sm flex items-center gap-2">
                  {skill}
                  <button
                    onClick={() => {
                      const newSkills = activeResume.skills.filter((_, i) => i !== idx)
                      dispatch({ type: 'UPDATE_SKILLS', payload: newSkills })
                    }}
                    className="hover:text-white transition"
                  >
                    <FiX size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )
      case 'certifications':
        return (
          <div className="mt-8">
            {(activeResume.certifications || []).map((cert) => (
              <div key={cert.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-4 relative">
                <button
                  onClick={() => dispatch({ type: 'DELETE_CERTIFICATION', payload: cert.id })}
                  className="absolute top-5 right-5 text-red-400 hover:text-red-300 transition"
                >
                  <FiTrash2 size={16} />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-8">
                  <div>
                    <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">NAME</label>
                    <input
                      type="text"
                      value={cert.name || ''}
                      onChange={(e) => dispatch({ type: 'UPDATE_CERTIFICATION', payload: { id: cert.id, name: e.target.value } })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">ISSUER</label>
                    <input
                      type="text"
                      value={cert.issuer || ''}
                      onChange={(e) => dispatch({ type: 'UPDATE_CERTIFICATION', payload: { id: cert.id, issuer: e.target.value } })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">DATE</label>
                    <input
                      type="month"
                      value={cert.date || ''}
                      onChange={(e) => dispatch({ type: 'UPDATE_CERTIFICATION', payload: { id: cert.id, date: e.target.value } })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">URL</label>
                    <input
                      type="url"
                      value={cert.url || ''}
                      onChange={(e) => dispatch({ type: 'UPDATE_CERTIFICATION', payload: { id: cert.id, url: e.target.value } })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={() => dispatch({ type: 'ADD_CERTIFICATION' })}
              className="w-full border border-dashed border-white/20 hover:border-violet-500 hover:bg-white/5 rounded-2xl p-4 text-violet-400 transition flex items-center justify-center gap-2"
            >
              <FiPlus size={18} /> Add Certification
            </button>
          </div>
        )
      case 'languages':
        return (
          <div className="mt-8">
            {(activeResume.languages || []).map((lang) => (
              <div key={lang.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-4 relative">
                <button
                  onClick={() => dispatch({ type: 'DELETE_LANGUAGE', payload: lang.id })}
                  className="absolute top-5 right-5 text-red-400 hover:text-red-300 transition"
                >
                  <FiTrash2 size={16} />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-8">
                  <div>
                    <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">LANGUAGE</label>
                    <input
                      type="text"
                      value={lang.language || ''}
                      onChange={(e) => dispatch({ type: 'UPDATE_LANGUAGE', payload: { id: lang.id, language: e.target.value } })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">PROFICIENCY</label>
                    <select
                      value={lang.proficiency || 'Beginner'}
                      onChange={(e) => dispatch({ type: 'UPDATE_LANGUAGE', payload: { id: lang.id, proficiency: e.target.value } })}
                      className="bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
                    >
                      <option value="Native">Native</option>
                      <option value="Fluent">Fluent</option>
                      <option value="Advanced">Advanced</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Beginner">Beginner</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={() => dispatch({ type: 'ADD_LANGUAGE' })}
              className="w-full border border-dashed border-white/20 hover:border-violet-500 hover:bg-white/5 rounded-2xl p-4 text-violet-400 transition flex items-center justify-center gap-2"
            >
              <FiPlus size={18} /> Add Language
            </button>
          </div>
        )
      case 'interests':
        return (
          <div className="mt-8">
            <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">ADD INTEREST</label>
            <input
              type="text"
              value={interestInput}
              onChange={(e) => setInterestInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && interestInput.trim()) {
                  e.preventDefault()
                  dispatch({ type: 'UPDATE_INTERESTS', payload: [...(activeResume.interests || []), interestInput.trim()] })
                  setInterestInput('')
                }
              }}
              placeholder="Press Enter to add interest"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full mb-4"
            />
            <div className="flex flex-wrap gap-2">
              {(activeResume.interests || []).map((interest, idx) => (
                <div key={idx} className="bg-violet-500/20 text-violet-300 rounded-full px-3 py-1 text-sm flex items-center gap-2">
                  {interest}
                  <button
                    onClick={() => {
                      const newInterests = activeResume.interests.filter((_, i) => i !== idx)
                      dispatch({ type: 'UPDATE_INTERESTS', payload: newInterests })
                    }}
                    className="hover:text-white transition"
                  >
                    <FiX size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  const handlePrint = () => {
    window.print()
    dispatch({ type: 'INCREMENT_DOWNLOADS' })
  }

  const atsColor = atsScore?.total >= 80 ? 'from-green-500 to-emerald-500' : atsScore?.total >= 60 ? 'from-yellow-500 to-amber-500' : 'from-red-500 to-rose-500'

  return (
    <div className="flex h-full relative">
      {/* Left Sidebar */}
      <div className="w-56 min-w-[14rem] bg-white/5 border-r border-white/10 p-5 overflow-y-auto">
        <h3 className="text-xs text-gray-500 font-semibold tracking-wider mb-4">SECTIONS</h3>
        <nav className="flex flex-col gap-1">
          {sections.map((section) => {
            const Icon = section.icon
            const isActive = activeSection === section.id
            return (
              <div
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-3 text-sm rounded-lg px-3 py-2.5 cursor-pointer transition ${
                  isActive
                    ? 'bg-violet-600 text-white font-medium'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={16} />
                {section.label}
              </div>
            )
          })}
        </nav>
      </div>

      {/* Center Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-white">{sections.find(s => s.id === activeSection)?.label}</h1>
            <p className="text-gray-400 text-sm mt-1">All changes sync to live preview</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={handleReset} className="bg-white/5 border border-white/10 rounded-xl p-2.5 hover:bg-white/10 transition text-white" title="Reset Section">
              <FiRefreshCw size={18} />
            </button>
            <button onClick={handleSave} className="bg-violet-600 hover:bg-violet-700 rounded-xl px-5 py-2.5 text-white font-medium flex items-center gap-2 transition w-28 justify-center">
              {saved ? <FiCheck size={18} /> : 'Save'}
            </button>
          </div>
        </div>

        {renderSection()}
      </div>

      {/* Right Panel */}
      <div className="w-72 min-w-[18rem] border-l border-white/10 p-5 flex flex-col relative overflow-y-auto hidden lg:flex bg-zinc-900">
        <div className="flex justify-between items-center">
          <h3 className="text-xs text-gray-500 font-semibold tracking-wider">LIVE PREVIEW</h3>
          <button onClick={handlePrint} className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-gray-400 hover:text-white transition flex items-center gap-1.5">
            <FiDownload size={14} />
            PDF
          </button>
        </div>

        {/* Resume Preview Card */}
        <div className="bg-white rounded-lg p-4 mt-4 flex-1 overflow-y-auto text-black print:text-black">
          <h2 className="text-xs font-bold text-gray-900">{activeResume.personal?.fullName || 'Your Name'}</h2>
          {activeResume.personal?.jobTitle && <p className="text-[7px] text-violet-600">{activeResume.personal?.jobTitle}</p>}
          <p className="text-[6px] text-gray-500 mt-0.5">
            {[activeResume.personal?.email, activeResume.personal?.location, activeResume.personal?.phone].filter(Boolean).join(' · ')}
          </p>
          
          <div className="border-t border-gray-200 my-2"></div>
          
          {activeResume.summary && (
            <>
              <h3 className="text-[7px] font-bold text-gray-700 mb-1">SUMMARY</h3>
              <p className="text-[6px] text-gray-600 leading-relaxed whitespace-pre-wrap">
                {activeResume.summary}
              </p>
            </>
          )}

          {activeResume.experience?.length > 0 && (
            <>
              <h3 className="text-[7px] font-bold text-gray-700 mt-2 mb-1">EXPERIENCE</h3>
              {activeResume.experience.map(exp => (
                <div key={exp.id} className="mb-2">
                  <div className="mb-0.5">
                    <span className="text-[7px] font-semibold text-gray-800">{exp.title}</span>{' '}
                    <span className="text-[6px] text-violet-600">{exp.company}</span>
                    <span className="text-[6px] text-gray-400 float-right">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                  </div>
                  {exp.bullets?.length > 0 && (
                    <ul className="text-[6px] text-gray-600 list-disc pl-2">
                      {exp.bullets.filter(b => b.trim()).map((bullet, i) => <li key={i}>{bullet}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </>
          )}

          {activeResume.education?.length > 0 && (
            <>
              <h3 className="text-[7px] font-bold text-gray-700 mt-2 mb-1">EDUCATION</h3>
              {activeResume.education.map(edu => (
                <div key={edu.id} className="mb-1">
                  <div className="mb-0.5">
                    <span className="text-[7px] font-semibold text-gray-800">{edu.degree} in {edu.field}</span>
                    <span className="text-[6px] text-gray-400 float-right">{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <div className="text-[6px] text-gray-600">{edu.school} {edu.gpa ? `· GPA: ${edu.gpa}` : ''}</div>
                </div>
              ))}
            </>
          )}

          {activeResume.projects?.length > 0 && (
            <>
              <h3 className="text-[7px] font-bold text-gray-700 mt-2 mb-1">PROJECTS</h3>
              {activeResume.projects.map(proj => (
                <div key={proj.id} className="mb-1">
                  <div className="mb-0.5">
                    <span className="text-[7px] font-semibold text-gray-800">{proj.name}</span>
                  </div>
                  <div className="text-[6px] text-gray-600">{proj.description}</div>
                </div>
              ))}
            </>
          )}

          {activeResume.skills?.length > 0 && (
            <>
              <h3 className="text-[7px] font-bold text-gray-700 mt-2 mb-1">SKILLS</h3>
              <div>
                {activeResume.skills.map((skill, i) => (
                  <span key={i} className="bg-gray-100 text-[5px] text-gray-600 px-1.5 py-0.5 rounded inline-block mr-1 mb-1">{skill}</span>
                ))}
              </div>
            </>
          )}
        </div>

        {/* ATS Score Badge */}
        <div className={`mt-4 bg-gradient-to-r ${atsColor} rounded-2xl p-4 text-center text-white`}>
          <p className="text-xs opacity-80">ATS Score</p>
          <p className="text-3xl font-bold">{atsScore?.total || 0}%</p>
        </div>

        {/* AI fab button */}
        <div className="absolute bottom-6 right-6 bg-violet-600 rounded-full p-3.5 shadow-lg shadow-violet-500/30 hover:bg-violet-700 transition cursor-pointer text-white text-xl">
          <RiSparkling2Fill />
        </div>
      </div>
    </div>
  )
}
