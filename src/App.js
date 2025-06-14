import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MealViewer from './components/MealViewer';

import { database } from './firebase';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MealViewer />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
