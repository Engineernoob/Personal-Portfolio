import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated to use Routes
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes> {/* Updated from Switch to Routes */}
        <Route path="/" element={<Home />} /> {/* Updated to use element instead of component */}
        <Route path="/about" element={<About />} /> {/* Updated to use element instead of component */}
        <Route path="/portfolio" element={<Portfolio />} /> {/* Updated to use element instead of component */}
      </Routes>
    </Router>
  );
}

export default App;