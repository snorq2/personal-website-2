import { useState } from 'react'
import '../../styles/styles.css'

function hamburger_click() {
  let navlist = document.getElementById("nav-list-links");
  if (navlist.className === "nav-list") {
    navlist.className += " responsive";
  } else {
    navlist.className = "nav-list";
  }
}


function NavBar () {

    //const [activePage, setActivePage] = useState('home')

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
            />
            <div id="nav-list-links" className="nav-list">
                <div id="nav-head">
                <a href="index.html">
                    <h1>Sawyer Norquist</h1>
                </a>
                </div>
                <a
                className="nav-link icon"
                href="javascript:void(0);"
                onClick={hamburger_click}
                aria-label="dropdown menu"
                >
                <i className="fa fa-bars" aria-hidden="true" />
                </a>
                <a href="resume.html" className="nav-link nav-wide">
                Resume
                </a>
                <a href="projects.html" className="nav-link nav-wide">
                Projects
                </a>
                <a href="index.html" className="nav-link nav-wide">
                About
                </a>
                <a href="contact.html" className="nav-link nav-wide">
                Contact
                </a>
            </div>
            </>
    );

}

export default NavBar;