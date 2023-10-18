import { React } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.scss';

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-bar-link">
        Home
      </Link>
      <Link to="/about" className="nav-bar-link">
        About
      </Link>
      <Link to="/contact" className="nav-bar-link">
        Contact
      </Link>
    </nav>
  );
}
