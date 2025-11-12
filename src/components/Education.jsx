import React from "react";

export default function Education({ data, setData }) {
  const handleChange = (index, key, value) => {
    const newEdu = [...data];
    newEdu[index][key] = value;
    setData(newEdu);
  };

  const addEducation = () => setData([...data, { degree: "", institution: "", year: "" }]);

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      {data.map((edu, i) => (
        <div key={i} className="mb-3">
          <input
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => handleChange(i, "degree", e.target.value)}
            className="w-full border p-2 mb-2 rounded"
          />
          <input
            placeholder="Institution"
            value={edu.institution}
            onChange={(e) => handleChange(i, "institution", e.target.value)}
            className="w-full border p-2 mb-2 rounded"
          />
          <input
            placeholder="Year"
            value={edu.year}
            onChange={(e) => handleChange(i, "year", e.target.value)}
            className="w-full border p-2 mb-2 rounded"
          />
        </div>
      ))}
      <button onClick={addEducation} className="text-blue-600">+ Add More</button>
    </div>
  );
}
