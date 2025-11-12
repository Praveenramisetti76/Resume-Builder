import React, { useState, useRef } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import ResumePreview from "./components/ResumePreview";
import DownloadButton from "./components/DownloadButton";

export default function App() {
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState([{ degree: "", institution: "", year: "" }]);
  const [experience, setExperience] = useState([{ company: "", role: "", duration: "" }]);
  const [skills, setSkills] = useState([""]);

  const resumeRef = useRef();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📄 Resume Builder</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <PersonalInfo data={personal} setData={setPersonal} />
          <Education data={education} setData={setEducation} />
          <Experience data={experience} setData={setExperience} />
          <Skills data={skills} setData={setSkills} />
        </div>

        <div>
          <ResumePreview
            ref={resumeRef}
            personal={personal}
            education={education}
            experience={experience}
            skills={skills}
          />
          <DownloadButton resumeRef={resumeRef} />
        </div>
      </div>
    </div>
  );
}
