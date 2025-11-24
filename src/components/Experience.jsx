import React from "react";
import { FiTrash2, FiPlus } from "react-icons/fi";

export default function Experience({ data, setData }) {
  const handleChange = (index, key, value) => {
    const newExp = [...data];
    newExp[index][key] = value;
    setData(newExp);
  };

  const addExperience = () => setData([...data, { company: "", role: "", duration: "", description: "" }]);

  const removeExperience = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">💼 Work Experience</h2>
      <div className="space-y-8">
        {data.map((exp, i) => (
          <div key={i} className="p-8 border-2 border-indigo-100 rounded-xl space-y-6 bg-gradient-to-br from-white to-indigo-50 hover:border-indigo-300 transition-colors shadow-md hover:shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Company *</label>
                <input
                  placeholder="e.g., Tech Company Inc."
                  value={exp.company}
                  onChange={(e) => handleChange(i, "company", e.target.value)}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Job Title *</label>
                <input
                  placeholder="e.g., Senior Developer"
                  value={exp.role}
                  onChange={(e) => handleChange(i, "role", e.target.value)}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all text-base"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Duration *</label>
              <input
                placeholder="e.g., Jan 2022 - Present"
                value={exp.duration}
                onChange={(e) => handleChange(i, "duration", e.target.value)}
                className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Description</label>
              <textarea
                placeholder="Describe your responsibilities and key achievements..."
                value={exp.description || ""}
                onChange={(e) => handleChange(i, "description", e.target.value)}
                rows="4"
                className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all text-base resize-none"
              />
            </div>
            {data.length > 1 && (
              <button
                onClick={() => removeExperience(i)}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FiTrash2 size={18} /> Remove Experience
              </button>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={addExperience}
        className="w-full mt-8 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        <FiPlus size={18} /> Add More Experience
      </button>
    </div>
  );
}
