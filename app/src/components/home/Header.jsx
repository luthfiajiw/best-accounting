import React from 'react';
import { Container } from 'react-bootstrap';
import { TooltipHost } from 'office-ui-fabric-react';
import { ipcRenderer } from 'electron';

import styles from './styles/header.css';
import bestBrand from '../../../assets/img/best-brand.png';

const Header = () => {
  const onExit = () => {
    ipcRenderer.send('app:exit');
  };
  return (
    <Container className={`${styles.navbar}`}>
      <nav className="navbar-expand-lg shadow-none d-flex justify-content-between align-items-end py-2">
        <span className="navbar-brand d-flex align-items-end px-0">
          <img
            src={bestBrand}
            className="d-inline-block"
            width="145"
            height="50"
            alt="logo"
          />
          <p className="pl-2"> GL Basic v0.0.1</p>
        </span>
        <TooltipHost content="Exit" styles={{ height: '50%' }} directionalHint="bottomCenter">
          <i
            role="presentation"
            onClick={onExit}
            className={`far fa-power-off text-secondary ${styles.powerbutton}`}
          />
        </TooltipHost>
      </nav>
    </Container>
  );
};

export default Header;
