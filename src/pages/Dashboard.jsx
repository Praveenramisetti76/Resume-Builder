import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit2, FiTrash2, FiEye, FiArrowLeft, FiPlus } from 'react-icons/fi';
import resumeService from '../services/resumeService';
import { toast } from 'react-toastify';

export default function Dashboard() {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      setLoading(true);
      const data = await resumeService.getAllResumes();
      setResumes(data);
    } catch (error) {
      toast.error('Failed to load resumes');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this resume?')) {
      try {
        await resumeService.deleteResume(id);
        toast.success('Resume deleted successfully');
        fetchResumes();
      } catch (error) {
        toast.error('Failed to delete resume');
        console.error(error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">📋 My Resumes</h1>
            <p className="text-gray-600 text-lg">Manage and view all your saved resumes</p>
          </div>
          <Link
            to="/create"
            className="bg-linear-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <FiPlus size={20} /> Create New
          </Link>
        </div>

        {/* Back Button */}
        <Link
          to="/"
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-8 font-semibold text-lg transition-colors duration-300"
        >
          <FiArrowLeft /> Back to Home
        </Link>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block">
              <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600 text-lg font-semibold">Loading resumes...</p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && resumes.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center border border-gray-100">
            <div className="text-6xl mb-6">📄</div>
            <p className="text-gray-600 text-xl mb-6 font-semibold">No resumes yet</p>
            <p className="text-gray-500 mb-8 text-lg">Start building your first resume today!</p>
            <Link
              to="/create"
              className="bg-linear-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FiPlus size={20} /> Create Your First Resume
            </Link>
          </div>
        )}

        {/* Resumes Grid */}
        {!loading && resumes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resumes.map((resume) => (
              <div
                key={resume.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2 group"
              >
                <div className="h-2 bg-linear-to-r from-indigo-600 to-purple-600"></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {resume.title}
                  </h3>
                  <div className="space-y-4 mb-8 pb-6 border-b border-gray-200">
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Name</p>
                      <p className="text-gray-800 font-semibold text-lg">{resume.personal.name}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</p>
                      <p className="text-gray-700 font-medium truncate hover:text-clip">{resume.personal.email}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={`/view/${resume.id}`}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      <FiEye size={18} /> View
                    </Link>
                    <Link
                      to={`/edit/${resume.id}`}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      <FiEdit2 size={18} /> Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(resume.id)}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      <FiTrash2 size={18} /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
