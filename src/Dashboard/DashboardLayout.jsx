import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FiGrid,
  FiFileText,
  FiTarget,
  FiLayers,
  FiMail,
  FiSettings,
  FiSearch,
  FiBell,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { RiSparkling2Fill } from "react-icons/ri";

const navItems = [
  { label: "Dashboard", icon: FiGrid, path: "/dashboard" },
  { label: "Resume Builder", icon: FiFileText, path: "/dashboard/resume-builder" },
  { label: "ATS Checker", icon: FiTarget, path: "/dashboard/ats-checker" },
  { label: "Templates", icon: FiLayers, path: "/dashboard/templates" },
  { label: "Cover Letter", icon: FiMail, path: "/dashboard/cover-letter" },
  { label: "Settings", icon: FiSettings, path: "/dashboard/settings" },
];

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-[#0B1120] text-white overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          collapsed ? "w-20" : "w-64"
        } min-h-screen bg-gradient-to-b from-[#332066] via-[#261C58] to-[#131A37] border-r border-white/10 flex flex-col transition-all duration-300 flex-shrink-0`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 h-16 border-b border-white/5">
          <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">
            <RiSparkling2Fill className="text-lg" />
          </div>
          {!collapsed && (
            <span className="text-lg font-bold tracking-tight whitespace-nowrap">
              ResumeAI
            </span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-violet-500 rounded-l-full" />
                  )}
                  <item.icon className="text-lg flex-shrink-0" />
                  {!collapsed && <span className="whitespace-nowrap">{item.label}</span>}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* AI Credits */}
        <div className="px-4 pb-3">
          <div className={`${collapsed ? "px-1" : "px-1"}`}>
            {!collapsed && (
              <div className="flex justify-between text-xs mb-2">
                <span className="text-gray-400">AI Credits</span>
                <span className="text-violet-400 font-medium">142/200</span>
              </div>
            )}
            <div className="w-full bg-white/10 rounded-full h-1.5">
              <div
                className="bg-gradient-to-r from-violet-500 to-purple-500 h-1.5 rounded-full"
                style={{ width: "71%" }}
              />
            </div>
          </div>
        </div>

        {/* User Profile */}
        <div className="px-3 pb-3 border-t border-white/5 pt-3">
          <div className="flex items-center gap-3 px-2">
            <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
              A
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">Alex Johnson</p>
                <p className="text-xs text-gray-500 truncate">Pro Plan</p>
              </div>
            )}
          </div>
        </div>

        {/* Collapse Toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center gap-2 px-5 py-3 text-gray-500 hover:text-white transition text-sm border-t border-white/5"
        >
          {collapsed ? (
            <FiChevronRight className="text-lg mx-auto" />
          ) : (
            <>
              <FiChevronLeft className="text-lg" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 flex-shrink-0 bg-[#0B1120]">
          {/* Search */}
          <div className="relative w-80">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search resumes, templates..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-gray-300 outline-none focus:border-violet-500 transition placeholder-gray-600"
            />
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-xl hover:bg-white/5 transition text-gray-400 hover:text-white">
              <FiBell className="text-lg" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-violet-500 rounded-full" />
            </button>
            <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-sm font-bold cursor-pointer hover:ring-2 hover:ring-violet-400 transition">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
