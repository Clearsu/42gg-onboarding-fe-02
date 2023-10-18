import { React } from 'react';
import '../styles/NavBar.scss';

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <a href="/cat">Cat</a>
      <a href="/dog">Dog</a>
      <a href="/monkey">Monkey</a>
    </nav>
  );
}
