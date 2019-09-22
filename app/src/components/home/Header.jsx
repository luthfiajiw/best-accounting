import React from 'react';

import styles from './styles/header.css';
import bestBrand from '../../../assets/img/best-brand.png';

const Header = () => (
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg shadow-none d-flex justify-content-between">
      <span className="navbar-brand d-flex align-items-end">
        <img
          src={bestBrand}
          className="d-inline-block"
          width="145"
          height="50"
          alt="logo"
        />
      </span>
      <i className={`far fa-power-off text-secondary ${styles.powerbutton}`} />
    </nav>
  </div>
);

export default Header;
