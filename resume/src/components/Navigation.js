import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import '../assets/styles.css';
import Banner from './banner.js';
import AboutButton from '../assets/elements/about-button.png';
import SkillButton from '../assets/elements/skill-button.png';
import EmployButton from '../assets/elements/employ-button.png';
import EduButton from '../assets/elements/educ-button.png';
import ContactButton from '../assets/elements/contact-button.png';
import ProjButton from '../assets/elements/projects-button.png';
import LoginButton from '../assets/elements/login-button.png';

function Navigation() {
    return(
        <div>
            <header>

                <Banner /> {/* To make things simpler, I decide to combine Navigation with my Banner, and avoid the use of the Header. */}

                <nav>
                    <Link to="/#projects"><img className="navbutton" src={ProjButton} alt="Projects Button" /></Link>
                    <Link to="/#about"><img className="navbutton" src={AboutButton} alt="About Button" /></Link>
                    <Link to="/#skills"><img className="navbutton" src={SkillButton} alt="Skills Button" /></Link>
                    <Link to="/#employment"><img className="navbutton" src={EmployButton} alt="Employment Button" /></Link>
                    <Link to="/#education"><img className="navbutton" src={EduButton} alt="Education Button" /></Link>
                    <Link to="/#contact"><img className="navbutton" src={ContactButton} alt="Contact Button" /></Link>
                    <NavLink to="/login"><img className="navbutton" src={LoginButton} alt="Login Button" /></NavLink>
                </nav>
                
            </header>
        </div>
    );
}

export default Navigation;