import React from "react";

function Social() {
  return (
    <div className="home-social">
      <a
        style={{ color: "#007F73" }}
        href="https://www.linkedin.com/in/althafkv"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        style={{ color: "#007F73" }}
        href="https://github.com/Althafkv"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>

      <a
        style={{ color: "#007F73" }}
        href="https://www.instagram.com/althaf.kv_"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>
    </div>
  );
}

export default Social;
