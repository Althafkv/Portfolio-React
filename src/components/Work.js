import React from "react";
import "./Work.css";
import Works from "./Works";

function Work() {
  return (
    <section className="work section" id="projects">
      <h2 className="section-title" style={{ color: "#007F73" }}>
        Portfolio
      </h2>
      <span className="section-subtitle">Recent Works</span>

      <Works />
    </section>
  );
}

export default Work;
