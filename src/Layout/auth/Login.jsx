import { useState } from "react";
import {
    FaArrowLeft,
    FaArrowRight,
    FaEye,
    FaEyeSlash,
    FaGithub,
    FaGoogle,
} from "react-icons/fa6";
import { HiCheckCircle } from "react-icons/hi2";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="h-100vh bg-[#0B1120] text-white grid lg:grid-cols-2">
      {/* Left Side */}
      <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-[#332066] via-[#261C58] to-[#131A37] px-16 py-20">
        {/* Background Blur */}
        <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-fuchsia-600/10 blur-[120px]" />

        {/* Floating Shapes */}
        <div className="absolute top-20 right-20 w-16 h-16 rounded-2xl border border-white/10 rotate-12" />
        <div className="absolute bottom-32 right-24 w-10 h-10 rounded-full bg-violet-500/20" />

        <div className="relative z-10 flex flex-col justify-center max-w-md">
          <span className="inline-flex w-fit rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            AI Resume Builder
          </span>

          <h1 className="mt-8 text-4xl font-bold leading-tight">
            Welcome back to your career journey.
          </h1>

          <p className="mt-5 text-slate-300 leading-8">
            Continue creating ATS-friendly resumes, improve your resume score,
            and land interviews faster with AI-powered tools.
          </p>

          <div className="mt-12 space-y-5">
            {[
              "ATS Resume Optimization",
              "AI Generated Content",
              "25+ Professional Templates",
              "Secure Cloud Storage",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <HiCheckCircle className="text-violet-400 text-xl" />
                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center px-6 py-6">
        <div className="w-full max-w-md">
          {/* Back */}
          <button className="flex items-center gap-2 text-slate-400 hover:text-white transition">
            <FaArrowLeft className="text-sm" />
            <span className="text-sm">Back to Home</span>
          </button>

          {/* Heading */}
          <div className="mt-10">
            <h2 className="text-3xl font-bold">Sign in to your account</h2>
            <p className="mt-3 text-slate-400 text-[15px] leading-7">
              Continue building your AI-powered resume and apply with
              confidence.
            </p>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <button className="h-12 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center gap-3">
              <FaGithub />
              GitHub
            </button>

            <button className="h-12 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center gap-3">
              <FaGoogle />
              Google
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-sm text-slate-500">
              or continue with email
            </span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-slate-300">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 outline-none focus:border-violet-500"
            />
          </div>

          {/* Password */}
          <div className="mt-5">
            <label className="text-sm text-slate-300">
              Password
            </label>

            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 pr-12 outline-none focus:border-violet-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between mt-5 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" />
              Remember me
            </label>

            <a
              href="#"
              className="text-violet-400 hover:text-violet-300"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button className="mt-8 w-full h-12 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 hover:scale-[1.02] transition flex items-center justify-center gap-2 font-medium">
            Sign In
            <FaArrowRight className="text-sm" />
          </button>

          {/* Footer */}
          <p className="mt-8 text-center text-slate-400 text-sm">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-violet-400 font-medium hover:text-violet-300"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}