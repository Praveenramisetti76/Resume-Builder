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
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">⭐ Skills</h2>
      <div className="space-y-3">
        {data.map((skill, i) => (
          <div key={i} className="flex gap-3">
            <input
              placeholder="e.g., JavaScript, React, Node.js"
              value={skill}
              onChange={(e) => handleChange(i, e.target.value)}
              className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
            />
            {data.length > 1 && (
              <button
                onClick={() => removeSkill(i)}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition"
              >
                <FiTrash2 />
              </button>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={addSkill}
        className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition"
      >
        <FiPlus /> Add Skill
      </button>
    </div>
  );
}
