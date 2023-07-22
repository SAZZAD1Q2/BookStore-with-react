import React from 'react';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';

const navLinks = [
  { path: '/', text: 'Books' },
  { path: '/categories', text: 'Categories' },
];

function Navbar() {
  return (
    <>
      <div className="navContainer">
        <div className="Navbar">
          <h1 className="logoStyle">Bookstore CMS</h1>
          <ul className="navItems">
            {
      navLinks.map((navLink) => (
        <li key={navLink.text} className="Nav">
          <Link to={navLink.path} className="navLink">{navLink.text}</Link>
        </li>
      ))
  }
          </ul>
        </div>
        <BsPersonCircle className="userIcon" />
      </div>
    </>
  );
}

export default Navbar;
