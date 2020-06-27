import React from 'react';
import '../assets/styles.css';

import CodingIcon from '../assets/elements/coding-icon.png';
import CodingSkills from '../assets/elements/coding-skills.png';
import OfficeIcon from '../assets/elements/office-icon.png';
import OfficeSkills from '../assets/elements/office-skills.png';
import PlatformIcon from '../assets/elements/platform-icon.png';
import PlatformSkills from '../assets/elements/platform-skills.png';
import PencilIcon from '../assets/elements/pencil-icon.png';
import ArtSkills from '../assets/elements/art-skills.png';

class Skills extends React.Component {
    render() {
        return(
            <React.Fragment>
                <section>

                    <div className="divider">
                        <h2 id="skills" className="leftspace">TECHNICAL SKILLS</h2>
                    </div>

                    {/* The first row of the Skills grid - Coding Skills, Digital Office Management */}

                    <div className="row">
                        <div className="colskills bordright">
                            <img src={CodingIcon} className="titleicon" alt="Coding Skills" />
                            <b>CODING SKILLS</b>
                            <img src={CodingSkills} className="skillicon" alt="HTML5 JS CSS C++ Flash Python" />
                        </div>

                        <div className="colskills">
                            <img src={OfficeIcon} className="titleicon" alt="Office and Coding Tool Skills" />
                            <b>DIGITAL OFFICE MANAGEMENT 
                            <br />&amp; CODING TOOL SKILLS</b>
                            <img src={OfficeSkills} className="officeicon" alt="Microsoft Suite and Visual Studio Code" />
                        </div>
                    </div>

                    {/* The second row of the Skills grid - Platforms; Design, Animation, VFX Software  */}

                    <div className="row">
                        <div className="colskills bordright bordtop">
                            <img src={PlatformIcon} className="titleicon" alt="Platforms" />
                            <b>PLATFORMS</b>
                            <img src={PlatformSkills} className="skillicon" alt="PC Mac Linux VirtualBox" />
                        </div>

                        <div className="colskills bordtop">
                            <img src={PencilIcon} className="titleicon" alt="Design VFX and Animation Software" />
                            <b>DESIGN, ANIMATION &amp; VFX SOFTWARE</b>
                            <img src={ArtSkills} className="skillicon" alt="Art Software Skills" />
                        </div>
                    </div>

                </section>
            </React.Fragment>
        );
    }
}

export default Skills;