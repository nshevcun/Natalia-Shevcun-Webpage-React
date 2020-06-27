import React from 'react';


import Footer from './components/footer.js';
import Header from './components/header.js';
import About from './components/about.js';
import Skills from './components/skills.js';
import Employment from './components/employment.js';
import Education from './components/education.js';
import Contact from './components/contact.js';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
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

export default App;