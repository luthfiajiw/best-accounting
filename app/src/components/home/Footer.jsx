import React from 'react';

import styles from './styles/footer.css';
import bamboo from '../../../assets/img/bamboo.png';

const Footer = () => (
  <nav className={`${styles.footer} navbar mx-5 d-flex justify-content-between navbar-expand-lg fixed-bottom shadow-none`}>
    <img
      src={bamboo}
      alt="bamboo"
      className="d-inline-block"
      height="250"
    />
    <img
      src={bamboo}
      alt="bamboo"
      className="d-inline-block"
      height="250"
    />
  </nav>
);

export default Footer;
