import React from 'react';
import { Animated } from 'react-animated-css';

import bestLogo from '../../../assets/img/best-logo-white-512.png';
import styles from './styles/splash-screen.css';

const SplashScreen = () => (
  <div className={styles.splash_screen}>
    <Animated animationIn="fadeIn" animationInDuration={4000}>
      <div className={styles.splash_logo}>
        <img
          src={bestLogo}
          className="d-inline-block"
          width="250"
          height="240"
          alt="logo"
        />
      </div>
    </Animated>
  </div>
);

export default SplashScreen;
