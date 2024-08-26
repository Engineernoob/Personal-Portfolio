import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home">home</a></li>
          <li><a href="#about">about me</a></li>
          <li><a href="#portfolio">portfolio</a></li>
        </ul>
      </nav>
      <div className="logo">js</div>
    </header>
  );
};

export default Header;