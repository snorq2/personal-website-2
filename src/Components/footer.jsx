import '../../styles/styles.css'
import LinkedInImage from "../assets/In-White-34.png"

function Footer () {

    return (
        <div id="footer">
            <a href="https://www.linkedin.com/in/sawyer-norquist-33040582/">
                <img src={LinkedInImage} alt="LinkedIn" />
            </a>
            <p>© Sawyer Norquist 2022</p>
        </div>
    )
}

export default Footer