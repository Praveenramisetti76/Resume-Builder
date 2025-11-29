import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiZap, FiEye, FiDownload } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-100 flex flex-col">
      {/* Main Content */}
      <div className="grow flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl w-full">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-2 bg-white rounded-full shadow-lg border-2 border-indigo-500">
              <span className="text-indigo-600 font-bold text-sm uppercase tracking-wide">Welcome to Resume Builder</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              📄 Create Your <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Professional Resume</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
              Build polished resumes in minutes, not hours
            </p>
            <br />
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto text-center">
              Create a stunning resume with clean templates, real-time preview, and instant PDF export. No design experience needed.
</p>
            <br/>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 transform hover:-translate-y-2 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Quick & Easy</h3>
              <p className="text-gray-600 leading-relaxed">Simple form-based interface to enter your information. No complicated steps or confusing layouts.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 transform hover:-translate-y-2 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">👁️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Live Preview</h3>
              <p className="text-gray-600 leading-relaxed">See your resume updates in real-time as you type. Preview exactly how your resume will look.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 transform hover:-translate-y-2 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">📥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Download PDF</h3>
              <p className="text-gray-600 leading-relaxed">Export your resume as a professional PDF file. Ready to submit to employers instantly.</p>
            </div>
          </div>
                <br/>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              to="/create"
              className="bg-linear-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FiArrowRight size={20} /> Create New Resume
            </Link>
            <Link
              to="/resumes"
              className="bg-white hover:bg-gray-50 text-indigo-600 font-bold py-4 px-8 rounded-full border-2 border-indigo-600 transition-all duration-300 text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              📋 View My Resumes
            </Link>
          </div>
            <br/>
          {/* Additional Info */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 text-center">
            <p className="text-gray-700 text-lg mb-4">
              <span className="font-bold text-indigo-600">✨ Trusted by thousands</span> of job seekers worldwide
            </p>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="text-center">
                <p className="text-3xl font-bold text-indigo-600">5000+</p>
                <p className="text-gray-600">Resumes Created</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-indigo-600">98%</p>
                <p className="text-gray-600">User Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-indigo-600">24/7</p>
                <p className="text-gray-600">Always Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
