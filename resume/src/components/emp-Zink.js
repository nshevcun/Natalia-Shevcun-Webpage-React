import React from 'react';
import '../assets/styles.css';
import Zinkda from '../assets/images/zinkda.png';

class Zink extends React.Component {
    render() {
        return(
            <React.Fragment>

                {/*The multitude of DIV tags is due to an animated overlay with text that I created for the images in this section. 
                ** The images are placed into a container, and the text is placed into another container over the image */}

                <div className="container">

                    <img src={Zinkda} className="image" alt="Zink Digital Agency" />
                    
                    <div className="overlaytxt text">
                        <b>
                        <div className="centeredtext">
                            <u>2013, 2014</u> {/* I wanted the years to be in the center, unlike the rest of the text */}
                            <br />
                            <u>ZINK DIGITAL AGENCY</u> {/* I created separate underline wraps for each line, for clarity's sake */}
                        </div>

                        <br />
                        + Concept artist<br />
                        + Storyboard designer<br />
                        + Effects animator<br />
                        + Background &amp; matte painter<br />  
                        </b>

                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

export default Zink;