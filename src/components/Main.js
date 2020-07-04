import React from 'react';

import Footer from './footer.js';
import About from './about.js';
import Skills from './skills.js';
import Employment from './employment.js';
import Education from './education.js';
import Contact from './contact.js';
import Projects from './proj.js';

function Main() {
  return (
    <div>

      <main>
        <Projects />
        <About />
        <Skills />
        <Employment />
        <Education />
        <Contact />
      </main>

      <footer>
      <Footer />
      </footer>
      
    </div>
  );
}

export default Main;