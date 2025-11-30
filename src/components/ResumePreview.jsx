// import React, { forwardRef } from "react";

// const ResumePreview = forwardRef(
//   (
//     { personal, education, experience, skills, projects, achievements },
//     ref
//   ) => {
//     return (
//       <div
//         ref={ref}
//         style={{
//           backgroundColor: "#ffffff",
//           color: "#000000",
//           fontFamily: "Arial, sans-serif",
//           padding: "40px",
//           lineHeight: "1.2",
//         }}
//       >
//         {/* Header */}
//         <div
//           style={{
//             textAlign: "center",
//             borderBottom: "2px solid black",
//             paddingBottom: "10px",
//             marginBottom: "10px",
//           }}
//         >
//           <h1
//             style={{
//               fontSize: "32px",
//               fontWeight: "bold",
//               color: "#1e1b4b",
//               margin: "0 0 5px 0",
//             }}
//           >
//             {personal.name || "Your Name"}
//           </h1>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               gap: "5px",
//               flexWrap: "wrap",
//               fontSize: "12px",
//               color: "#404040",
//             }}
//           >
//             <span>{personal.email || "your@email.com"}</span>
//             <span>•</span>
//             <span>{personal.phone || "1234567890"}</span>
//           </div>
//         </div>

//         {/* Professional Summary */}
//         {personal.summary && (
//           <section style={{ marginBottom: "10px" }}>
//             <h3
//               style={{
//                 fontSize: "14px",
//                 fontWeight: "bold",
//                 color: "#1e1b4b",
//                 borderBottom: "1.5px solid black",
//                 paddingBottom: "6px",
//                 marginBottom: "10px",
//               }}
//             >
//               Professional Summary
//             </h3>
//             <p
//               style={{
//                 color: "#404040",
//                 fontSize: "10px",
//                 lineHeight: "1.2",
//                 margin: "0",
//               }}
//             >
//               {personal.summary}
//             </p>
//           </section>
//         )}

//         {/* Experience */}
//         {experience.length > 0 && experience[0].company && (
//           <section style={{ marginBottom: "10px" }}>
//             <h3
//               style={{
//                 fontSize: "14px",
//                 fontWeight: "bold",
//                 color: "#1e1b4b",
//                 borderBottom: "1.5px solid black",
//                 paddingBottom: "6px",
//                 marginBottom: "10px",
//                 margin: "0 0 10px 0",
//               }}
//             >
//               Work Experience
//             </h3>
//             <div>
//               {experience.map((exp, i) => (
//                 <div key={i} style={{ marginBottom: "10px" }}>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       alignItems: "flex-start",
//                       marginBottom: "3px",
//                     }}
//                   >
//                     <div>
//                       <p
//                         style={{
//                           fontWeight: "bold",
//                           color: "#000000",
//                           fontSize: "12px",
//                           margin: "0 0 3px 0",
//                         }}
//                       >
//                         {exp.role || "Position"}
//                       </p>
//                       <p
//                         style={{
//                           color: "#404040",
//                           fontSize: "10px",
//                           margin: "0",
//                         }}
//                       >
//                         {exp.company || "Company"}
//                       </p>
//                     </div>
//                     <span
//                       style={{
//                         color: "#404040",
//                         fontSize: "10px",
//                         fontStyle: "italic",
//                       }}
//                     >
//                       {exp.duration || "Duration"}
//                     </span>
//                   </div>
//                   {exp.description && (
//                     <p
//                       style={{
//                         color: "#404040",
//                         fontSize: "10px",
//                         lineHeight: "1.2",
//                         marginTop: "3px",
//                       }}
//                     >
//                       {exp.description}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* Education */}
//         {education.length > 0 && education[0].degree && (
//           <section style={{ marginBottom: "10px" }}>
//             <h3
//               style={{
//                 fontSize: "14px",
//                 fontWeight: "bold",
//                 color: "#1e1b4b",
//                 borderBottom: "1.5px solid black",
//                 paddingBottom: "6px",
//                 marginBottom: "10px",
//                 margin: "0 0 10px 0",
//               }}
//             >
//               Education
//             </h3>
//             <div>
//               {education.map((edu, i) => (
//                 <div key={i} style={{ marginBottom: "10px" }}>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       alignItems: "flex-start",
//                     }}
//                   >
//                     <div>
//                       <p
//                         style={{
//                           fontWeight: "bold",
//                           color: "#000000",
//                           fontSize: "12px",
//                           margin: "0 0 3px 0",
//                         }}
//                       >
//                         {edu.degree}
//                       </p>
//                       <p
//                         style={{
//                           color: "#404040",
//                           fontSize: "10px",
//                           margin: "0",
//                         }}
//                       >
//                         {edu.institution}
//                         {edu.field && ` • ${edu.field}`}
//                       </p>
//                       <p
//                         style={{
//                           color: "#404040",
//                           fontSize: "10px",
//                           margin: "0",
//                         }}
//                       >
//                         {edu.grade && `Grade: ${edu.grade}`}
//                       </p>
//                     </div>
//                     <span
//                       style={{
//                         color: "#404040",
//                         fontSize: "10px",
//                         fontStyle: "italic",
//                       }}
//                     >
//                       {edu.year}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* Skills */}
//         {skills.length > 0 && skills[0] && (
//           <section className="section" style={{ marginBottom: "10px" }}>
//             <h3
//               style={{
//                 fontSize: "14px",
//                 fontWeight: "bold",
//                 color: "#1e1b4b",
//                 borderBottom: "1.5px solid black",
//                 paddingBottom: "6px",
//                 marginBottom: "10px",
//               }}
//             >
//               Skills
//             </h3>

