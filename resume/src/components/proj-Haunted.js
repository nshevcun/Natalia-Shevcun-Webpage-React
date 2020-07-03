import React from 'react';
import '../assets/styles.css';

import Haunted from '../assets/images/berkyn-screen.png';

class HauntedSite extends React.Component {
    render() {
        return (
            <React.Fragment>
                <article className="colproject">

                    <img src={Haunted} className="photo" alt="Screenshot of Gallery created for the Forlorn Places, Fading Faces website" />

                    <h3>"Forlorn Places, Fading Faces"</h3>

                    <p>A haunting photo gallery created by me as part of a bigger team project dedicated to urbex photography and exploration of abandoned locations. It was great fun, coming up with various ways in which the eerie “ghostly” theme could be conveyed through code – from planning a “dusty”, desaturated color palette, to creating the asynchronous, letter-by-letter fade-in animation of the titles.</p>

                    <a href="https://github.com/nshevcun/HauntedTheme2/tree/gallery" target="_blank" rel="noreferrer noopener"><h3>Click here to view the Git repository</h3></a>

                </article>
            </React.Fragment>
        );
    }
}

export default HauntedSite;