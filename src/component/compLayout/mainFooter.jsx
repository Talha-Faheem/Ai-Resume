import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { RiSparkling2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="text-white">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to land your dream job?
            </h2>

            <p className="text-gray-300 mt-4 max-w-2xl leading-7">
              Build ATS-friendly resumes in minutes with AI-powered writing,
              professional templates, and instant resume scoring.
            </p>
          </div>

          <button className="px-8 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 duration-300 font-semibold cursor-pointer">
            Start Free
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 border-t border-gray-600 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Left Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-violet-600 flex items-center justify-center">
                <RiSparkling2Fill className="text-2xl" />
              </div>

              <h2 className="text-3xl font-bold">ResumeAI</h2>
            </div>

            <p className="mt-6 text-gray-400 leading-8 max-w-md">
              Create ATS-friendly resumes, generate AI-powered content,
              optimize your profile, and increase your chances of getting
              interviews faster.
            </p>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-violet-600 duration-300"
              >
                <FaGithub className="text-xl" />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-violet-600 duration-300"
              >
                <FaLinkedin className="text-xl" />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-violet-600 duration-300"
              >
                <FaXTwitter className="text-xl" />
              </a>
            </div>

            {/* Newsletter */}

            <div className="mt-10">
              <h3 className="font-semibold text-lg">
                Stay Updated
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                Get AI resume tips and product updates.
              </p>

              <div className="mt-5 flex">
                <div className="relative flex-1">
                  <MdOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-l-xl py-3 pl-12 pr-4 outline-none focus:border-violet-500"
                  />
                </div>

                <button className="px-6 bg-violet-600 rounded-r-xl hover:bg-violet-700 duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Product */}

          <div>
            <h3 className="uppercase text-sm font-bold tracking-wider">
              Product
            </h3>

            <ul className="mt-6 space-y-4 text-gray-400">
              <li><Link to="#" className="hover:text-white">Features</Link></li>
              <li><Link to="#" className="hover:text-white">Resume Builder</Link></li>
              <li><Link to="#" className="hover:text-white">ATS Checker</Link></li>
              <li><Link to="#" className="hover:text-white">Templates</Link></li>
              <li><Link to="#" className="hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="uppercase text-sm font-bold tracking-wider">
              Resources
            </h3>

            <ul className="mt-6 space-y-4 text-gray-400">
              <li><Link to="#" className="hover:text-white">Resume Examples</Link></li>
              <li><Link to="#" className="hover:text-white">Career Blog</Link></li>
              <li><Link to="#" className="hover:text-white">Interview Tips</Link></li>
              <li><Link to="#" className="hover:text-white">Help Center</Link></li>
              <li><Link to="#" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}

          <div>
            <h3 className="uppercase text-sm font-bold tracking-wider">
              Company
            </h3>

            <ul className="mt-6 space-y-4 text-gray-400">
              <li><Link to="#" className="hover:text-white">About</Link></li>
              <li><Link to="#" className="hover:text-white">Careers</Link></li>
              <li><Link to="#" className="hover:text-white">Partners</Link></li>
              <li><Link to="#" className="hover:text-white">Privacy</Link></li>
              <li><Link to="#" className="hover:text-white">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 ResumeAI. All rights reserved.</p>

          <p>
            Made with <span className="text-red-500">❤</span> for job seekers
            worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}