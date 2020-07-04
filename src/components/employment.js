import React from 'react';
import '../assets/styles.css';

import Zink from './emp-Zink.js';
import Legend from './emp-Legend.js';
import Slomyanski from './emp-SL.js';
import Misc from './emp-Misc.js';

class Employment extends React.Component {
    render() {
        return(
            <React.Fragment>
                <section>

                    <div className="divider">
                        <h2 id="employment" className="leftspace">EMPLOYMENT</h2>
                    </div>

                    {/* I split this section into subcomponents, to swap out the workplaces easily, should the need arise. 
                    ** emp-Zink was my main template for the other workplace components. Please see empZink for detailed comments.
                    ** emp-SL is the clean template for any future workplace components. */}

                    <div className="row">
                        <div className="colskills">

                            <Zink />

                        </div>

                        <div className="colskills">

                            <Legend />
                        
                        </div>
                    </div>

                    {/* This is the start of the second row */}

                    <div className="row">
                        <div className="colskills">

                            <Slomyanski />
                        
                        </div>

                        <div className="colskills">

                            <Misc />
                        
                        </div>
                    </div>

                </section>

            </React.Fragment>
        );
    }
}

export default Employment;