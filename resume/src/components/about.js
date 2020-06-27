import React from 'react';
import '../assets/styles.css';
import MyPhoto from '../assets/images/nata.png';

class About extends React.Component {
    render() {
        return(
            <React.Fragment>
                <article>
        
                    <div className="divider">
                        <h2 id="about" className="leftspace"> ABOUT</h2>
                    </div>
        
                    {/* Split layout into a two-column grid to place text and photo. I decided to keep a row/column layout over flexbox for browser compatibility purposes */}

                    <div className="row">
                        <div className="column left">
                            <p className="textpadding">
                                Greetings, and welcome!
                                <br /><br />                 
                                Looking to create a custom website from scratch?
                                <br /><br />         
                                Whether you seek help with the artistic direction of your project, need a hand with the technical implementation 
                                of your vision, or are unsure how to effectively formulate your amazing ideas in writing, you have come to the right 
                                place. Natalia is a detail-oriented, thoughtful specialist who successfully combines the artistic and imaginative nature 
                                of a storyteller with a passion for the logical, orderly beauty of mathematics and information technology.
                                <br /><br />
                                Natalia is a friendly and approachable listener who likes humour and helping others see the silver lining in any situation. 
                                She is neat and well-organized, which makes it easy for her to work individually; or, if required, successfully manage 
                                the production of a group. Her extensive work experience in a strict, high-stress, deadline-oriented corporate environment 
                                trained her to learn very fast, effectively prioritize tasks and function well under pressure, while keeping things positive 
                                for her team.
                                <br /><br />
                                In her free time, Natalia likes to read, write and take long walks in parks. She finds brainstorming potential solutions 
                                to various programming challenges to be much easier in the relaxing comfort of whispering foliage and chirping birds.
                                <br /><br />
                                Natalia is fluent in English and Russian. She also knows Romanian and French.
                            </p>
                        </div>

                        {/* The right column is for the photo */}

                        <div className="column right">
                            <img src={MyPhoto} className="widthsixty" alt="About Natalia" />
                        </div>

                    </div>

                </article>
            </React.Fragment>
        );
    }
}

export default About;