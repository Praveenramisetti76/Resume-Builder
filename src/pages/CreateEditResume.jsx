// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import { FiArrowLeft, FiSave } from "react-icons/fi";
// import { toast } from "react-toastify";
// import PersonalInfo from "../components/Personalinfo";
// import Education from "../components/Education";
// import Experience from "../components/Experience";
// import Skills from "../components/Skills";
// import ResumePreview from "../components/ResumePreview";
// import DownloadButton from "../components/DownloadButton";
// import resumeService from "../services/resumeService";
// import Projects from "../components/Projects";
// import Achievements from "../components/Achievements";

// export default function CreateEditResume() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const resumeRef = useRef();
//   const isEdit = !!id;

//   const [formData, setFormData] = useState({
//     title: "",
//     personal: {
//       name: "",
//       email: "",
//       phone: "",
//       summary: "",
//     },
//     education: [{ degree: "", institution: "", field: "", year: "" }],
//     experience: [{ company: "", role: "", duration: "", description: "" }],
//     skills: [""],
//     projects: [{ title: "", link: "", description: "" }],
//     achievements: [""],
//   });

//   const [loading, setLoading] = useState(isEdit);
//   const [saving, setSaving] = useState(false);

//   const loadResume = useCallback(async () => {
//     try {
//       setLoading(true);
//       const data = await resumeService.getResumeById(id);
//       setFormData(data);
//     } catch {
//       toast.error("Failed to load resume");
//       navigate("/resumes");
//     } finally {
//       setLoading(false);
//     }
//   }, [id, navigate]);

//   useEffect(() => {
//     if (isEdit) {
//       loadResume();
//     }
//   }, [isEdit, loadResume]);

//   const handleSave = async () => {
//     if (!formData.title.trim()) {
//       toast.error("Please enter a resume title");
//       return;
//     }

//     if (!formData.personal.name.trim()) {
//       toast.error("Please enter your name");
//       return;
//     }

//     try {
//       setSaving(true);

//       if (isEdit) {
//         await resumeService.updateResume(id, formData);
//         toast.success("Resume updated successfully");
//       } else {
//         const newResume = await resumeService.createResume(formData);
//         toast.success("Resume created successfully");
//         navigate(`/view/${newResume.id}`);
//       }
//     } catch {
//       toast.error(
//         isEdit ? "Failed to update resume" : "Failed to create resume"
//       );
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <p className="text-gray-600 text-lg">Loading resume...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-linear-to-br from-gray-50 via-gray-50 to-gray-100 py-8 px-4">
//       <div className="max-w-full mx-auto">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 max-w-7xl mx-auto">
//           <div className="flex-1">
//             <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
//               {isEdit ? "✏️ Edit Resume" : "📝 Create Resume"}
//             </h1>
//             <p className="text-gray-600 mt-3 text-lg">
//               {isEdit
//                 ? "Update your professional profile"
//                 : "Build your professional resume in minutes"}
//             </p>
//           </div>
//           <div className="flex gap-3 w-full sm:w-auto">
//             <Link
//               to="/resumes"
//               className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 text-white bg-gray-700 hover:bg-gray-800 border-2 border-gray-700 rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
//             >
//               <FiArrowLeft /> Back to Dashboard
//             </Link>
//           </div>
//         </div>

//         {/* Resume Title Input */}
//         <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200 hover:shadow-xl transition-shadow max-w-7xl mx-auto">
//           <label className="block text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">
//             Resume Title
//           </label>
//           <input
//             type="text"
//             value={formData.title}
//             onChange={(e) =>
//               setFormData({ ...formData, title: e.target.value })
//             }
//             placeholder="e.g., Senior Developer Resume 2024"
//             className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all text-base"
//           />
//         </div>

//         {/* Main Content - Two Column Layout */}
//         <div className="max-w-full">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
//             {/* Form Section - Left Side */}
//             <div className="space-y-8">
//               <PersonalInfo
//                 data={formData.personal}
//                 setData={(newPersonal) =>
//                   setFormData({ ...formData, personal: newPersonal })
//                 }
//               />

//               <Experience
//                 data={formData.experience}
//                 setData={(newExperience) =>
//                   setFormData({ ...formData, experience: newExperience })
//                 }
//               />

//               <Education
//                 data={formData.education}
//                 setData={(newEducation) =>
//                   setFormData({ ...formData, education: newEducation })
//                 }
//               />

//               <Skills
//                 data={formData.skills}
//                 setData={(newSkills) =>
//                   setFormData({ ...formData, skills: newSkills })
//                 }
//               />

//               <Projects
//                 data={formData.projects}
//                 setData={(newprojects) =>
//                   setFormData({ ...formData, projects: newprojects })
//                 }
//               />

//               <Achievements
//                 data={formData.achievements}
//                 setData={(newachievements) =>
//                   setFormData({ ...formData, achievements: newachievements })
//                 }
//               />

//               {/* Save Button */}
//               <button
//                 onClick={handleSave}
//                 disabled={saving}
//                 className="w-full bg-linear-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
//               >
//                 <FiSave size={20} /> {saving ? "Saving..." : "Save & Continue"}
//               </button>
//             </div>

