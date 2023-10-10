import React from "react";

function Social() {
  return (
    <div className="home-social">
      <a
        style={{ color: "#2C5F2D" }}
        href="https://www.linkedin.com/in/althafkv"
        className="home-social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin"></i>
      </a>

      <a
        style={{ color: "#2C5F2D" }}
        href="https://github.com/Althafkv"
        className="home-social-icon"
        target="_blank"
      >
        <i class="uil uil-github"></i>
      </a>

      <a
        style={{ color: "#2C5F2D" }}
        href="https://www.instagram.com/althaf._.muhd"
        className="home-social-icon"
        target="_blank"
      >
        <i class="uil uil-instagram"></i>
      </a>
    </div>
  );
}

export default Social;
