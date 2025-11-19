import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiFileText, FiList } from 'react-icons/fi';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-600';
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-indigo-600">
            📄 Resume Builder
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`flex items-center gap-2 font-semibold transition ${isActive('/')}`}
            >
              <FiHome /> Home
            </Link>
            <Link
              to="/resumes"
              className={`flex items-center gap-2 font-semibold transition ${isActive('/resumes')}`}
            >
              <FiList /> My Resumes
            </Link>
            <Link
              to="/create"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition"
            >
              <FiFileText /> Create
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
