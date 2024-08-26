import React from 'react';
import Header from './Components/Header'
import Hero from './Components/HeroSection';
import About from './Components/AboutSection';
import Portfolio from './Components/Portfolio';
import './index.css';  // Global styles

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;