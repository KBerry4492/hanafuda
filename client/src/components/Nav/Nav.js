import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
    <Link className="navbar-brand" to="/">
      Hanafuda Flurry
    </Link>
    
    <div id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/games">
            Games
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/all_cards">
            All cards
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/yaku">
            Point Values
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
