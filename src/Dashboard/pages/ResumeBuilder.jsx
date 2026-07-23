import { useState } from 'react'
import { FiUser, FiAlignLeft, FiBriefcase, FiBook, FiFolder, FiStar, FiAward, FiGlobe, FiHeart, FiDownload, FiRefreshCw, FiCheck } from 'react-icons/fi'
import { RiSparkling2Fill } from 'react-icons/ri'

export default function ResumeBuilder() {
  const [activeSection, setActiveSection] = useState('personal')

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

  return (
    <div className="flex h-full relative">
      {/* Left Sidebar */}
      <div className="w-56 min-w-[14rem] bg-white/5 border-r border-white/10 p-5">
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
            <h1 className="text-2xl font-bold text-white">Personal</h1>
            <p className="text-gray-400 text-sm mt-1">All changes sync to live preview</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-white/5 border border-white/10 rounded-xl p-2.5 hover:bg-white/10 transition text-white">
              <FiRefreshCw size={18} />
            </button>
            <button className="bg-violet-600 hover:bg-violet-700 rounded-xl px-5 py-2.5 text-white font-medium flex items-center gap-2 transition">
              <FiCheck size={18} />
              Save
            </button>
          </div>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div>
            <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">FULL NAME</label>
            <input
              type="text"
              defaultValue="Alex Johnson"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">JOB TITLE</label>
            <input
              type="text"
              defaultValue="Senior Full Stack Engineer"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">EMAIL</label>
            <input
              type="email"
              defaultValue="alex@email.com"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">PHONE</label>
            <input
              type="tel"
              defaultValue="+1 (555) 234-5678"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">LOCATION</label>
            <input
              type="text"
              defaultValue="San Francisco, CA"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">LINKEDIN</label>
            <input
              type="text"
              defaultValue="linkedin.com/in/alexjohnson"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
            />
          </div>
        </form>
      </div>

      {/* Right Panel */}
      <div className="w-72 min-w-[18rem] border-l border-white/10 p-5 flex flex-col relative">
        <div className="flex justify-between items-center">
          <h3 className="text-xs text-gray-500 font-semibold tracking-wider">LIVE PREVIEW</h3>
          <button className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-gray-400 hover:text-white transition flex items-center gap-1.5">
            <FiDownload size={14} />
            PDF
          </button>
        </div>

        {/* Resume Preview Card */}
        <div className="bg-white rounded-lg p-4 mt-4 flex-1 overflow-hidden">
          <h2 className="text-xs font-bold text-gray-900">Alex Johnson</h2>
          <p className="text-[7px] text-violet-600">Senior Full Stack Engineer</p>
          <p className="text-[6px] text-gray-500 mt-0.5">alex@email.com · San Francisco, CA</p>
          
          <div className="border-t border-gray-200 my-2"></div>
          
          <h3 className="text-[7px] font-bold text-gray-700 mb-1">SUMMARY</h3>
          <p className="text-[6px] text-gray-600 leading-relaxed">
            Passionate full-stack engineer with 5+ years of experience building scalable web applications.
            Strong focus on modern JavaScript ecosystems and cloud architecture.
          </p>

          <h3 className="text-[7px] font-bold text-gray-700 mt-2 mb-1">EXPERIENCE</h3>
          <div className="mb-1">
            <span className="text-[7px] font-semibold text-gray-800">Senior Full Stack Engineer</span>{' '}
            <span className="text-[6px] text-violet-600">TechCorp Inc.</span>
            <span className="text-[6px] text-gray-400 float-right">2023-Present</span>
          </div>
          <ul className="text-[6px] text-gray-600 list-disc pl-2">
            <li>Led the migration to a microservices architecture.</li>
            <li>Improved application performance by 40%.</li>
          </ul>

          <h3 className="text-[7px] font-bold text-gray-700 mt-2 mb-1">SKILLS</h3>
          <div>
            <span className="bg-gray-100 text-[5px] text-gray-600 px-1.5 py-0.5 rounded inline-block mr-1 mb-1">React</span>
            <span className="bg-gray-100 text-[5px] text-gray-600 px-1.5 py-0.5 rounded inline-block mr-1 mb-1">TypeScript</span>
            <span className="bg-gray-100 text-[5px] text-gray-600 px-1.5 py-0.5 rounded inline-block mr-1 mb-1">Node.js</span>
            <span className="bg-gray-100 text-[5px] text-gray-600 px-1.5 py-0.5 rounded inline-block mr-1 mb-1">AWS</span>
          </div>
        </div>

        {/* ATS Score Badge */}
        <div className="mt-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 text-center text-white">
          <p className="text-xs opacity-80">ATS Score</p>
          <p className="text-3xl font-bold">92%</p>
        </div>

        {/* AI fab button */}
        <div className="absolute bottom-6 right-6 bg-violet-600 rounded-full p-3.5 shadow-lg shadow-violet-500/30 hover:bg-violet-700 transition cursor-pointer text-white text-xl">
          <RiSparkling2Fill />
        </div>
      </div>
    </div>
  )
}
