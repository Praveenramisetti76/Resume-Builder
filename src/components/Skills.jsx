import React from "react";

export default function Skills({ data, setData }) {
  const handleChange = (index, value) => {
    const newSkills = [...data];
    newSkills[index] = value;
    setData(newSkills);
  };

  const addSkill = () => setData([...data, ""]);

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      {data.map((skill, i) => (
        <input
          key={i}
          placeholder={`Skill ${i + 1}`}
          value={skill}
          onChange={(e) => handleChange(i, e.target.value)}
          className="w-full border p-2 mb-2 rounded"
        />
      ))}
      <button onClick={addSkill} className="text-blue-600">+ Add Skill</button>
    </div>
  );
}
