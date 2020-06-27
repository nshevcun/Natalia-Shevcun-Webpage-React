import React from 'react';
import '../assets/styles.css';
import SLaw from '../assets/images/sl-law.png';

class Slomyanski extends React.Component {
    render() {
        return(
            <React.Fragment>

                <div className="container">

                    <img src={SLaw} className="image" alt="SL Law" />

                    <div className="overlaytxt text">
                        <b>
                        <div className="centeredtext">
                            <u>2019 - Present</u>
                            <br />
                            <u>SLOMYANSKI LAW</u>
                        </div>

                        <br />
                        + Assistant to lawyer<br />
                        + Office clerk<br />
                        + File management, customer service<br />
                        + Experience in composition of legal letters
                        </b>

                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Slomyanski;