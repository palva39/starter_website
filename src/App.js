import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NewsSection from './components/NewsSection';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <NewsSection /> {/* NEW SECTION */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
