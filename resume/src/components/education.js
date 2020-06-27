import React from 'react';
import '../assets/styles.css';

import Divider from '../assets/elements/line.png';
import YorkU from '../assets/elements/yorku.png';
import Ryerson from '../assets/elements/ryerson.png';
import Sheridan from '../assets/elements/sheridan.png';

class Education extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section>

                    {/* I was thinking of spliting the Education section into subcomponents, just like Employment;
                    * But I doubt that I will be returning to school/college very often from now on (online tutorials don't count) 
                    * So I won't be updating this component very often, if at all;
                    * Which is why I think it makes more sense to keep everything in one place in this case. */}
        
                    <div className="divider">
                        <h2 id="education" className="leftspace">EDUCATION</h2>
                    </div>
                    
                    {/* Left columns contain the logos (COLEDULEFT), and right columns contain the descriptions. */}
                    {/* Row One Begins Here - York University */}

                    <div className="row">

                        <div className="coleduleft">
                            <img src={YorkU} className="widthfull" alt="York Logo" />
                        </div>

                        <div className="coleduright">

                            <div className="fontresizer">
                                PROGRAM STARTED IN JANUARY 2020
                                <br />
                                CERTIFICATE IN FULL-STACK WEB DEVELOPMENT
                                <br /><br />
                            </div>
                            
                            In this program, Natalia is aspiring to gain a better understanding of effective full-stack web design.
                            She is looking forward to learning more about all layers of the software framework of web development.
                            <br /><br />

                            <img src={Divider} alt="Divider Line 1" />

                        </div>

                    </div>

                    {/* Row Two Begins Here - Ryerson University */}

                    <div className="row">

                        <div className="coleduleft">
                            <br /><br /><br />
                            <img src={Ryerson} className="widthfull" alt="Ryerson Logo" />
                        </div>

                        <div className="coleduright">

                            <div className="fontresizer">
                                MAY 2018   -   APRIL 2019
                                <br />
                                CERTIFICATE IN COMPUTER SECURITY AND DIGITAL FORENSICS
                                <br /><br />
                            </div>

                            Despite only having rudimentary knowledge of HTML, Javascript and C++ at this point,
                            Natalia nonetheless managed to ace this great program offered by Ryerson's Chang School of 
                            Continuing Education with a cumulative <u>GPA of 4.28 out of 4.33.</u> Natalia developed an understanding of
                            <u>network architecture</u> and <u>security</u>, <u>cryptography</u> and <u>cryptanalysis</u>. She learned about the inner workings of the web
                            and investigated device and storage drive images with a digital forensic toolkit.
                            For her capstone project, Natalia picked <u>honeypot data analysis,</u> and learned Python in order to complete the course work. You 
                            may find a copy of her final paper <a href="downloads/ckdf150.pdf" target="_blank" rel="noreferrer noopener">here</a> if you are curious to take a look.
                            <br /><br />

                            <img src={Divider} alt="Divider Line 2" />

                        </div>

                    </div>

                    {/* Row Three Begins Here - Sheridan College Institute */}

                    <div className="row">

                        <div className="coleduleft">
                            <img src={Sheridan} className="widthfull" alt="Sheridan Logo" />
                        </div>

                        <div className="coleduright">
                            <div className="fontresizer">
                                SEPTEMBER 2008   -   JUNE 2012
                                <br />
                                BACHELOR OF APPLIED ARTS IN ANIMATION
                                <br /><br />
                            </div>

                            In this program, Natalia learned a great deal about the principles of animation,
                            design, character development and conveying a particular story or mood through visual means.
                            <u>Teamwork</u> has also been a major ingredient of success in the course.
                            <br /><br />
                            
                            <img src={Divider} alt="Divider Line 3" />
                        </div>

                    </div>

                </section>

            </React.Fragment>
        );
    }
}

export default Education;