import React from 'react';
import '../assets/styles.css';
import Miscproj from '../assets/images/miscproj.png';

class Misc extends React.Component {
    render() {
        return(
            <React.Fragment>

                <div className="container">

                    <img src={Miscproj} className="image" alt="Miscellaneous Projects" />

                    <div className="overlaytxt text">
                        <b>
                        <div className="centeredtext">
                            <u>2012 - Present</u>
                            <br />
                            <u>MISCELLANEOUS PROJECTS</u>
                        </div>

                        <br />
                        + Graphic design &amp; branding<br />
                        + Illustration and concept art<br />
                        + Editing and copywriting<br />
                        + Translation<br />
                        + Retail and customer service
                        </b>

                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Misc;