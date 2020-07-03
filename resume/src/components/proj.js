import React from 'react';
import '../assets/styles.css';

import HauntedSite from './proj-Haunted.js';
import ToDoSite from './proj-Todo.js';
import GallerySite from './proj-Gallery.js';

class Projects extends React.Component {
    render() {
        return (
            <React.Fragment>

                <br /><br /> {/* Without these spaces, the "About" bar ends up being hidden by the navbar */}
                
                {/* I will be updating this with other projects, 
                * so all projects will be separate components, for ease of use. */}

                <section id="projects">

                    {/* Figured that projects should go at the top, so employers don't need to look for them */}

                    <div className="divider">
                        <h2 className="leftspace">PROJECTS</h2>
                    </div>

                    <div className="row">

                        <HauntedSite />

                        <ToDoSite />

                        <GallerySite />

                    </div>
                </section>

            </React.Fragment>
        );
    }
}

export default Projects;