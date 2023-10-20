import { React } from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import PropTypes from 'prop-types';
import '../styles/Layout.scss';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <SideBar />
      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
