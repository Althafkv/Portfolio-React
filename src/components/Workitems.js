import React from "react";

function Workitems({ item }) {
  return (
    <div className="work-card" key={item.id}>
      <img src={item.image} alt="" className="work-image" />
      <h3 className="work-title">{item.title}</h3>

      <div className="work-button">
        <a target="_blank" href={item.demo}>
          Live
        </a>
        <i
          style={{ cursor: "pointer" }}
          className="bx bx-right-arrow-alt work-button-icon"
        ></i>
      </div>

      <div className="work-button">
        <a target="_blank" href={item.github}>
          Github Link
        </a>
        <i
          style={{ cursor: "pointer" }}
          className="bx bx-right-arrow-alt work-button-icon"
        ></i>
      </div>

      <div className="work-button">
        <a target="_blank" href={item.tut}>
          Demo
        </a>
        <i
          style={{ cursor: "pointer" }}
          className="bx bx-right-arrow-alt work-button-icon"
        ></i>
      </div>
    </div>
  );
}

export default Workitems;