//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "6px 20px", 
//                 fontSize: "10px",
//                 color: "#444",
//                 paddingLeft: "10px",
//               }}
//             >
//               {skills.filter(Boolean).map((skill, i) => (
//                 <span
//                   key={i}
//                   style={{
//                     width: "16%",
//                     minWidth: "16%"
//                   }}
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* Projects Section */}
//         {Array.isArray(projects) &&
//           projects.length > 0 &&
//           projects[0].title && (
//             <section style={{ marginBottom: "10px" }}>
//               <h3
//                 style={{
//                   fontSize: "14px",
//                   fontWeight: "bold",
//                   color: "#1e1b4b",
//                   borderBottom: "1.5px solid black",
//                   paddingBottom: "6px",
//                   marginBottom: "10px",
//                 }}
//               >
//                 Projects
//               </h3>

//               {projects.map((proj, i) => (
//                 <div
//                   key={i}
//                   style={{
//                     marginBottom: "10px",
//                     position: "relative",
//                   }}
//                 >
//                   <div>
//                     <p
//                       style={{
//                         fontWeight: "bold",
//                         fontSize: "12px",
//                         margin: 0,
//                         color: "#000",
//                       }}
//                     >
//                       {proj.title}
//                     </p>
//                   </div>

//                   {/* Description */}
//                   {proj.description && (
//                     <p
//                       style={{
//                         fontSize: "10px",
//                         color: "#404040",
//                         marginTop: "3px",
//                         lineHeight: "1.2",
//                       }}
//                     >
//                       {proj.description}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </section>
//           )}

//         {/* Achievements Section */}
//         {Array.isArray(achievements) &&
//           achievements.length > 0 &&
//           achievements[0] && (
//             <section style={{ marginBottom: "10px" }}>
//               <h3
//                 style={{
//                   fontSize: "14px",
//                   fontWeight: "bold",
//                   color: "#1e1b4b",
//                   borderBottom: "1.5px solid black",
//                   paddingBottom: "6px",
//                   marginBottom: "10px",
//                 }}
//               >
//                 Achievements
//               </h3>

//               <ul
//                 style={{
//                   margin: 0,
//                   paddingLeft: "20px",
//                   listStyleType: "disc",
//                 }}
//               >
//                 {achievements.map((item, i) => (
//                   <li
//                     key={i}
//                     style={{
//                       fontSize: "10px",
//                       color: "#404040",
//                       marginBottom: "4px",
//                       lineHeight: "1.2",
//                     }}
//                   >
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </section>
//           )}
//       </div>
//     );
//   }
// );

// ResumePreview.displayName = "ResumePreview";

// export default ResumePreview;


import React from "react";

