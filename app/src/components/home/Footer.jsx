import React from 'react';

import styles from './styles/footer.css';

const Footer = () => (
  <nav className="navbar navbar-expand-lg fixed-bottom shadow-none d-flex justify-content-center">
    <p className={styles.footer}>Blog</p>
    <p className={styles.footer}>Help Center</p>
    <p className={styles.footer}>Terms</p>
    <p className={styles.footer}>Privacy Policy</p>
    <p className={styles.footer_copyright}>© 2019 Best</p>
  </nav>

);

export default Footer;
