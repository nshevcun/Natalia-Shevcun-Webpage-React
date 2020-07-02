import React from 'react';

import Footer from './components/footer.js';
import Header from './components/header.js';
import About from './components/about.js';
import Skills from './components/skills.js';
import Employment from './components/employment.js';
import Education from './components/education.js';
import Contact from './components/contact.js';
import Projects from './components/proj.js';

function Main() {
  return (
    <div>

      <header>
        <Header />
      </header>

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