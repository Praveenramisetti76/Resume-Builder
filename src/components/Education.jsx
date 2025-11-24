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
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">🎓 Education</h2>
      <div className="space-y-6">
        {data.map((edu, i) => (
          <div key={i} className="p-6 border-2 border-green-100 rounded-xl space-y-6 bg-gradient-to-br from-white to-green-50 hover:border-green-300 transition-colors">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Degree *</label>
                <input
                  placeholder="e.g., Bachelor of Science"
                  value={edu.degree}
                  onChange={(e) => handleChange(i, "degree", e.target.value)}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Graduation Year *</label>
                <input
                  placeholder="e.g., 2020"
                  value={edu.year}
                  onChange={(e) => handleChange(i, "year", e.target.value)}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Institution *</label>
                <input
                  placeholder="e.g., Tech University"
                  value={edu.institution}
                  onChange={(e) => handleChange(i, "institution", e.target.value)}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Field of Study</label>
                <input
                  placeholder="e.g., Computer Science"
                  value={edu.field || ""}
                  onChange={(e) => handleChange(i, "field", e.target.value)}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all text-base"
                />
              </div>
            </div>
            {data.length > 1 && (
              <button
                onClick={() => removeEducation(i)}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FiTrash2 size={18} /> Remove Education
              </button>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={addEducation}
        className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        <FiPlus size={18} /> Add More Education
      </button>
    </div>
  );
}
