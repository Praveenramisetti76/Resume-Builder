import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit2, FiTrash2, FiEye, FiArrowLeft } from 'react-icons/fi';
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
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">📋 My Resumes</h1>
            <p className="text-gray-600 mt-2">Manage and view your saved resumes</p>
          </div>
          <Link
            to="/create"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Create New
          </Link>
        </div>

        {/* Back Button */}
        <Link
          to="/"
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-6 font-semibold"
        >
          <FiArrowLeft /> Back to Home
        </Link>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Loading resumes...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && resumes.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-600 text-lg mb-4">No resumes yet</p>
            <Link
              to="/create"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg inline-block"
            >
              Create Your First Resume
            </Link>
          </div>
        )}

        {/* Resumes Grid */}
        {!loading && resumes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumes.map((resume) => (
              <div
                key={resume.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {resume.title}
                  </h3>
                  <p className="text-gray-600 mb-1">
                    <strong>Name:</strong> {resume.personal.name}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong>Email:</strong> {resume.personal.email}
                  </p>

                  <div className="flex gap-2">
                    <Link
                      to={`/view/${resume.id}`}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition"
                    >
                      <FiEye /> View
                    </Link>
                    <Link
                      to={`/edit/${resume.id}`}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition"
                    >
                      <FiEdit2 /> Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(resume.id)}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition"
                    >
                      <FiTrash2 /> Delete
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
