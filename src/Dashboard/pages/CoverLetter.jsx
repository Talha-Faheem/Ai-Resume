import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { RiSparkling2Fill } from 'react-icons/ri';
import { useResume } from '../../context/ResumeContext';

export default function CoverLetter() {
  const { activeCoverLetter, dispatch } = useResume();
  const [toast, setToast] = useState('');

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 2000);
  };

  if (!activeCoverLetter) {
    return (
      <div className="text-white p-8">
        No active cover letter selected. Please create one first.
      </div>
    );
  }

  const handleChange = (field, value) => {
    dispatch({
      type: 'UPDATE_COVER_LETTER',
      payload: { [field]: value }
    });
  };

  const wordCount = activeCoverLetter.content?.trim().split(/\s+/).filter(Boolean).length || 0;

  const handleImproveTone = () => showToast('AI feature coming soon!');
  
  const handleShorten = () => {
    if (!activeCoverLetter.content) return;
    const sentences = activeCoverLetter.content.match(/[^.!?]+[.!?]+/g) || [];
    const keepCount = Math.ceil(sentences.length * 0.7);
    if (keepCount > 0) {
      handleChange('content', sentences.slice(0, keepCount).join(' ').trim());
    }
  };

  const handleExpand = () => {
    handleChange('content', (activeCoverLetter.content || '') + '\n\nThank you for your time and consideration. I look forward to hearing from you.');
  };

  const handleMakeFormal = () => {
    if (!activeCoverLetter.content) return;
    let newContent = activeCoverLetter.content
      .replace(/\b(thanks)\b/gi, 'thank you')
      .replace(/\b(hi|hey)\b/gi, 'Dear')
      .replace(/\b(job)\b/gi, 'position')
      .replace(/\b(cool)\b/gi, 'excellent');
    handleChange('content', newContent);
  };

  const handleAddKeywords = () => {
    handleChange('content', (activeCoverLetter.content || '') + '\n\nSkills: React, JavaScript, Node.js, Problem Solving');
  };

  const toneBars = [
    { label: 'Professional', value: Math.min(100, 50 + (wordCount / 5)), color: 'bg-green-500' },
    { label: 'Confident', value: Math.min(100, 60 + (wordCount / 10)), color: 'bg-violet-500' },
    { label: 'Engaging', value: Math.min(100, 70 + (wordCount / 8)), color: 'bg-cyan-500' },
    { label: 'Personalized', value: Math.min(100, 40 + (wordCount / 4)), color: 'bg-orange-500' }
  ];

  return (
    <div className="space-y-6 relative">
      {toast && (
        <div className="fixed top-4 right-4 bg-violet-600 text-white px-4 py-2 rounded shadow-lg z-50">
          {toast}
        </div>
      )}
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Cover Letter Builder</h1>
          <p className="text-gray-400 mt-1">Create compelling cover letters tailored to each job application</p>
        </div>
        <button 
          onClick={handleImproveTone}
          className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-xl px-6 py-3 font-semibold text-white flex items-center gap-2 transition"
        >
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
                  value={activeCoverLetter.companyName || ''}
                  onChange={(e) => handleChange('companyName', e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 w-full transition" 
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">JOB TITLE</label>
                <input 
                  type="text" 
                  value={activeCoverLetter.jobTitle || ''}
                  onChange={(e) => handleChange('jobTitle', e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 w-full transition" 
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">HIRING MANAGER</label>
                <input 
                  type="text" 
                  value={activeCoverLetter.hiringManager || ''}
                  onChange={(e) => handleChange('hiringManager', e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 w-full transition" 
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">JOB URL</label>
                <input 
                  type="text" 
                  value={activeCoverLetter.jobUrl || ''}
                  onChange={(e) => handleChange('jobUrl', e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 w-full transition" 
                />
              </div>
            </div>
          </div>

          {/* Letter Content Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-white">Letter Content</h2>
              <span className="text-gray-500 text-sm">{wordCount} words</span>
            </div>
            <textarea 
              value={activeCoverLetter.content || ''}
              onChange={(e) => handleChange('content', e.target.value)}
              className="mt-4 w-full h-80 bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300 text-sm leading-relaxed outline-none focus:border-violet-500 resize-none transition"
            ></textarea>
            <div className="flex flex-wrap gap-2 mt-3">
              <button onClick={handleImproveTone} className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-gray-400 hover:text-white hover:border-violet-500/30 transition cursor-pointer">Improve Tone</button>
              <button onClick={handleShorten} className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-gray-400 hover:text-white hover:border-violet-500/30 transition cursor-pointer">Shorten</button>
              <button onClick={handleExpand} className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-gray-400 hover:text-white hover:border-violet-500/30 transition cursor-pointer">Expand</button>
              <button onClick={handleMakeFormal} className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-gray-400 hover:text-white hover:border-violet-500/30 transition cursor-pointer">Make Formal</button>
              <button onClick={handleAddKeywords} className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-gray-400 hover:text-white hover:border-violet-500/30 transition cursor-pointer">Add Keywords</button>
            </div>
          </div>
        </div>

        {/* Right Col */}
        <div className="space-y-6">
          {/* Preview Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-violet-500/30 transition-all duration-300">
            <div className="flex justify-between items-center">
              <h2 className="text-xs text-gray-500 font-semibold tracking-wider">PREVIEW</h2>
              <button 
                onClick={() => window.print()}
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-gray-400 hover:text-white transition flex items-center gap-1.5"
              >
                <FiDownload className="w-4 h-4" /> PDF
              </button>
            </div>
            <div className="bg-white rounded-lg p-5 mt-4 text-[8px] text-gray-700 leading-relaxed shadow-sm min-h-[300px]">
              <div className="text-gray-500">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
              <div className="mt-4">
                {activeCoverLetter.hiringManager || 'Hiring Manager'}<br />
                {activeCoverLetter.companyName || 'Company Name'}
              </div>
              {activeCoverLetter.content ? (
                activeCoverLetter.content.split('\n').map((para, i) => (
                  <p key={i} className={`${i === 0 ? 'mt-4 font-medium' : 'mt-2 text-justify'} text-[7px]`}>
                    {para}
                  </p>
                ))
              ) : (
                <p className="mt-4 text-[7px] text-gray-400 italic">Start typing your cover letter...</p>
              )}
            </div>
          </div>

          {/* Tone Analysis Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300">
            <h2 className="text-lg font-semibold text-white mb-4">Tone Analysis</h2>
            <div className="space-y-4">
              {toneBars.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-300">{item.label}</span>
                    <span className="text-gray-400">{Math.floor(item.value)}%</span>
                  </div>
                  <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                    <div className={`${item.color} rounded-full h-2 transition-all duration-500`} style={{ width: `${item.value}%` }}></div>
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
