import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            📄 Resume Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create professional resumes in minutes, not hours
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Build a polished resume with clean templates and real-time preview
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick & Easy</h3>
            <p className="text-gray-600">Simple form-based interface to enter your information</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-3">👁️</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Preview</h3>
            <p className="text-gray-600">See your resume updates in real-time as you type</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-3">📥</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Download PDF</h3>
            <p className="text-gray-600">Export your resume as a professional PDF file</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/create"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition duration-300 text-lg"
          >
            Create New Resume <FiArrowRight />
          </Link>
          <Link
            to="/resumes"
            className="bg-white hover:bg-gray-50 text-indigo-600 font-bold py-3 px-8 rounded-lg border-2 border-indigo-600 transition duration-300 text-lg"
          >
            View My Resumes
          </Link>
        </div>
      </div>
    </div>
  );
}
