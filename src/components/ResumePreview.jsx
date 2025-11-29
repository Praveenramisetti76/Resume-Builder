import React, { forwardRef } from "react";

const ResumePreview = forwardRef(
  ({ personal, education, experience, skills, projects }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          backgroundColor: "#ffffff",
          color: "#000000",
          fontFamily: "Arial, sans-serif",
          padding: "40px",
          margin: "0",
          width: "100%",
          boxSizing: "border-box",
          lineHeight: "1.6",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            borderBottom: "3px solid #4f46e5",
            paddingBottom: "20px",
            marginBottom: "25px",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#1e1b4b",
              margin: "0 0 15px 0",
            }}
          >
            {personal.name || "Your Name"}
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
              fontSize: "13px",
              color: "#404040",
            }}
          >
            <span>{personal.email || "your@email.com"}</span>
            <span>•</span>
            <span>{personal.phone || "1234567890"}</span>
          </div>
        </div>

        {/* Professional Summary */}
        {personal.summary && (
          <section style={{ marginBottom: "20px" }}>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#1e1b4b",
                borderBottom: "2px solid #4f46e5",
                paddingBottom: "8px",
                marginBottom: "12px",
                margin: "0 0 12px 0",
              }}
            >
              Professional Summary
            </h3>
            <p
              style={{
                color: "#404040",
                fontSize: "13px",
                lineHeight: "1.6",
                margin: "0",
              }}
            >
              {personal.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && experience[0].company && (
          <section style={{ marginBottom: "20px" }}>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#1e1b4b",
                borderBottom: "2px solid #4f46e5",
                paddingBottom: "8px",
                marginBottom: "12px",
                margin: "0 0 12px 0",
              }}
            >
              💼 Work Experience
            </h3>
            <div>
              {experience.map((exp, i) => (
                <div key={i} style={{ marginBottom: "15px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "5px",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontWeight: "bold",
                          color: "#000000",
                          fontSize: "14px",
                          margin: "0 0 3px 0",
                        }}
                      >
                        {exp.role || "Position"}
                      </p>
                      <p
                        style={{
                          color: "#404040",
                          fontSize: "13px",
                          margin: "0",
                        }}
                      >
                        {exp.company || "Company"}
                      </p>
                    </div>
                    <span
                      style={{
                        color: "#404040",
                        fontSize: "12px",
                        fontStyle: "italic",
                      }}
                    >
                      {exp.duration || "Duration"}
                    </span>
                  </div>
                  {exp.description && (
                    <p
                      style={{
                        color: "#404040",
                        fontSize: "12px",
                        lineHeight: "1.5",
                        margin: "8px 0 0 0",
                      }}
                    >
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && education[0].degree && (
          <section style={{ marginBottom: "20px" }}>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#1e1b4b",
                borderBottom: "2px solid #4f46e5",
                paddingBottom: "8px",
                marginBottom: "12px",
                margin: "0 0 12px 0",
              }}
            >
              🎓 Education
            </h3>
            <div>
              {education.map((edu, i) => (
                <div key={i} style={{ marginBottom: "12px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontWeight: "bold",
                          color: "#000000",
                          fontSize: "14px",
                          margin: "0 0 3px 0",
                        }}
                      >
                        {edu.degree || "Degree"}
                      </p>
                      <p
                        style={{
                          color: "#404040",
                          fontSize: "13px",
                          margin: "0",
                        }}
                      >
                        {edu.institution || "Institution"}
                        {edu.field && ` • ${edu.field}`}
                      </p>
                    </div>
                    <span
                      style={{
                        color: "#404040",
                        fontSize: "12px",
                        fontStyle: "italic",
                      }}
                    >
                      {edu.year || "Year"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {projects.length > 0 && projects[0].title && (
          <section style={{ marginBottom: "20px" }}>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#1e1b4b",
                borderBottom: "2px solid #4f46e5",
                paddingBottom: "8px",
                marginBottom: "12px",
              }}
            >
              🚀 Projects
            </h3>

            {projects.map((proj, i) => (
              <div key={i} style={{ marginBottom: "12px" }}>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    margin: 0,
                    color: "#000",
                  }}
                >
                  {proj.title || "Project Title"}
                </p>

                {proj.link && (
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#4338ca",
                      margin: "2px 0 5px 0",
                      textDecoration: "underline",
                    }}
                  >
                    {proj.link}
                  </p>
                )}

                {proj.description && (
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#404040",
                      margin: 0,
                      lineHeight: "1.5",
                    }}
                  >
                    {proj.description}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && skills[0] && (
          <section>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#1e1b4b",
                borderBottom: "2px solid #4f46e5",
                paddingBottom: "8px",
                marginBottom: "12px",
                margin: "0 0 12px 0",
              }}
            >
              ⭐ Skills
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {skills.map(
                (skill, i) =>
                  skill && (
                    <span
                      key={i}
                      style={{
                        backgroundColor: "#e0e7ff",
                        color: "#312e81",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "500",
                        display: "inline-block",
                      }}
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
  }
);

ResumePreview.displayName = "ResumePreview";

export default ResumePreview;
