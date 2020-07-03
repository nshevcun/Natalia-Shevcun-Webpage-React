import React from 'react';
import '../assets/styles.css';
import AboutButton from '../assets/elements/about-button.png';
import SkillButton from '../assets/elements/skill-button.png';
import EmployButton from '../assets/elements/employ-button.png';
import EduButton from '../assets/elements/educ-button.png';
import ContactButton from '../assets/elements/contact-button.png';
import ProjButton from '../assets/elements/projects-button.png';
import LoginButton from '../assets/elements/login-button.png';

class Navbar extends React.Component {
    render() {
        return(
            <React.Fragment>

                {/* I am not using this component in the new version of the app,
                but I'm keeping it for now in case it may be needed in the future. */}
                
                <nav>
                    <a href="/#projects"><img className="navbutton" src={ProjButton} alt="Projects Button" /></a>
                    <a href="/#about"><img className="navbutton" src={AboutButton} alt="About Button" /></a> 
                    <a href="/#skills"><img className="navbutton" src={SkillButton} alt="Skills Button" /></a>
                    <a href="/#employment"><img className="navbutton" src={EmployButton} alt="Employment Button" /></a>
                    <a href="/#education"><img className="navbutton" src={EduButton} alt="Education Button" /></a>
                    <a href="/#contact"><img className="navbutton" src={ContactButton} alt="Contact Button" /></a>
                    <a href="/login"><img className="navbutton" src={LoginButton} alt="Login Button" /></a>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;