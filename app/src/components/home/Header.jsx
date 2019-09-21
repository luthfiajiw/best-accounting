import React from 'react';

import styles from './styles/header.css';
import bestLogo from '../../../assets/img/best-logo-512.png';

const Header = () => (
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg shadow-none d-flex justify-content-between">
      <span className="navbar-brand d-flex align-items-end">
        <img src={bestLogo} className="d-inline-block" width="60" height="50" alt="logo" />
        <span className={styles.bestLogo}>Best</span>
      </span>
      <i className={`far fa-power-off text-secondary ${styles.powerbutton}`} />
    </nav>
  </div>
);

export default Header;
