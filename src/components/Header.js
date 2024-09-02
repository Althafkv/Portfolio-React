import React, { useState } from "react";
import "./Header.css";
import Darkmode from "./Darkmode/Darkmode";

function Header() {
  // change background header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [toggle, setToggle] = useState(false);
  const [activenav, setActivenav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav-logo" style={{ color: "#007F73" }}>
          Portfolio.
        </a>

        <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a
                style={{ fontWeight: "bold" }}
                href="#home"
                onClick={() => setActivenav("#home")}
                className={
                  activenav === "#home" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="uil uil-estate nav-icon"></i>Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => setActivenav("#about")}
                className={
                  activenav === "#about" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="uil uil-user nav-icon"></i>About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#skills"
                onClick={() => setActivenav("#skills")}
                className={
                  activenav === "#skills" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="uil uil-file-alt nav-icon"></i>Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                onClick={() => setActivenav("#projects")}
                className={
                  activenav === "#projects"
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                <i className="uil uil-scenery nav-icon"></i>Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#qualification"
                onClick={() => setActivenav("#qualification")}
                className={
                  activenav === "#qualification"
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                <i className="uil uil-graduation-cap nav-icon"></i>Qualification
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => setActivenav("#contact")}
                className={
                  activenav === "#contact" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="uil uil-message nav-icon"></i>Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav-close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>

        <div className="nav-toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
        <Darkmode />
      </nav>
    </header>
  );
}

export default Header;
