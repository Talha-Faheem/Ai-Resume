import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { RiSparkling2Fill } from 'react-icons/ri';

export default function CoverLetter() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Cover Letter Builder</h1>
          <p className="text-gray-400 mt-1">Create compelling cover letters tailored to each job application</p>
        </div>
        <button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-xl px-6 py-3 font-semibold text-white flex items-center gap-2 transition">
          <RiSparkling2Fill className="w-5 h-5" />
          Generate with AI
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Left Col */}
        <div className="lg:col-span-2 space-y-6">
          {/* Job Details Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300">
            <h2 className="text-lg font-semibold text-white mb-4">Job Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">COMPANY NAME</label>
                <input 
                  type="text" 
                  defaultValue="Google" 
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 w-full transition" 
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">JOB TITLE</label>
                <input 
                  type="text" 
                  defaultValue="Senior Software Engineer" 
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 w-full transition" 
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">HIRING MANAGER</label>
                <input 
                  type="text" 
                  defaultValue="Sarah Mitchell" 
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 w-full transition" 
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">JOB URL</label>
                <input 
                  type="text" 
                  defaultValue="https://careers.google.com/jobs/12345" 
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 w-full transition" 
                />
              </div>
            </div>
          </div>

          {/* Letter Content Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-white">Letter Content</h2>
              <span className="text-gray-500 text-sm">324 words</span>
            </div>
            <textarea 
              className="mt-4 w-full h-80 bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300 text-sm leading-relaxed outline-none focus:border-violet-500 resize-none transition"
              defaultValue={`Dear Sarah Mitchell,\n\nI am writing to express my strong interest in the Senior Software Engineer position at Google. With over 6 years of experience building scalable products using React, Node.js, TypeScript, and AWS, I am confident in my ability to contribute meaningfully to your team.\n\nIn my current role at TechCorp Inc., I have led the development of cross-functional features that drove 40% revenue growth, migrated monolithic services to microservices, and reduced API latency by 45%. I thrive in collaborative environments and am passionate about building products that make a difference.\n\nI am particularly drawn to Google's commitment to innovation and would welcome the opportunity to bring my expertise in full-stack development to your organization.\n\nSincerely,\nAlex Johnson`}
            ></textarea>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Improve Tone", "Shorten", "Expand", "Make Formal", "Add Keywords"].map((btn, i) => (
                <button key={i} className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-gray-400 hover:text-white hover:border-violet-500/30 transition cursor-pointer">
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col */}
        <div className="space-y-6">
          {/* Preview Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-violet-500/30 transition-all duration-300">
            <div className="flex justify-between items-center">
              <h2 className="text-xs text-gray-500 font-semibold tracking-wider">PREVIEW</h2>
              <button className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-gray-400 hover:text-white transition flex items-center gap-1.5">
                <FiDownload className="w-4 h-4" /> PDF
              </button>
            </div>
            <div className="bg-white rounded-lg p-5 mt-4 text-[8px] text-gray-700 leading-relaxed shadow-sm">
              <div className="text-gray-500">July 23, 2026</div>
              <div className="mt-4">
                Sarah Mitchell<br />
                Hiring Manager<br />
                Google Inc.
              </div>
              <div className="font-medium mt-3">Dear Sarah Mitchell,</div>
              <p className="mt-2 text-[7px] text-justify">
                I am writing to express my strong interest in the Senior Software Engineer position at Google. With over 6 years of experience building scalable products using React, Node.js, TypeScript, and AWS, I am confident in my ability to contribute meaningfully to your team.
              </p>
              <p className="mt-2 text-[7px] text-justify">
                In my current role at TechCorp Inc., I have led the development of cross-functional features that drove 40% revenue growth, migrated monolithic services to microservices, and reduced API latency by 45%. I thrive in collaborative environments and am passionate about building products that make a difference.
              </p>
              <p className="mt-2 text-[7px] text-justify">
                I am particularly drawn to Google's commitment to innovation and would welcome the opportunity to bring my expertise in full-stack development to your organization.
              </p>
              <div className="mt-3">Sincerely,</div>
              <div className="font-medium">Alex Johnson</div>
            </div>
          </div>

          {/* Tone Analysis Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300">
            <h2 className="text-lg font-semibold text-white mb-4">Tone Analysis</h2>
            <div className="space-y-4">
              {[
                { label: 'Professional', value: '92%', color: 'bg-green-500', width: '92%' },
                { label: 'Confident', value: '85%', color: 'bg-violet-500', width: '85%' },
                { label: 'Engaging', value: '78%', color: 'bg-cyan-500', width: '78%' },
                { label: 'Personalized', value: '70%', color: 'bg-orange-500', width: '70%' }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-300">{item.label}</span>
                    <span className="text-gray-400">{item.value}</span>
                  </div>
                  <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                    <div className={`${item.color} rounded-full h-2`} style={{ width: item.width }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
