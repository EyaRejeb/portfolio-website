import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>MyPortfolio</Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/extracurricular">Extracurricular</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
