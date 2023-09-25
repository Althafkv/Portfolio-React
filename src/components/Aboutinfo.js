import React from 'react'

function Aboutinfo() {
  return (
    <div className="about-info grid">
      <div className="about-box">
      <i class='bx bx-laptop about-icon'></i>

        <h3 className="about-title">Developer</h3>
        <span className="about-subtitle">Mearn Stack</span>
      </div>

      <div className="about-box">
      <i class='bx bx-notepad about-icon'></i>

        <h3 className="about-title">Completed</h3>
        <span className="about-subtitle">20+ Projects</span>
      </div>

      <div className="about-box">
      <i class='bx bx-support about-icon'></i>

        <h3 className="about-title">Support</h3>
        <span className="about-subtitle">Online 24/7</span>
      </div>
    </div>
  )
}

export default Aboutinfo