import React from 'react';
import '../assets/styles.css';

import Divider from '../assets/elements/line.png';

class LoginForm extends React.Component {
    render() {
        return(
            <React.Fragment>
                <form action="/action_page.php" method="post">

                    <div className="centeredtext">

                        <p className="fontshout smallerpaddingtop">
                            <b>WHO GOES THERE?</b>
                        </p>

                        <p>
                            <b>Please enter your username and password below, otherwise you shall not pass.</b>
                        </p>

                        <img src={Divider} alt="Divider Line" />

                    </div>

                    <div className="container">
                        
                        <div className="centered paddingtop">
                            <label htmlFor="username" className="fontresizer">
                                <b>Username:</b>
                            </label>

                            <input type="text" placeholder="Enter Username" name="username" style={{backgroundColor: '#f1e8d2'}} required /> {/* Added some in-line CSS here, because I wanted to change the BG color of the input fields on this page, but not in the main contact form */}
                        
                        </div>

                        <br />

                        <div className="centered">

                            <label htmlFor="password" className="fontresizer">
                                <b>Password:</b>
                            </label>

                            <input type="password" placeholder="Enter Password" name="password" style={{backgroundColor: '#f1e8d2'}} required />
                        
                        </div>

                        <br /><br /><br />

                        <div className="centered alignbottom">

                            <input type="submit" defaultValue="Login" />

                            <input type="reset" defaultValue="Cancel" />

                            <label>
                                <input type="checkbox" name="remember" /> Remember me
                            </label>

                        </div>
                        
                    </div>
                </form>

            </React.Fragment>
        );
    }
}

export default LoginForm;