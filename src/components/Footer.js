import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title" style={{ color: "#2C5F2D" }}>
          Portfolio.
        </h1>

        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="footer-link">
              Contact
            </a>
          </li>

          <li>
            <a href="#skills" className="footer-link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a
            style={{ backgroundColor: "#2C5F2D" }}
            href="https://instagram.com/althaf._.muhd"
            className="footer-social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            style={{ backgroundColor: "#2C5F2D" }}
            href="https://www.linkedin.com/in/althafkv"
            className="footer-social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            style={{ backgroundColor: "#2C5F2D" }}
            href="https://github.com/Althafkv"
            className="footer-social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer-copy">
          All Rights Reserved &#169; Althaf Kv - 2023
        </span>
      </div>
    </footer>
  );
}

export default Footer;
