import React from 'react';
import '../assets/styles.css';

import GalleryApp from '../assets/images/gallery_app.png';

class GallerySite extends React.Component {
    render() {
        return(
            <React.Fragment>

                <article className="colproject">

                            <img src={GalleryApp} className="photo" alt="Screenshot of the Gallery App" />

                            <h3>“Toronto Sightseeing”</h3>

                            <p>A quick and simple one-page gallery dedicated to all the fun places and historical buildings you may visit in my amazing home of Toronto.</p>
                            
                            <br /><br /><br /><br />

                            <a href="https://github.com/nshevcun/assignment1-csfs1010" target="_blank" rel="noreferrer noopener"><h3>Click here to view the Git repository</h3></a>

                        </article>

            </React.Fragment>
        );
    }
}

export default GallerySite;