export default function ResumePreview({
  personal,
  education,
  experience,
  skills,
  projects,
  achievements,
}) {
  return (
    <div
      id="resume-preview-area"   // ⭐ used for PDF export
      style={{
        backgroundColor: "#ffffff",
        color: "#000000",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        lineHeight: "1.2",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          borderBottom: "2px solid black",
          paddingBottom: "10px",
          marginBottom: "10px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#1e1b4b",
            margin: "0 0 5px 0",
          }}
        >
          {personal.name || "Your Name"}
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "5px",
            flexWrap: "wrap",
            fontSize: "12px",
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
        <section style={{ marginBottom: "10px" }}>
          <h3
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#1e1b4b",
              borderBottom: "1.5px solid black",
              paddingBottom: "6px",
              marginBottom: "10px",
            }}
          >
            Professional Summary
          </h3>
          <p
            style={{
              color: "#404040",
              fontSize: "10px",
              lineHeight: "1.2",
              margin: "0",
            }}
          >
            {personal.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && experience[0].company && (
        <section style={{ marginBottom: "10px" }}>
          <h3
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#1e1b4b",
              borderBottom: "1.5px solid black",
              paddingBottom: "6px",
              marginBottom: "10px",
            }}
          >
            Work Experience
          </h3>
          <div>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "3px",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#000000",
                        fontSize: "12px",
                        margin: "0 0 3px 0",
                      }}
                    >
                      {exp.role || "Position"}
                    </p>
                    <p
                      style={{
                        color: "#404040",
                        fontSize: "10px",
                        margin: "0",
                      }}
                    >
                      {exp.company || "Company"}
                    </p>
                  </div>
                  <span
                    style={{
                      color: "#404040",
                      fontSize: "10px",
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
                      fontSize: "10px",
                      lineHeight: "1.2",
                      marginTop: "3px",
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
        <section style={{ marginBottom: "10px" }}>
          <h3
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#1e1b4b",
              borderBottom: "1.5px solid black",
              paddingBottom: "6px",
              marginBottom: "10px",
            }}
          >
            Education
          </h3>
          <div>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "10px" }}>
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
                        fontSize: "12px",
                        margin: "0 0 3px 0",
                      }}
                    >
                      {edu.degree}
                    </p>
                    <p
                      style={{
                        color: "#404040",
                        fontSize: "10px",
                        margin: "0",
                      }}
                    >
                      {edu.institution}
                      {edu.field && ` • ${edu.field}`}
                    </p>
                    <p
                      style={{
                        color: "#404040",
                        fontSize: "10px",
                        margin: "0",
                      }}
                    >
                      {edu.grade && `Grade: ${edu.grade}`}
                    </p>
                  </div>
                  <span
                    style={{
                      color: "#404040",
                      fontSize: "10px",
                      fontStyle: "italic",
                    }}
                  >
                    {edu.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && skills[0] && (
        <section style={{ marginBottom: "10px" }}>
          <h3
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#1e1b4b",
              borderBottom: "1.5px solid black",
              paddingBottom: "6px",
              marginBottom: "10px",
            }}
          >
            Skills
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px 20px",
              fontSize: "10px",
              color: "#444",
              paddingLeft: "10px",
            }}
          >
            {skills.filter(Boolean).map((skill, i) => (
              <span
                key={i}
                style={{
                  width: "22%", // 4 per row
                  minWidth: "22%",
                }}
              >
                • {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {Array.isArray(projects) && projects.length > 0 && projects[0].title && (
        <section style={{ marginBottom: "10px" }}>
          <h3
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#1e1b4b",
              borderBottom: "1.5px solid black",
              paddingBottom: "6px",
              marginBottom: "10px",
            }}
          >
            Projects
          </h3>

          {projects.map((proj, i) => (
            <div key={i} style={{ marginBottom: "10px" }}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  margin: 0,
                  color: "#000",
                }}
              >
                {proj.title}
              </p>

              {proj.description && (
                <p
                  style={{
                    fontSize: "10px",
                    color: "#404040",
                    marginTop: "3px",
                    lineHeight: "1.2",
                  }}
                >
                  {proj.description}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Achievements */}
      {Array.isArray(achievements) && achievements.length > 0 && achievements[0] && (
        <section style={{ marginBottom: "10px" }}>
          <h3
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#1e1b4b",
              borderBottom: "1.5px solid black",
              paddingBottom: "6px",
              marginBottom: "10px",
            }}
          >
            Achievements
          </h3>

          <ul
            style={{
              margin: 0,
              paddingLeft: "20px",
              listStyleType: "disc",
            }}
          >
            {achievements.map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: "10px",
                  color: "#404040",
                  marginBottom: "4px",
                  lineHeight: "1.2",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
