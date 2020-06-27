import React from 'react';
import '../assets/styles.css';
import LegendTD from '../assets/images/l3d.png';

class Legend extends React.Component {
    render() {
        return(
            <React.Fragment>

                <div className="container">

                    <img src={LegendTD} className="image" alt="Walk Movie" /> {/* Yep, I actually worked on the stereo 3D of The Walk :) */}
                    
                    <div className="overlaytxt text">
                        <b>
                        <div className="centeredtext">
                            <u>2014 - 2018</u>
                            <br />
                            <u>LEGEND 3D</u>
                        </div>

                        <br />
                        + Senior stereo compositor<br />
                        + Experience in stereoscopic conversion<br />
                        + Experience in VFX scripting<br />
                        + 3+ years of corporate experience<br />
                        + Management of a team
                        <br />
                        + <a href="https://www.imdb.com/name/nm7253655/" target="_blank" rel="noreferrer noopener">Check out my IMDB</a>
                        </b>

                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

export default Legend;