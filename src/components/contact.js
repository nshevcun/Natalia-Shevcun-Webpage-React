import React from 'react';
import '../assets/styles.css';

class Contact extends React.Component {
    render() {
        return(
            <React.Fragment>
                <section>
                    
                    <div className="divider">
                        <h2 id="contact" className="leftspace">CONTACT</h2>
                    </div>

                    <p className="centeredtext">
                        Wish to request references or get in touch? You may do so by filling out the form below.
                        <br /><br />
                        Looking forward to getting to know you better!
                    </p>

                    <form name="contactMe" action="action.php" method="send">

                        {/* Guest's Name Here */}

                        <label htmlFor="myname">What is your name?</label>
                        <input type="text" name="myname" id="myname" />

                        {/* Guest's Email Here */}

                        <p>
                            <label htmlFor="myemail">Please enter your e-mail address:</label>
                            <input type="email" id="myemail" required />
                        </p>

                        {/* Guest's Custom Message Here */}

                        <p>
                            <label htmlFor="message">Enter your message here:       </label>
                            <textarea rows={7} cols={30} name="message" id="message" defaultValue={""} />
                        </p>

                        <p>
                            <input type="submit" defaultValue="Submit" />
                            <input type="reset" defaultValue="Reset" />
                        </p>
                    </form>

                </section>
            </React.Fragment>
        );
    }
}

export default Contact;