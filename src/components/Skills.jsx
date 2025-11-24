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
      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">⭐ Skills</h2>
      <div className="space-y-5">
        {data.map((skill, i) => (
          <div key={i} className="flex gap-4 items-center group p-4 rounded-lg bg-gradient-to-r from-gray-50 to-indigo-50 border border-gray-200 hover:border-indigo-300 transition-all shadow-sm hover:shadow-md">
            <input
              placeholder="e.g., JavaScript, React, Node.js"
              value={skill}
              onChange={(e) => handleChange(i, e.target.value)}
              className="flex-1 px-5 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all text-base bg-white"
            />
            {data.length > 1 && (
              <button
                onClick={() => removeSkill(i)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg opacity-100 group-hover:opacity-100"
              >
                <FiTrash2 size={18} />
              </button>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={addSkill}
        className="w-full mt-8 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        <FiPlus size={18} /> Add Skill
      </button>
    </div>
  );
}
