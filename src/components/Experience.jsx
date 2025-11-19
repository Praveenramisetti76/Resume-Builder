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
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">💼 Experience</h2>
      <div className="space-y-4">
        {data.map((exp, i) => (
          <div key={i} className="p-4 border-2 border-gray-200 rounded-lg space-y-3">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Company *</label>
              <input
                placeholder="e.g., Tech Company Inc."
                value={exp.company}
                onChange={(e) => handleChange(i, "company", e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Job Title *</label>
              <input
                placeholder="e.g., Senior Developer"
                value={exp.role}
                onChange={(e) => handleChange(i, "role", e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Duration *</label>
              <input
                placeholder="e.g., Jan 2022 - Present"
                value={exp.duration}
                onChange={(e) => handleChange(i, "duration", e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
              <textarea
                placeholder="Describe your responsibilities and achievements"
                value={exp.description || ""}
                onChange={(e) => handleChange(i, "description", e.target.value)}
                rows="3"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
            {data.length > 1 && (
              <button
                onClick={() => removeExperience(i)}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition"
              >
                <FiTrash2 /> Remove
              </button>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={addExperience}
        className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition"
      >
        <FiPlus /> Add Experience
      </button>
    </div>
  );
}
