import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <header className="navStyle">
    <h2 className="logoStyle">Book Store</h2>
    <nav>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </nav>
  </header>
);

export default Navbar;
