import React, { forwardRef } from "react";

const ResumePreview = forwardRef(({ personal, education, experience, skills }, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white p-8 shadow-lg rounded-lg border-4 border-indigo-600 w-full"
      style={{ minHeight: "100vh", fontFamily: "Calibri, sans-serif" }}
    >
      {/* Header */}
      <div className="text-center border-b-2 border-indigo-600 pb-4 mb-6">
        <h1 className="text-4xl font-bold text-indigo-900 mb-2">
          {personal.name || "Your Name"}
        </h1>
        <div className="flex justify-center gap-4 text-sm text-gray-700 flex-wrap">
          <span>{personal.email || "your@email.com"}</span>
          <span>•</span>
          <span>{personal.phone || "1234567890"}</span>
        </div>
      </div>

      {/* Professional Summary */}
      {personal.summary && (
        <section className="mb-6">
          <h3 className="text-lg font-bold text-indigo-900 border-b-2 border-indigo-600 pb-2 mb-3">
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">{personal.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && experience[0].company && (
        <section className="mb-6">
          <h3 className="text-lg font-bold text-indigo-900 border-b-2 border-indigo-600 pb-2 mb-3">
            💼 Work Experience
          </h3>
          <div className="space-y-4">
            {experience.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-gray-900">{exp.role || "Position"}</p>
                    <p className="text-gray-700">{exp.company || "Company"}</p>
                  </div>
                  <span className="text-gray-700 text-sm">{exp.duration || "Duration"}</span>
                </div>
                {exp.description && (
                  <p className="text-gray-700 mt-2 text-sm leading-relaxed">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && education[0].degree && (
        <section className="mb-6">
          <h3 className="text-lg font-bold text-indigo-900 border-b-2 border-indigo-600 pb-2 mb-3">
            🎓 Education
          </h3>
          <div className="space-y-3">
            {education.map((edu, i) => (
              <div key={i}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-gray-900">{edu.degree || "Degree"}</p>
                    <p className="text-gray-700">
                      {edu.institution || "Institution"}
                      {edu.field && ` • ${edu.field}`}
                    </p>
                  </div>
                  <span className="text-gray-700 text-sm">{edu.year || "Year"}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && skills[0] && (
        <section>
          <h3 className="text-lg font-bold text-indigo-900 border-b-2 border-indigo-600 pb-2 mb-3">
            ⭐ Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map(
              (skill, i) =>
                skill && (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                )
            )}
          </div>
        </section>
      )}
    </div>
  );
});

export default ResumePreview;
