import React from "react";
import { FiTrash2, FiPlus } from "react-icons/fi";

export default function Projects({ data, setData }) {
  const handleChange = (index, field, value) => {
    const updated = [...data];
    updated[index][field] = value;
    setData(updated);
  };

  const addProject = () => {
    setData([
      ...data,
      { title: "", description: "" }
    ]);
  };

  const removeProject = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
        🚀 Projects
      </h2>

      <div className="space-y-6">
        {Array.isArray(data) && data.map((project, index) => (
          <div key={index} className="p-4 rounded-xl bg-gray-50 border shadow-sm">
            <input
              placeholder="Project Title"
              value={project.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
              className="w-full px-4 py-3 mb-3 rounded-lg border focus:ring-2 focus:ring-indigo-400"
            />
            
            <textarea
              placeholder="Project Description"
              value={project.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-400"
            />

            {data.length > 1 && (
              <button
                onClick={() => removeProject(index)}
                className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-600"
              >
                <FiTrash2 size={18} />
                Remove Project
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={addProject}
        className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-lg"
      >
        <FiPlus size={18} /> Add Project
      </button>
    </div>
  );
}
