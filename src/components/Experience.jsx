import React from "react";

export default function Experience({ data, setData }) {
  const handleChange = (index, key, value) => {
    const newExp = [...data];
    newExp[index][key] = value;
    setData(newExp);
  };

  const addExperience = () => setData([...data, { company: "", role: "", duration: "" }]);

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      {data.map((exp, i) => (
        <div key={i} className="mb-3">
          <input
            placeholder="Company"
            value={exp.company}
            onChange={(e) => handleChange(i, "company", e.target.value)}
            className="w-full border p-2 mb-2 rounded"
          />
          <input
            placeholder="Role"
            value={exp.role}
            onChange={(e) => handleChange(i, "role", e.target.value)}
            className="w-full border p-2 mb-2 rounded"
          />
          <input
            placeholder="Duration"
            value={exp.duration}
            onChange={(e) => handleChange(i, "duration", e.target.value)}
            className="w-full border p-2 mb-2 rounded"
          />
        </div>
      ))}
      <button onClick={addExperience} className="text-blue-600">+ Add More</button>
    </div>
  );
}
