import React, { forwardRef } from "react";

const ResumePreview = forwardRef(({ personal, education, experience, skills }, ref) => {
  return (
    <div ref={ref} className="bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-bold mb-2">{personal.name || "Your Name"}</h2>
      <p>{personal.email || "your@email.com"} | {personal.phone || "1234567890"}</p>

      <hr className="my-4" />

      <section>
        <h3 className="text-lg font-semibold mb-2">Education</h3>
        {education.map((edu, i) => (
          <div key={i}>
            <p className="font-medium">{edu.degree}</p>
            <p>{edu.institution} - {edu.year}</p>
          </div>
        ))}
      </section>

      <section className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Experience</h3>
        {experience.map((exp, i) => (
          <div key={i}>
            <p className="font-medium">{exp.role}</p>
            <p>{exp.company} - {exp.duration}</p>
          </div>
        ))}
      </section>

      <section className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Skills</h3>
        <ul className="list-disc ml-6">
          {skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </section>
    </div>
  );
});

export default ResumePreview;
