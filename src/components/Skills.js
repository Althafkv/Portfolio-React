import React from "react";
import "./Skills.css";
import Frontendskills from "./Frontendskills";
import Backendskills from "./Backendskills";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title" style={{ color: "#007F73" }}>
        Skills
      </h2>
      <span className="section-subtitle">My technichal level</span>

      <div className="skills-container container grid">
        <Frontendskills />
        <Backendskills />
      </div>
    </section>
  );
}

export default Skills;
