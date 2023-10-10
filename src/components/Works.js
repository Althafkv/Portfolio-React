import React, { useEffect, useState } from "react";
import { projectData } from "./Workdata";
import { projectsNav } from "./Workdata";
import Workitems from "./Workitems";

function Works() {
  const [item, setitem] = useState({ name: "projects" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "projects") {
      setProjects(projectData);
    } else {
      const newProjects = projectData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setitem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <>
      <div className="work-filters">
        {projectsNav.map((item, index) => (
          <span
            onClick={(e) => {
              handleClick(e, index);
            }}
            className={`${active === index ? "active-work" : ""} work-item`}
            key={index}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="work-container container grid">
        {projects.map((item) => (
          <Workitems item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default Works;
