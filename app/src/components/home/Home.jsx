import React from 'react';
import styles from './styles/home.css';

const Home = () => (
  <nav className="navbar navbar-expand-lg shadow-none">
    <div className="container">
      <span className={`navbar-brand ${styles.app}`}>Navbar</span>
    </div>
  </nav>
);

export default Home;
