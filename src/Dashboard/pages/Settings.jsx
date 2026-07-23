import { FiUser, FiLock, FiBell, FiCreditCard, FiGlobe, FiTrash2 } from 'react-icons/fi'

export default function Settings() {
  return (
    <div className="p-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 mt-1">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        
        {/* Profile */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition">
          <h2 className="font-semibold text-white flex items-center gap-3 mb-4">
            <FiUser size={20} />
            Profile
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">NAME</label>
              <input
                type="text"
                defaultValue="Alex Johnson"
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
          </div>
        </div>

        {/* Security */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition">
          <h2 className="font-semibold text-white flex items-center gap-3 mb-4">
            <FiLock size={20} />
            Security
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">NEW PASSWORD</label>
              <input
                type="password"
                placeholder="Enter new password"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-gray-300">Two-Factor Authentication</span>
              <div className="w-10 h-5 rounded-full bg-violet-600 flex items-center px-0.5 cursor-pointer">
                <div className="w-4 h-4 rounded-full bg-white transform translate-x-5 transition-transform"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition">
          <h2 className="font-semibold text-white flex items-center gap-3 mb-4">
            <FiBell size={20} />
            Notifications
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Email Notifications</span>
              <div className="w-10 h-5 rounded-full bg-violet-600 flex items-center px-0.5 cursor-pointer">
                <div className="w-4 h-4 rounded-full bg-white transform translate-x-5 transition-transform"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Marketing Emails</span>
              <div className="w-10 h-5 rounded-full bg-white/10 flex items-center px-0.5 cursor-pointer">
                <div className="w-4 h-4 rounded-full bg-white transform transition-transform"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Billing */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition">
          <h2 className="font-semibold text-white flex items-center gap-3 mb-4">
            <FiCreditCard size={20} />
            Billing
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
              <div>
                <p className="text-white font-medium">Pro Plan</p>
                <p className="text-sm text-gray-400">$12/mo</p>
              </div>
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg text-sm transition">
                Upgrade
              </button>
            </div>
          </div>
        </div>

        {/* Language */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition">
          <h2 className="font-semibold text-white flex items-center gap-3 mb-4">
            <FiGlobe size={20} />
            Language
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-500 font-semibold tracking-wider mb-2 block">SELECT LANGUAGE</label>
              <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition w-full appearance-none">
                <option value="en" className="bg-gray-800 text-white">English (US)</option>
                <option value="es" className="bg-gray-800 text-white">Español</option>
                <option value="fr" className="bg-gray-800 text-white">Français</option>
              </select>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition">
          <h2 className="font-semibold text-red-400 flex items-center gap-3 mb-4">
            <FiTrash2 size={20} />
            Danger Zone
          </h2>
          <div className="space-y-4">
            <p className="text-sm text-gray-400">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <button className="bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 rounded-xl px-4 py-3 text-sm font-medium transition w-full">
              Delete Account
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
