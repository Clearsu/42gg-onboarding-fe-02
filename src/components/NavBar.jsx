import { React } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.scss';

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
