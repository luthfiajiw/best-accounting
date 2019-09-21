import React from 'react';
import styles from './styles/home.css';

import bestLogo from '../../../assets/img/best-logo-512.png';

const Home = () => (
  <nav className="navbar navbar-expand-lg shadow-none">
    <span className="navbar-brand">
      <img src={bestLogo} className="d-inline-block align-top" width="50" height="50" alt="logo" />
      Best
    </span>
  </nav>
);

export default Home;
