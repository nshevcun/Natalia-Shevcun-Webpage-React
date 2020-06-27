import React from 'react';
import Banner from './banner.js';
import Navbar from './navbar.js';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Banner />
                <Navbar />
            </React.Fragment>
        );
    }
}

export default Header;