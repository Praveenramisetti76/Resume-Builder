import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FiArrowLeft, FiSave } from 'react-icons/fi';
import { toast } from 'react-toastify';
import PersonalInfo from '../components/Personalinfo';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import ResumePreview from '../components/ResumePreview';
import DownloadButton from '../components/DownloadButton';
import resumeService from '../services/resumeService';

export default function CreateEditResume() {
  const { id } = useParams();
  const navigate = useNavigate();
  const resumeRef = useRef();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    title: '',
    personal: {
      name: '',
      email: '',
      phone: '',
      summary: '',
    },
    education: [{ degree: '', institution: '', field: '', year: '' }],
    experience: [{ company: '', role: '', duration: '', description: '' }],
    skills: [''],
  });

  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);

  const loadResume = useCallback(async () => {
    try {
      setLoading(true);
      const data = await resumeService.getResumeById(id);
      setFormData(data);
    } catch {
      toast.error('Failed to load resume');
      navigate('/resumes');
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  useEffect(() => {
    if (isEdit) {
      loadResume();
    }
  }, [isEdit, loadResume]);

  const handleSave = async () => {
    if (!formData.title.trim()) {
      toast.error('Please enter a resume title');
      return;
    }

    if (!formData.personal.name.trim()) {
      toast.error('Please enter your name');
      return;
    }

    try {
      setSaving(true);

      if (isEdit) {
        await resumeService.updateResume(id, formData);
        toast.success('Resume updated successfully');
      } else {
        const newResume = await resumeService.createResume(formData);
        toast.success('Resume created successfully');
        navigate(`/edit/${newResume.id}`);
      }
    } catch {
      toast.error(isEdit ? 'Failed to update resume' : 'Failed to create resume');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg">Loading resume...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              {isEdit ? '✏️ Edit Resume' : '📝 Create Resume'}
            </h1>
            <p className="text-gray-600 mt-2">
              {isEdit ? 'Update your resume' : 'Build your professional resume'}
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/resumes"
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 border-2 border-gray-300 rounded-lg transition"
            >
              <FiArrowLeft /> Back
            </Link>
          </div>
        </div>

        {/* Resume Title Input */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Resume Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="e.g., Software Developer Resume 2024"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-6">
            <PersonalInfo
              data={formData.personal}
              setData={(newPersonal) =>
                setFormData({ ...formData, personal: newPersonal })
              }
            />

            <Experience
              data={formData.experience}
              setData={(newExperience) =>
                setFormData({ ...formData, experience: newExperience })
              }
            />

            <Education
              data={formData.education}
              setData={(newEducation) =>
                setFormData({ ...formData, education: newEducation })
              }
            />

            <Skills
              data={formData.skills}
              setData={(newSkills) =>
                setFormData({ ...formData, skills: newSkills })
              }
            />

            {/* Save Button */}
            <button
              onClick={handleSave}
              disabled={saving}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition duration-300 text-lg"
            >
              <FiSave /> {saving ? 'Saving...' : 'Save Resume'}
            </button>
          </div>

          {/* Preview Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📄 Preview</h2>
              <div className="bg-white rounded-lg shadow-md p-4 max-h-96 overflow-y-auto border-2 border-gray-200">
                <ResumePreview
                  ref={resumeRef}
                  personal={formData.personal}
                  education={formData.education}
                  experience={formData.experience}
                  skills={formData.skills}
                />
              </div>
              {isEdit && (
                <DownloadButton
                  resumeRef={resumeRef}
                  fileName={formData.title || 'resume'}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
