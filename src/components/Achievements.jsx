import React from "react";
import { FiTrash2, FiPlus } from "react-icons/fi";

export default function Achievements({ data = [""], setData }) {
  const handleChange = (index, value) => {
    const updated = [...data];
    updated[index] = value;
    setData(updated);
  };

  const addAchievement = () => {
    setData([...(data || []), ""]);
  };

  const removeAchievement = (index) => {
    setData((data || []).filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
        🏆 Achievements
      </h2>

      <div className="space-y-6">
        {data.map((ach, index) => (
            <div key={index} className="p-4 rounded-xl bg-gray-50 border shadow-sm">
              <textarea
                placeholder="e.g., Won Hackathon 2024, Published Research Paper"
                value={ach}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-400"
              />

              {data.length > 1 && (
                <button
                  onClick={() => removeAchievement(index)}
                  className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-600"
                >
                  <FiTrash2 size={18} />
                  Remove Achievement
                </button>
              )}
            </div>
          ))}
      </div>

      <button
        onClick={addAchievement}
        className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-lg"
      >
        <FiPlus size={18} /> Add Achievement
      </button>
    </div>
  );
}