//             {/* Preview Section - Right Side */}
//             <div className="h-fit sticky top-24 lg:top-32">
//               <div className="bg-white rounded-2xl shadow-2xl p-6 max-h-[calc(100vh-200px)] overflow-y-auto border-2 border-gray-100 hover:shadow-3xl transition-shadow">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//                   📄 Live Preview
//                 </h2>
//                 <ResumePreview
//                   ref={resumeRef}
//                   personal={formData.personal}
//                   education={formData.education}
//                   experience={formData.experience}
//                   skills={formData.skills}
//                   projects={formData.projects}
//                   achievements={formData.achievements}
//                 />
//               </div>
//               {isEdit && (
//                 <div className="mt-6">
//                   <DownloadButton
//                     resumeRef={resumeRef}
//                     fileName={formData.title || "resume"}
//                   />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FiArrowLeft, FiSave } from "react-icons/fi";
import { toast } from "react-toastify";

import PersonalInfo from "../components/Personalinfo";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import ResumePreview from "../components/ResumePreview";
import DownloadButton from "../components/DownloadButton";
import resumeService from "../services/resumeService";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";

export default function CreateEditResume() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    title: "",
    personal: {
      name: "",
      email: "",
      phone: "",
      summary: "",
    },
    education: [{ degree: "", institution: "", field: "", year: "" }],
    experience: [{ company: "", role: "", duration: "", description: "" }],
    skills: [""],
    projects: [{ title: "", link: "", description: "" }],
    achievements: [""],
  });

  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);

  // LOAD RESUME (no useCallback needed)
  const loadResume = async () => {
    try {
      setLoading(true);
      const data = await resumeService.getResumeById(id);
      setFormData(data);
    } catch {
      toast.error("Failed to load resume");
      navigate("/resumes");
    } finally {
      setLoading(false);
    }
  };

  // Run on page load in edit mode
  useEffect(() => {
    if (isEdit) loadResume();
  }, [isEdit]);

  // SAVE function
  const handleSave = async () => {
    if (!formData.title.trim()) {
      toast.error("Please enter a resume title");
      return;
    }

    if (!formData.personal.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    try {
      setSaving(true);

      if (isEdit) {
        await resumeService.updateResume(id, formData);
        toast.success("Resume updated successfully");
      } else {
        const newResume = await resumeService.createResume(formData);
        toast.success("Resume created successfully");
        navigate(`/view/${newResume.id}`);
      }
    } catch {
      toast.error(isEdit ? "Failed to update resume" : "Failed to create resume");
    } finally {
      setSaving(false);
    }
  };

  // LOADING SCREEN
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg">Loading resume...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-full mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 max-w-7xl mx-auto">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              {isEdit ? "✏️ Edit Resume" : "📝 Create Resume"}
            </h1>
            <p className="text-gray-600 mt-3 text-lg">
              {isEdit
                ? "Update your professional profile"
                : "Build your professional resume in minutes"}
            </p>
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <Link
              to="/resumes"
              className="flex items-center justify-center gap-2 px-6 py-3 text-white bg-gray-700 hover:bg-gray-800 border-2 border-gray-700 rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              <FiArrowLeft /> Back to Dashboard
            </Link>
          </div>
        </div>

        {/* TITLE INPUT */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200 hover:shadow-xl transition-shadow max-w-7xl mx-auto">
          <label className="block text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">
            Resume Title
          </label>

          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="e.g., Senior Developer Resume 2024"
            className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all text-base"
          />
        </div>

        {/* TWO-COLUMN LAYOUT */}
        <div className="max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
            
            {/* LEFT SIDE — FORM */}
            <div className="space-y-8">
              <PersonalInfo
                data={formData.personal}
                setData={(newPersonal) =>
                  setFormData({ ...formData, personal: newPersonal })
                }
              />

              <Experience
                data={formData.experience}
                setData={(newExp) =>
                  setFormData({ ...formData, experience: newExp })
                }
              />

              <Education
                data={formData.education}
                setData={(newEdu) =>
                  setFormData({ ...formData, education: newEdu })
                }
              />

              <Skills
                data={formData.skills}
                setData={(newSkills) =>
                  setFormData({ ...formData, skills: newSkills })
                }
              />

              <Projects
                data={formData.projects}
                setData={(newProjects) =>
                  setFormData({ ...formData, projects: newProjects })
                }
              />

              <Achievements
                data={formData.achievements}
                setData={(newAch) =>
                  setFormData({ ...formData, achievements: newAch })
                }
              />

              {/* SAVE BUTTON */}
              <button
                onClick={handleSave}
                disabled={saving}
                className="w-full bg-linear-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
              >
                <FiSave size={20} />
                {saving ? "Saving..." : "Save & Continue"}
              </button>
            </div>

            {/* RIGHT SIDE — PREVIEW */}
            <div className="h-fit sticky top-24 lg:top-32">
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-h-[calc(100vh-200px)] overflow-y-auto border-2 border-gray-100 hover:shadow-3xl transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  📄 Live Preview
                </h2>

                <ResumePreview
                  personal={formData.personal}
                  education={formData.education}
                  experience={formData.experience}
                  skills={formData.skills}
                  projects={formData.projects}
                  achievements={formData.achievements}
                />
              </div>

              {isEdit && (
                <div className="mt-6">
                  <DownloadButton fileName={formData.title || "resume"} />
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
