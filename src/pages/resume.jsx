import '../../styles/styles.css'

function Resume() {
    return(
            <main className="content">
                <h1 className="content-header">Resume</h1>
                <div className="resume-section">
                    <h2>Personal Summary</h2>
                    <p>
                    Experienced lean technician and part time developer of 4 years, analyzing
                    systems and building tools to improve the quality and efficiency of
                    electrical switchgear production. Track record of delivering relevant,
                    quality outcomes across multiple production teams.
                    </p>
                </div>
                <div className="resume-section">
                    <h2 className="resume-section-header">Professional History</h2>
                    <h3 className="resume-employer">EATON, Wilsonville OR</h3>
                    <div className="resume-position">
                    <h4>Technician (2007-2012)</h4>
                    <ul>
                        <li>Assembled and wired medium-voltage switchgear</li>
                        <li>Maintained area 5S and other Lean standards</li>
                    </ul>
                    </div>
                    <div className="resume-position">
                    <h4>Product Line Coordinator (2012-2016)</h4>
                    <ul>
                        <li>
                        Managed day-to-day activities of production team building MVA
                        switchgear, averaging $10m annual output
                        </li>
                        <li>Oversaw deployment of Lean process on product line</li>
                    </ul>
                    </div>
                    <div className="resume-position">
                    <h4>Supply Chain Assistant (2016-2019)</h4>
                    <ul>
                        <li>
                        Order, scheduling, and expedite of production material of $12m annual
                        output, improving order process efficiency by 20%
                        </li>
                        <li>
                        Manage local product warehouse inventory, implementing efficient
                        tracking of damaged/excess material and reducing unused inventory by
                        90%
                        </li>
                    </ul>
                    </div>
                    <div className="resume-position">
                    <h4>Lean Technician (2019-current)</h4>
                    <ul>
                        <li>
                        Train and implement Lean/CIF methodology tools for entire plant, such
                        as 5S+, Value Stream Mapping, and Standard Work
                        </li>
                        <li>
                        Develop new process and process tools, such as a complete overhaul of
                        the non-conformance reporting, resulting in a 400% increase in
                        participation and capture of material and labor waste
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="resume-section">
                    <h2 className="resume-section-header">Education</h2>
                    <div>
                    <h3>PORTLAND STATE UNIVERSITY, Portland OR</h3>
                    <h4 className="resume-degree">Bachelor of Science in Computer Science</h4>
                    <h5 className="resume-grad-date">Ongoing (Winter 2023)</h5>
                    </div>
                </div>
                <div className="resume-section">
                    <h2 className="resume-section-header">Skills</h2>
                    <div className="resume-block">
                    <ul>
                        <li>
                        Familiar to proficient with C/C++, Java, Javascript, Python, Visual
                        Basic
                        </li>
                        <li>
                        Experience in development tools such as Git, Azure, Visual Studio, and
                        VIM
                        </li>
                        <li>Six Sigma Green Belt (pending)</li>
                        <li>
                        Lean Tool Expert in Value Stream Mapping, Leader Standard Work, 5S
                        </li>
                    </ul>
                    </div>
                </div>
            </main>
    );
}

export default Resume;