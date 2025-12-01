import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiMail, FiExternalLink } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16 border-t-4 border-indigo-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white hover:text-indigo-400 transition-colors mb-4">
              📄 Resume Builder
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Create professional resumes in minutes with our intuitive builder. No design experience needed.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span> Home
                </Link>
              </li>
              <li>
                <Link to="/create" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span> Create Resume
                </Link>
              </li>
              <li>
                <Link to="/resumes" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span> My Resumes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
              Features
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 cursor-pointer group">
                <span className="group-hover:translate-x-1 transition-transform">→</span> Live Preview
              </li>
              <li className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 cursor-pointer group">
                <span className="group-hover:translate-x-1 transition-transform">→</span> PDF Export
              </li>
              <li className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 cursor-pointer group">
                <span className="group-hover:translate-x-1 transition-transform">→</span> Easy Editing
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
              Connect
            </h4>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#"
                className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                title="Email"
              >
                <FiMail size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                title="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                title="External Link"
              >
                <FiExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-linear-to-r from-transparent via-indigo-500 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Resume Builder -Built by Praveen | Dharma  | Thapan  | saketh. 
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
