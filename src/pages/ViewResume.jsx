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
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{resume.title}</h1>
            <p className="text-gray-600 mt-2">by {resume.personal.name}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              to={`/edit/${id}`}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition"
            >
              <FiEdit2 /> Edit
            </Link>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition"
            >
              <FiTrash2 /> Delete
            </button>
          </div>
        </div>

        {/* Back Button */}
        <Link
          to="/resumes"
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-6 font-semibold"
        >
          <FiArrowLeft /> Back to Resumes
        </Link>

        {/* Resume Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <ResumePreview
            ref={resumeRef}
            personal={resume.personal}
            education={resume.education}
            experience={resume.experience}
            skills={resume.skills}
          />
        </div>

        {/* Download Button */}
        <DownloadButton resumeRef={resumeRef} fileName={resume.title} />
      </div>
    </div>
  );
}
