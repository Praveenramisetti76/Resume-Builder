import React from "react";
import { FiTrash2, FiPlus } from "react-icons/fi";

export default function Education({ data, setData }) {
  const handleChange = (index, key, value) => {
    const newEdu = [...data];
    newEdu[index][key] = value;
    setData(newEdu);
  };

  const addEducation = () => setData([...data, { degree: "", institution: "", field: "", year: "" }]);

  const removeEducation = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">🎓 Education</h2>
      <div className="space-y-4">
        {data.map((edu, i) => (
          <div key={i} className="p-4 border-2 border-gray-200 rounded-lg space-y-3">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Degree *</label>
              <input
                placeholder="e.g., Bachelor of Science"
                value={edu.degree}
                onChange={(e) => handleChange(i, "degree", e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Institution *</label>
              <input
                placeholder="e.g., Tech University"
                value={edu.institution}
                onChange={(e) => handleChange(i, "institution", e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Field of Study</label>
              <input
                placeholder="e.g., Computer Science"
                value={edu.field || ""}
                onChange={(e) => handleChange(i, "field", e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Graduation Year *</label>
              <input
                placeholder="e.g., 2020"
                value={edu.year}
                onChange={(e) => handleChange(i, "year", e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
            {data.length > 1 && (
              <button
                onClick={() => removeEducation(i)}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition"
              >
                <FiTrash2 /> Remove
              </button>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={addEducation}
        className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition"
      >
        <FiPlus /> Add Education
      </button>
    </div>
  );
}
