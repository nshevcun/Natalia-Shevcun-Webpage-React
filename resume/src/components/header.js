import React from 'react';
import Banner from './banner.js';
import Navbar from './navbar.js';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* I am not using this component in the new version of the app,
                but I'm keeping it for now in case it may be needed in the future. */}
                <Banner />
                <Navbar />
            </React.Fragment>
        );
    }
}

export default Header;