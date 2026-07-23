import React from 'react';
import { FiFileText, FiTarget, FiDownload, FiChevronRight, FiPlus, FiLayers, FiMail } from 'react-icons/fi';
import { RiSparkling2Fill } from 'react-icons/ri';

export default function DashboardHome() {
  return (
    <div className="text-white space-y-6">
      {/* 1. Greeting Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Good morning, Alex 👋</h1>
          <p className="text-gray-400 mt-1">Your resume performance is up 12% this week. Keep it up!</p>
        </div>
        <button className="bg-violet-600 hover:bg-violet-700 rounded-xl px-6 py-3 font-semibold text-white flex items-center gap-2 transition">
          <FiPlus className="text-xl" />
          <span>New Resume</span>
        </button>
      </div>

      {/* 2. Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {/* Resumes Created */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-violet-500/30 transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center mb-3">
            <FiFileText size={20} />
          </div>
          <div className="text-3xl font-bold text-white mt-3">7</div>
          <div className="text-gray-500 text-sm mt-1">Resumes Created</div>
          <div className="text-green-400 text-sm mt-1 font-medium">↗ +2 this week</div>
        </div>

        {/* Avg ATS Score */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-violet-500/30 transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center mb-3">
            <FiTarget size={20} />
          </div>
          <div className="text-3xl font-bold text-white mt-3">87%</div>
          <div className="text-gray-500 text-sm mt-1">Avg ATS Score</div>
          <div className="text-green-400 text-sm mt-1 font-medium">↗ +5 pts this month</div>
        </div>

        {/* PDF Downloads */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-violet-500/30 transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
            <FiDownload size={20} />
          </div>
          <div className="text-3xl font-bold text-white mt-3">24</div>
          <div className="text-gray-500 text-sm mt-1">PDF Downloads</div>
          <div className="text-green-400 text-sm mt-1 font-medium">↗ +8 this week</div>
        </div>

        {/* AI Credits Left */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-violet-500/30 transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center mb-3">
            <RiSparkling2Fill size={20} />
          </div>
          <div className="text-3xl font-bold text-white mt-3">142</div>
          <div className="text-gray-500 text-sm mt-1">AI Credits Left</div>
          <div className="text-gray-400 text-sm mt-1 font-medium">↗ Resets in 18d</div>
        </div>
      </div>

      {/* 3. Charts Row */}
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* ATS Score Trend */}
        <div className="flex-[2] bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-semibold text-lg">ATS Score Trend</h2>
              <p className="text-gray-500 text-sm">6-month performance</p>
            </div>
            <div className="bg-green-500/10 text-green-400 rounded-full px-3 py-1 text-sm font-medium">
              ↑ +31 pts
            </div>
          </div>
          <div className="w-full h-48 mt-4">
            <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid Lines & Y-Axis Labels */}
              {[100, 90, 80, 70, 60, 50].map((val, idx) => {
                const y = 20 + idx * 32; // Spread evenly, max y=180 for 50
                return (
                  <g key={val}>
                    <line x1="30" y1={y} x2="500" y2={y} stroke="#ffffff" strokeOpacity="0.05" />
                    <text x="20" y={y + 4} fill="#6b7280" fontSize="10" textAnchor="end">{val}</text>
                  </g>
                );
              })}

              {/* X-Axis Labels */}
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, idx) => (
                <text key={month} x={50 + idx * 80} y="195" fill="#6b7280" fontSize="10" textAnchor="middle">{month}</text>
              ))}

              {/* Chart Data Polygon & Polyline */}
              {/* Data points: Jan=58→168, Feb=60→160, Mar=62→152, Apr=65→140, May=72→112, Jun=85→60 */}
              <polygon points="50,180 50,168 130,160 210,152 290,140 370,112 450,60 450,180" fill="url(#gradient)" />
              <polyline points="50,168 130,160 210,152 290,140 370,112 450,60" fill="none" stroke="#8b5cf6" strokeWidth="2.5" />
              
              {/* Data Dots */}
              {[[50,168], [130,160], [210,152], [290,140], [370,112], [450,60]].map(([x,y], i) => (
                <circle key={i} cx={x} cy={y} r="4" fill="#8b5cf6" stroke="#0B1120" strokeWidth="2" />
              ))}
            </svg>
          </div>
        </div>

        {/* Resume Quality */}
        <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6">
          <div>
            <h2 className="font-semibold text-lg">Resume Quality</h2>
            <p className="text-gray-500 text-sm">Multi-dimension analysis</p>
          </div>
          <div className="w-full h-48 mt-4 flex items-center justify-center">
            <svg viewBox="0 0 250 250" className="w-full h-full max-w-[250px] overflow-visible">
              {/* Hexagons */}
              {[35, 65, 95].map(r => (
                <polygon key={r} points={`
                  125,${125-r} 
                  ${125+r*0.866},${125-r*0.5} 
                  ${125+r*0.866},${125+r*0.5} 
                  125,${125+r} 
                  ${125-r*0.866},${125+r*0.5} 
                  ${125-r*0.866},${125-r*0.5}
                `} fill="none" stroke="#ffffff" strokeOpacity="0.1" />
              ))}
              
              {/* Axes lines */}
              {[
                `125,30 125,220`,
                `${125-95*0.866},${125-95*0.5} ${125+95*0.866},${125+95*0.5}`,
                `${125-95*0.866},${125+95*0.5} ${125+95*0.866},${125-95*0.5}`
              ].map((pts, i) => (
                <polyline key={i} points={pts} fill="none" stroke="#ffffff" strokeOpacity="0.1" />
              ))}

              {/* Data Polygon */}
              <polygon points="125,39.5 195,84.6 190.8,163 125,191.5 63.3,160.6 52.6,83.2" fill="#8b5cf6" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="2" />
              
              {/* Data Dots */}
              {[[125,39.5], [195,84.6], [190.8,163], [125,191.5], [63.3,160.6], [52.6,83.2]].map(([x,y], i) => (
                <circle key={i} cx={x} cy={y} r="3" fill="#8b5cf6" />
              ))}

              {/* Labels */}
              <text x="125" y="20" fill="#9ca3af" fontSize="10" textAnchor="middle">ATS</text>
              <text x="215" y="75" fill="#9ca3af" fontSize="10" textAnchor="middle">Keywords</text>
              <text x="215" y="180" fill="#9ca3af" fontSize="10" textAnchor="middle">Format</text>
              <text x="125" y="235" fill="#9ca3af" fontSize="10" textAnchor="middle">Impact</text>
              <text x="35" y="180" fill="#9ca3af" fontSize="10" textAnchor="middle">Clarity</text>
              <text x="35" y="75" fill="#9ca3af" fontSize="10" textAnchor="middle">Length</text>
            </svg>
          </div>
        </div>
      </div>

      {/* 4. Bottom Row */}
      <div className="flex flex-col lg:flex-row gap-6 mt-6 pb-10">
        {/* Recent Resumes */}
        <div className="flex-[1.2] bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Recent Resumes</h2>
            <span className="text-violet-400 text-sm hover:text-violet-300 cursor-pointer">View all →</span>
          </div>
          <div className="divide-y divide-white/5">
            {[
              { title: "Software Engineer — Google", sub: "Tech Minimal · 2d ago", score: "92%", color: "bg-blue-500", scoreColor: "text-green-400" },
              { title: "Senior Dev — Stripe", sub: "Executive Pro · Yesterday", score: "88%", color: "bg-violet-500", scoreColor: "text-green-400" },
              { title: "Full Stack — Airbnb", sub: "Modern Clean · 3d ago", score: "79%", color: "bg-green-500", scoreColor: "text-yellow-400" },
              { title: "Frontend Lead — Meta", sub: "Creative Edge · 5d ago", score: "75%", color: "bg-purple-500", scoreColor: "text-yellow-400" },
            ].map((resume, i) => (
              <div key={i} className="flex items-center gap-4 py-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${resume.color}`}>
                  <FiFileText size={18} />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{resume.title}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{resume.sub}</div>
                </div>
                <div className={`ml-auto font-semibold ${resume.scoreColor}`}>
                  {resume.score}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Quick Actions */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="font-semibold text-lg">Quick Actions</h2>
            <div className="mt-4 space-y-2">
              {[
                { label: "New Resume", icon: FiPlus, color: "bg-blue-500/20 text-blue-400" },
                { label: "Check ATS Score", icon: FiTarget, color: "bg-green-500/20 text-green-400" },
                { label: "Browse Templates", icon: FiLayers, color: "bg-cyan-500/20 text-cyan-400" },
                { label: "Cover Letter", icon: FiMail, color: "bg-orange-500/20 text-orange-400" },
              ].map((action, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition cursor-pointer">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${action.color}`}>
                    <action.icon />
                  </div>
                  <span className="text-gray-300 text-sm">{action.label}</span>
                  <FiChevronRight className="ml-auto text-gray-600" />
                </div>
              ))}
            </div>
          </div>

          {/* This Week */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="font-semibold text-lg">This Week</h2>
            <div className="flex items-end gap-4 mt-4 h-24 justify-center">
              {[
                { label: "Mon", height: "h-3", color: "bg-violet-500/30" },
                { label: "Tue", height: "h-16", color: "bg-violet-500" },
                { label: "Wed", height: "h-5", color: "bg-violet-500/30" },
                { label: "Thu", height: "h-12", color: "bg-violet-500" },
                { label: "Fri", height: "h-4", color: "bg-violet-500/40", current: true },
              ].map((day, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="relative flex flex-col justify-end h-16 w-6">
                    {day.current && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                    )}
                    <div className={`w-6 rounded-t-md ${day.height} ${day.color}`}></div>
                  </div>
                  <span className="text-gray-500 text-xs">{day.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
