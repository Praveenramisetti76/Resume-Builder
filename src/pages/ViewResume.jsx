import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import ResumePreview from '../components/ResumePreview';
import DownloadButton from '../components/DownloadButton';
import resumeService from '../services/resumeService';

export default function ViewResume() {
  const { id } = useParams();
  const resumeRef = useRef();
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadResume = useCallback(async () => {
    try {
      setLoading(true);
      const data = await resumeService.getResumeById(id);
      setResume(data);
    } catch {
      toast.error('Failed to load resume');
      window.history.back();
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadResume();
  }, [loadResume]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this resume?')) {
      try {
        await resumeService.deleteResume(id);
        toast.success('Resume deleted successfully');
        window.location.href = '/resumes';
      } catch {
        toast.error('Failed to delete resume');
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg">Loading resume...</p>
      </div>
    );
  }

  if (!resume) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg">Resume not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">{resume.title}</h1>
            <p className="text-gray-600 mt-2 text-lg">by <span className="font-semibold text-indigo-600">{resume.personal.name}</span></p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              to={`/edit/${id}`}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FiEdit2 size={18} /> Edit
            </Link>
            <button
              onClick={handleDelete}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FiTrash2 size={18} /> Delete
            </button>
          </div>
        </div>

        {/* Back Button */}
        <Link
          to="/resumes"
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-8 font-semibold text-lg hover:gap-3 transition-all"
        >
          <FiArrowLeft size={18} /> Back to Dashboard
        </Link>

        {/* Resume Content */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border border-gray-200 hover:shadow-3xl transition-shadow">
          <ResumePreview
            ref={resumeRef}
            personal={resume.personal}
            education={resume.education}
            experience={resume.experience}
            skills={resume.skills}
          />
        </div>

        {/* Download Button */}
        <div className="sticky bottom-6">
          <DownloadButton resumeRef={resumeRef} fileName={resume.title} />
        </div>
      </div>
    </div>
  );
}
