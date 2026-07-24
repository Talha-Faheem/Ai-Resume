import React from 'react';
import { FiDownload, FiCheckCircle, FiXCircle, FiCheck, FiX } from 'react-icons/fi';
import { useResume } from '../../context/ResumeContext';

export default function ATSChecker() {
  const { activeResume, atsScore } = useResume();

  if (!activeResume || !atsScore) {
    return (
      <div className="text-white p-8">
        No active resume selected or ATS score available.
      </div>
    );
  }

  const { total, breakdown, checklist, keywords } = atsScore;

  const circumference = 2 * Math.PI * 85;
  const dashoffset = circumference * (1 - total / 100);

  let scoreLabel = 'Needs Work';
  let gradientStart = '#ef4444'; // red-500
  let gradientEnd = '#f87171';   // red-400
  let textClass = 'text-red-500';

  if (total >= 80) {
    scoreLabel = 'Excellent';
    gradientStart = '#22c55e'; // green-500
    gradientEnd = '#14b8a6';   // teal-500
    textClass = 'text-[#22c55e]';
  } else if (total >= 60) {
    scoreLabel = 'Good';
    gradientStart = '#f59e0b'; // amber-500
    gradientEnd = '#fbbf24';   // amber-400
    textClass = 'text-amber-500';
  }

  const passedCount = checklist.filter(c => c.pass).length;
  const failedCount = checklist.length - passedCount;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">ATS Score Analysis</h1>
          <p className="text-gray-400 mt-1">Comprehensive applicant tracking system compatibility report</p>
        </div>
        <button 
          onClick={() => window.print()}
          className="bg-violet-600 hover:bg-violet-700 rounded-xl px-6 py-3 font-semibold text-white flex items-center gap-2 transition"
        >
          <FiDownload className="w-5 h-5" />
          Export Report
        </button>
      </div>

      {/* Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Score Circle */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center hover:border-violet-500/30 transition-all duration-300">
          <div className="relative w-[200px] h-[200px]">
            <svg width="200" height="200" viewBox="0 0 200 200" className="transform -rotate-90">
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={gradientStart} />
                  <stop offset="100%" stopColor={gradientEnd} />
                </linearGradient>
              </defs>
              <circle
                cx="100"
                cy="100"
                r="85"
                fill="none"
                stroke="#1e293b"
                strokeWidth="12"
              />
              <circle
                cx="100"
                cy="100"
                r="85"
                fill="none"
                stroke="url(#scoreGradient)"
                strokeWidth="12"
                strokeDasharray={circumference}
                strokeDashoffset={dashoffset}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-4xl font-bold text-white relative -top-1">{total}</span>
              <span className="text-sm text-[#9ca3af] relative top-1">ATS Score</span>
              <span className={`text-sm font-medium relative top-3 ${textClass}`}>{scoreLabel}</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm text-center mt-6 max-w-xs">
            Fix the {failedCount} failing checklist {failedCount === 1 ? 'item' : 'items'} to maximize your application success rate.
          </p>
          <div className="flex gap-6 mt-4">
            <span className="text-green-400 flex items-center gap-1.5 text-sm">
              <FiCheck className="w-4 h-4" /> {passedCount} passed
            </span>
            <span className="text-red-400 flex items-center gap-1.5 text-sm">
              <FiX className="w-4 h-4" /> {failedCount} failed
            </span>
          </div>
        </div>

        {/* Score Breakdown */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300">
          <h2 className="text-lg font-semibold text-white mb-6">Score Breakdown</h2>
          <div className="space-y-5">
            {[
              { label: 'Keyword Match', value: breakdown?.keywordMatch || 0, color: 'bg-violet-500' },
              { label: 'Formatting', value: breakdown?.formatting || 0, color: 'bg-violet-500' },
              { label: 'Readability', value: breakdown?.readability || 0, color: 'bg-violet-500' },
              { label: 'Completeness', value: breakdown?.completeness || 0, color: 'bg-green-500' },
              { label: 'Impact Statements', value: breakdown?.impact || 0, color: 'bg-orange-500' }
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 text-sm">{item.label}</span>
                  <span className="text-sm font-medium text-white">{item.value}%</span>
                </div>
                <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                  <div className={`${item.color} rounded-full h-2`} style={{ width: `${item.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Format Checklist */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300 overflow-y-auto max-h-[400px]">
          <h2 className="text-lg font-semibold text-white mb-6">Format Checklist</h2>
          <div className="space-y-3.5">
            {checklist.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                {item.pass ? (
                  <FiCheckCircle className="text-green-400 w-5 h-5 shrink-0" />
                ) : (
                  <FiXCircle className="text-red-400 w-5 h-5 shrink-0" />
                )}
                <span className={item.pass ? "text-gray-300 text-sm" : "text-red-400 text-sm"}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Keyword Analysis */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold text-white">Keyword Analysis</h2>
            <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-medium">{keywords.found.length} found</span>
            <span className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-sm font-medium">{keywords.missing.length} missing</span>
          </div>
          <div className="flex flex-wrap gap-3 mt-5">
            {keywords.found.map((kw, i) => (
              <span key={`f-${i}`} className="bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-2 text-sm flex items-center gap-1.5">
                <FiCheck className="w-4 h-4" /> {kw}
              </span>
            ))}
            {keywords.missing.map((kw, i) => (
              <span key={`m-${i}`} className="bg-red-500/10 text-red-400 border border-red-500/20 rounded-full px-4 py-2 text-sm flex items-center gap-1.5">
                <FiX className="w-4 h-4" /> {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Recommended Additions */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300">
          <h2 className="text-lg font-semibold text-white">Recommended Additions</h2>
          <p className="text-gray-500 text-sm mt-1">Adding these would significantly boost your score:</p>
          <ul className="mt-5 space-y-4">
            {keywords.missing.length === 0 ? (
              <li className="text-green-400 text-sm">Great job! You have all the recommended keywords.</li>
            ) : (
              keywords.missing.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">Include "{item}" in your experience or skills</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
