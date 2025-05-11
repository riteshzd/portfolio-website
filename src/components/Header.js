import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="name-heading">Ritesh Dash</Link>
      <nav className="nav-links">
        <Link to="/essays" className="portfolio-link">Essays</Link>
        <a 
          href="https://www.linkedin.com/in/riteshzd/" 
          className="portfolio-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </nav>
    </header>
  );
}

export default Header; 