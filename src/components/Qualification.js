import React, { useState } from 'react'
import './Qualification.css'

function Qualification() {

    const [toggleState,setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
    <section className="qualification section" id='qualification'>
        <h2 className="section-title">Qualification</h2>
        <span className="section-subtitle">My personel journey</span>
        
        <div className="qualification-container container">
            <div className="qualification-tabs">
                <div className={toggleState === 1 ? "qualification-button qualification-active button--flex" : "qualification-button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification-icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification-button qualification-active button--flex" : "qualification-button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification-icon"></i> Experience
                </div>
            </div>

            <div className="qualification-sections">
                <div className={toggleState === 1 ? "qualification-content qualification-content-active" : "qualification-content"}>


                    <div className="qualification-data">
                        <div>
                            <h3 className="qualification-title">Bsc Electronics</h3>
                            <span className="qualification-subtitle">Calicut University</span>
                            <div className="qualification-calender">
                                <i class="uil uil-calendar-alt"></i> 2018 - 2021
                            </div>
                        </div>

                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>
                    </div>

                    <div className="qualification-data">
                        <div></div>

                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>

                        <div>
                            <h3 className="qualification-title">University of Calicut</h3>
                            <span className="qualification-subtitle">Bsc Electronics with computer science</span>
                            <div className="qualification-calender">
                                {/* <i className="uil uil-calendar-alt"></i> 2021 - Present */}
                            </div>
                        </div>
                    </div>

                    {/* <div className="qualification-data">
                        <div>
                            <h3 className="qualification-title"></h3>
                            <span className="qualification-subtitle">Web Development</span>
                            <div className="qualification-calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>
                    </div>

                    <div className="qualification-data">
                        <div></div>

                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>

                        <div>
                            <h3 className="qualification-title">UX Expert</h3>
                            <span className="qualification-subtitle">Calicut University</span>
                            <div className="qualification-calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2023
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className={toggleState === 2 ? "qualification-content qualification-content-active" : "qualification-content"}>
                    <div className="qualification-data">
                        <div>
                            <h3 className="qualification-title">Luminar Technolab</h3>
                            <span className="qualification-subtitle">Software Engineer</span>
                            <div className="qualification-calender">
                                <i className="uil uil-calendar-alt"></i> 2023 - Intern
                            </div>
                        </div>

                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>
                    </div>

                    <div className="qualification-data">
                        <div></div>

                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>

                        <div>
                            <h3 className="qualification-title">Luminar Technolab</h3>
                            <span className="qualification-subtitle">Mearn Stack</span>
                            <div className="qualification-calender">
                                {/* <i className="uil uil-calendar-alt"></i> 2021 - Present */}
                            </div>
                        </div>
                    </div>

                    {/* <div className="qualification-data">
                        <div>
                            <h3 className="qualification-title"></h3>
                            <span className="qualification-subtitle">Web Designer</span>
                            <div className="qualification-calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification