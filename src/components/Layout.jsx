import { React } from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import PropTypes from 'prop-types';
import '../styles/Layout.scss';

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <div className="layout-main-wrapper">
        <SideBar />
        <main>{children}</main>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
