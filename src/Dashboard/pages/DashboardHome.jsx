import {
  FiChevronRight,
  FiDownload,
  FiFileText,
  FiLayers,
  FiMail,
  FiPlus,
  FiTarget,
} from "react-icons/fi";
import { RiSparkling2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useResume, calculateATSScore } from "../../context/ResumeContext";
import LineChart from "../../component/charts/lineChart";
import RadarChart from "../../component/charts/RadarChart";

export default function DashboardHome() {
  const { state, dispatch, atsScore } = useResume();
  const navigate = useNavigate();

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  const timeAgo = (dateStr) => {
    if (!dateStr) return 'just now';
    const seconds = Math.floor((new Date() - new Date(dateStr)) / 1000);
    if (seconds < 60) return 'just now';
    if (seconds < 3600) return Math.floor(seconds / 60) + 'm ago';
    if (seconds < 86400) return Math.floor(seconds / 3600) + 'h ago';
    return Math.floor(seconds / 86400) + 'd ago';
  };

  const handleNewResume = () => {
    dispatch({ type: 'CREATE_RESUME', payload: { name: 'Untitled Resume' } });
    navigate('/dashboard/resume-builder');
  };

  const stats = [
    {
      id: 1,
      title: "Resumes Created",
      value: state.resumes?.length || 0,
      change: "↗ +2 this week",
      icon: FiFileText,
      iconBg: "bg-red-500/20",
      iconColor: "text-red-400",
      changeColor: "text-green-400",
    },
    {
      id: 2,
      title: "Avg ATS Score",
      value: (atsScore?.total || 0) + "%",
      change: "↗ +5 pts this month",
      icon: FiTarget,
      iconBg: "bg-green-500/20",
      iconColor: "text-green-400",
      changeColor: "text-green-400",
    },
    {
      id: 3,
      title: "PDF Downloads",
      value: state.stats?.pdfDownloads || 0,
      change: "↗ +8 this week",
      icon: FiDownload,
      iconBg: "bg-cyan-500/20",
      iconColor: "text-cyan-400",
      changeColor: "text-green-400",
    },
    {
      id: 4,
      title: "AI Credits Left",
      value: state.user?.aiCredits || 0,
      change: "↗ Resets in 18d",
      icon: RiSparkling2Fill,
      iconBg: "bg-orange-500/20",
      iconColor: "text-orange-400",
      changeColor: "text-gray-400",
    },
  ];

  const iconColors = ["bg-blue-500", "bg-violet-500", "bg-green-500", "bg-purple-500"];

  return (
    <div className="text-white space-y-6">
      {/* 1. Greeting Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">
            {greeting}, {state.user?.name || 'Guest'} 👋
          </h1>
          <p className="text-gray-400 mt-1">
            Your resume performance is up 12% this week. Keep it up!
          </p>
        </div>
        <button
          onClick={handleNewResume}
          className="bg-violet-600 hover:bg-violet-700 rounded-xl px-6 py-3 font-semibold text-white flex items-center gap-2 transition"
        >
          <FiPlus className="text-xl" />
          <span>New Resume</span>
        </button>
      </div>

      {/* 2. Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-violet-500/30 transition-all duration-300"
            >
              <div
                className={`w-10 h-10 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-3`}
              >
                <Icon size={20} />
              </div>

              <div className="text-3xl font-bold text-white mt-3">
                {item.value}
              </div>

              <div className="text-gray-500 text-sm mt-1">{item.title}</div>

              <div className={`${item.changeColor} text-sm mt-1 font-medium`}>
                {item.change}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Charts Row */}
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* ATS Score Trend */}
        <div className="flex-[2] bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row sm:justify-between sm:items-start gap-3">
            <div>
              <h2 className="font-semibold text-lg">ATS Score Trend</h2>
              <p className="text-gray-500 text-sm">6-month performance</p>
            </div>

            <div className="bg-green-500/10 text-green-400 rounded-full px-3 py-1 text-sm font-medium whitespace-nowrap">
              ↑ +31 pts
            </div>
          </div>

          <div className="w-full h-[220px] lg:h-[260px] mt-4">
            <LineChart />
          </div>
        </div>

        {/* Resume Quality */}
        <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6">
          <div>
            <h2 className="font-semibold text-lg">Resume Quality</h2>
            <p className="text-gray-500 text-sm">Multi-dimension analysis</p>
          </div>
          <div className="w-full h-48 mt-4 flex items-center justify-center">
            <RadarChart/>
          </div>
        </div>
      </div>

      {/* 4. Bottom Row */}
      <div className="flex flex-col lg:flex-row gap-6 mt-6 pb-10">
        {/* Recent Resumes */}
        <div className="flex-[1.2] bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Recent Resumes</h2>
            <Link to="/dashboard/resume-builder" className="text-violet-400 text-sm hover:text-violet-300 cursor-pointer">
              View all →
            </Link>
          </div>
          <div className="divide-y divide-white/5">
            {state.resumes?.slice(-4).reverse().map((resume, i) => {
              const scoreVal = calculateATSScore ? calculateATSScore(resume)?.total || 0 : 0;
              const scoreColor = scoreVal >= 80 ? 'text-green-400' : scoreVal >= 60 ? 'text-yellow-400' : 'text-red-400';
              const colorClass = iconColors[i % iconColors.length];
              return (
              <div key={resume.id || i} className="flex items-center gap-4 py-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${colorClass}`}
                >
                  <FiFileText size={18} />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">
                    {resume.name}
                  </div>
                  <div className="text-gray-500 text-xs mt-0.5">
                    {resume.template} · {timeAgo(resume.updatedAt)}
                  </div>
                </div>
                <div className={`ml-auto font-semibold ${scoreColor}`}>
                  {scoreVal}%
                </div>
              </div>
            )})}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Quick Actions */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="font-semibold text-lg">Quick Actions</h2>
            <div className="mt-4 space-y-2">
              {[
                {
                  label: "New Resume",
                  icon: FiPlus,
                  color: "bg-blue-500/20 text-blue-400",
                  onClick: handleNewResume
                },
                {
                  label: "Check ATS Score",
                  icon: FiTarget,
                  color: "bg-green-500/20 text-green-400",
                  onClick: () => navigate('/dashboard/ats-checker')
                },
                {
                  label: "Browse Templates",
                  icon: FiLayers,
                  color: "bg-cyan-500/20 text-cyan-400",
                  onClick: () => navigate('/dashboard/templates')
                },
                {
                  label: "Cover Letter",
                  icon: FiMail,
                  color: "bg-orange-500/20 text-orange-400",
                  onClick: () => navigate('/dashboard/cover-letter')
                },
              ].map((action, i) => (
                <div
                  key={i}
                  onClick={action.onClick}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition cursor-pointer"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${action.color}`}
                  >
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
                { label: "Mon", value: state.stats?.weeklyActivity?.[0] || 0, color: "bg-violet-500/30" },
                { label: "Tue", value: state.stats?.weeklyActivity?.[1] || 0, color: "bg-violet-500" },
                { label: "Wed", value: state.stats?.weeklyActivity?.[2] || 0, color: "bg-violet-500/30" },
                { label: "Thu", value: state.stats?.weeklyActivity?.[3] || 0, color: "bg-violet-500" },
                { label: "Fri", value: state.stats?.weeklyActivity?.[4] || 0, color: "bg-violet-500/40", current: true },
              ].map((day, i) => {
                const maxActivity = Math.max(...(state.stats?.weeklyActivity || [1]));
                const heightVal = maxActivity ? Math.max(10, (day.value / maxActivity) * 100) : 10;
                return (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="relative flex flex-col justify-end h-16 w-6">
                    {day.current && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                    )}
                    <div
                      className={`w-6 rounded-t-md ${day.color}`}
                      style={{ height: `${heightVal}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-500 text-xs">{day.label}</span>
                </div>
              )})}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
