import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-neutral-700 selection:text-white">
      <NavBar />
      <main>
        <Home />
        <About />
        <Work />
      </main>
      <Contact />
    </div>
  );
}
