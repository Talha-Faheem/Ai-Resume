import { useState } from 'react';
import { FiSearch, FiCheck } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../../context/ResumeContext';

const templates = [
  { id: 1, name: 'Executive Pro', category: 'Corporate', uses: '12.4K', rating: 4.8, gradient: 'from-teal-600 to-cyan-700', isPro: false },
  { id: 2, name: 'Tech Minimal', category: 'Engineering', uses: '19K', rating: 4.9, gradient: 'from-teal-500 to-emerald-600', isPro: false },
  { id: 3, name: 'Creative Edge', category: 'Design', uses: '8.5K', rating: 4.8, gradient: 'from-violet-600 to-purple-700', isPro: true },
  { id: 4, name: 'Modern Clean', category: 'General', uses: '15K', rating: 4.7, gradient: 'from-teal-600 to-emerald-700', isPro: false },
  { id: 5, name: 'Bold Impact', category: 'Marketing', uses: '6.1K', rating: 4.8, gradient: 'from-orange-500 to-red-600', isPro: true },
  { id: 6, name: 'Academia', category: 'Research', uses: '3.5K', rating: 4.6, gradient: 'from-gray-400 to-gray-500', isPro: false },
];

const gradientMap = {
  'from-teal-600 to-cyan-700': 'bg-gradient-to-br from-teal-600 to-cyan-700',
  'from-teal-500 to-emerald-600': 'bg-gradient-to-br from-teal-500 to-emerald-600',
  'from-violet-600 to-purple-700': 'bg-gradient-to-br from-violet-600 to-purple-700',
  'from-teal-600 to-emerald-700': 'bg-gradient-to-br from-teal-600 to-emerald-700',
  'from-orange-500 to-red-600': 'bg-gradient-to-br from-orange-500 to-red-600',
  'from-gray-400 to-gray-500': 'bg-gradient-to-br from-gray-400 to-gray-500',
};

const tabs = ['All', 'Corporate', 'Engineering', 'Design', 'Marketing', 'Research', 'General'];

export default function Templates() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { state, dispatch, activeResume } = useResume();
  const navigate = useNavigate();

  const filteredTemplates = templates.filter((template) => {
    const matchesTab = activeTab === 'All' || template.category === activeTab;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          template.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleUseTemplate = (templateName) => {
    dispatch({ type: 'SELECT_TEMPLATE', payload: templateName });
    navigate('/dashboard/resume-builder');
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Resume Templates</h1>
          <p className="text-gray-400 mt-1">Click any template to preview a full sample resume</p>
        </div>
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-gray-300 w-64 outline-none focus:border-violet-500 transition placeholder-gray-600"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3 mt-6 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${
              activeTab === tab
                ? 'bg-violet-600 text-white'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-violet-500/30'
            } rounded-full px-5 py-2 text-sm font-medium cursor-pointer transition`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mt-8">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
          >
            {/* Preview area */}
            <div className={`h-48 relative overflow-hidden ${gradientMap[template.gradient]}`}>
              <div className="p-5 space-y-3">
                <div className="h-2.5 bg-white/30 rounded-full w-1/2"></div>
                <div className="h-1.5 bg-white/15 rounded-full w-3/4 mt-2"></div>
                <div className="h-1.5 bg-white/15 rounded-full w-2/3"></div>
                <div className="mt-4 space-y-1.5">
                  <div className="h-1 bg-white/10 rounded-full w-full"></div>
                  <div className="h-1 bg-white/10 rounded-full w-5/6"></div>
                  <div className="h-1 bg-white/10 rounded-full w-4/5"></div>
                  <div className="h-1 bg-white/10 rounded-full w-3/4"></div>
                </div>
                <div className="h-2 bg-white/20 rounded-full w-1/3 mt-3"></div>
                <div className="mt-2 space-y-1.5">
                  <div className="h-1 bg-white/10 rounded-full w-full"></div>
                  <div className="h-1 bg-white/10 rounded-full w-5/6"></div>
                  <div className="h-1 bg-white/10 rounded-full w-4/5"></div>
                </div>
              </div>

              {template.isPro && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-amber-500 text-[10px] font-bold px-2.5 py-1 rounded-full text-white flex items-center gap-1">
                  ⚡ Pro
                </div>
              )}

              {activeResume?.template === template.name && (
                <div className="absolute top-3 left-3 bg-green-500 rounded-full p-1 text-white z-10">
                  <FiCheck size={14} />
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleUseTemplate(template.name);
                  }}
                  className="bg-white text-gray-900 font-medium px-5 py-2 rounded-lg text-sm hover:bg-gray-100 transition"
                >
                  Use Template
                </button>
              </div>
            </div>

            {/* Info area */}
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-white font-medium text-sm">{template.name}</h3>
                <div className="text-orange-400 text-xs flex items-center gap-1">
                  <FaStar /> {template.rating}
                </div>
              </div>
              <div className="mt-1 flex flex-col gap-0.5">
                <span className="text-gray-500 text-xs">{template.category}</span>
                <span className="text-gray-600 text-xs">{template.uses} uses</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
