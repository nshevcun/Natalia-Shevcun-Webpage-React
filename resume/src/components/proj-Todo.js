import React from 'react';
import '../assets/styles.css';

import ToDoApp from '../assets/images/todo_app.png';

class ToDoSite extends React.Component {
    render() {
        return(
            <React.Fragment>

                <article className="colproject">

                    <img src={ToDoApp} className="photo" alt="Screenshot of the To-Do App" />

                    <h3>“To-Do App”</h3>

                    <p>Ever wanted a handy way to keep track of daily tasks without having to use up a ton of paper? This little application may be just what you were looking for.</p>

                    <br /><br /><br />
                    
                    <a href="https://github.com/nshevcun/assignment2-csfs1010" target="_blank" rel="noreferrer noopener"><h3>Click here to view the Git repository</h3></a>

                </article>

            </React.Fragment>
        );
    }
}

export default ToDoSite;