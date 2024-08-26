import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header'
import About from './Components/AboutSection';
import Portfolio from './Components/Portfolio';
import './index.css';  // Global styles

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />

      </Switch>
    </Router>
  );
}

export default App;