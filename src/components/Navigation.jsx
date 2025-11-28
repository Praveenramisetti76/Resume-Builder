import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiFileText, FiList } from 'react-icons/fi';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-white border-b-3 border-white' : 'text-gray-200 hover:text-white';
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 shadow-lg sticky top-0 z-50 border-b-4 border-indigo-700">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-3xl font-bold text-white hover:text-indigo-100 transition-colors duration-300">
            📄 <span className="bg-gradient-to-r from-white to-indigo-50 bg-clip-text text-transparent">Resume Builder</span>
          </Link>

          <div className="flex items-center gap-10">
            <Link
              to="/"
              className={`flex items-center gap-2 font-bold text-lg transition-all duration-300 pb-2 ${isActive('/')}`}
            >
              <FiHome size={22} /> Home
            </Link>
            <Link
              to="/resumes"
              className={`flex items-center gap-2 font-bold text-lg transition-all duration-300 pb-2 ${isActive('/resumes')}`}
            >
              <FiList size={22} /> My Resumes
            </Link>
            <Link
              to="/create"
              className="bg-white hover:bg-indigo-50 text-indigo-600 font-bold py-3 px-6 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-white"
            >
              <FiFileText size={20} /> Create
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
