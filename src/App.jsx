import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      
      {/* Add id attributes for scrolling */}
      <section id="about">
        <About />
      </section>
      
      <section id="project">
        <Projects />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
