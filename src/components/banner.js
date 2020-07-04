import React from 'react';
import '../assets/styles.css';

class Banner extends React.Component {
    render() {
        return (
            <React.Fragment>
            <div className="banner">&nbsp;NATALIA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SHEVCUN</div> 
            
            {/* ** I added the spaces to create enough spacing between the words in order for the logo to fit. 
            ** The logo itself has been added as a BG to the element "banner" in CSS */}

           <br /><br /><br /><br /><br />
            
            {/* These spaces were also added to create sufficient spacing between the banner and the navbar */}

            </React.Fragment>
        );
    }
}

export default Banner;