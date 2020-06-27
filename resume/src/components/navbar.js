import React from 'react';
import '../assets/styles.css';
import AboutButton from '../assets/elements/about-button.png';
import SkillButton from '../assets/elements/skill-button.png';
import EmployButton from '../assets/elements/employ-button.png';
import EduButton from '../assets/elements/educ-button.png';
import ContactButton from '../assets/elements/contact-button.png';

class Navbar extends React.Component {
    render() {
        return(
            <React.Fragment>
                <nav>
                    <a href="#about"><img className="navbutton" src={AboutButton} alt="About Button" /></a> 
                    <a href="#skills"><img className="navbutton" src={SkillButton} alt="Skills Button" /></a>
                    <a href="#employment"><img className="navbutton" src={EmployButton} alt="Employment Button" /></a>
                    <a href="#education"><img className="navbutton" src={EduButton} alt="Education Button" /></a>
                    <a href="#contact"><img className="navbutton" src={ContactButton} alt="Contact Button" /></a>
                </nav>
                <br /><br /> {/* Without these spaces, the "About" bar ends up being hidden by the navbar */}
            </React.Fragment>
        );
    }
}

export default Navbar;