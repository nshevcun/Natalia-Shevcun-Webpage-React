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

                    <form name="contactMe" action="action.php" onsubmit="return validateForm()" method="send">

                        {/* Guest's Name Here */}

                        <label htmlFor="myname">What is your name?</label>
                        <input type="text" name="myname" id="myname" />

                        {/* Guest's Inquiry Selection Here */}
                        {/* I decided this section should be a list - to help me sort the messages according to importance */}

                        <p>
                            <label htmlFor="myinquiry">What is the nature of your inquiry?       </label>
                            <select name="myinquiry" id="myinquiry">
                            <option value="references">I'd like to request your references</option>
                            <option value="quote">I'd like to get a project quote</option>
                            <option value="interview">I'd like to schedule an interview with you</option>
                            <option value="hire">I'd like you to join our team</option>
                            <option value="comment">This is just a general comment</option>
                            </select>
                        </p>

                        {/* Guest's Favourite Colour Here */}

                        <p>
                            <label htmlFor="mycolor">Your favourite colour?       </label>
                            <input type="color" defaultValue="#ffffff" id="mycolor" />
                            {/*Knowing the favourite color may be useful - might give me an idea what jacket to wear to the interview ;-) */}
                        </p>

                        {/* Guest's Email Here */}

                        <p>
                            <label htmlFor="myemail">Please enter your e-mail address:</label>
                            <input type="email" id="myemail" required />
                        </p>

                        {/* Guest's Phone Number Here */}

                        <p>
                            <label htmlFor="myphone">Please enter your phone number:</label>
                            <input type="tel" name="myphone" id="myphone" placeholder={4161231234} />
                        </p>

                        {/* Guest's Preferred Contact Method Here */}

                        <p>
                            You would prefer to be contacted by:
                        </p>

                        <br />
                        <input type="checkbox" name="byemail" id="byemail" />
                        <label htmlFor="byemail">E-mail</label>
                        <input type="checkbox" name="byphone" id="byphone" />
                        <label htmlFor="byphone">Phone</label>

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