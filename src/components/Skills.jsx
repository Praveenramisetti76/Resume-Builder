import React from "react";
import { FiTrash2, FiPlus } from "react-icons/fi";

export default function Skills({ data, setData }) {
  const handleChange = (index, value) => {
    const newSkills = [...data];
    newSkills[index] = value;
    setData(newSkills);
  };

  const addSkill = () => setData([...data, ""]);

  const removeSkill = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">⭐ Skills</h2>
      <div className="space-y-4">
        {data.map((skill, i) => (
          <div key={i} className="flex gap-3 items-center">
            <input
              placeholder="e.g., JavaScript, React, Node.js"
              value={skill}
              onChange={(e) => handleChange(i, e.target.value)}
              className="flex-1 px-5 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all text-base"
            />
            {data.length > 1 && (
              <button
                onClick={() => removeSkill(i)}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-4 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FiTrash2 size={18} />
              </button>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={addSkill}
        className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        <FiPlus size={18} /> Add Skill
      </button>
    </div>
  );
}
