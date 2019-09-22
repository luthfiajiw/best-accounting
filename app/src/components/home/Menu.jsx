import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Ink from 'react-ink';

import styles from './styles/menu.css';

const Menu = () => (
  <Container className={styles.menu_background}>
    <Row className="d-flex justify-content-center">
      <div className={styles.card_menu}>
        <div className={styles.menu}>
          <i className="far fa-folder-plus fa-4x" />
          <p>Membuat Data Baru</p>
          <Ink />
        </div>
      </div>
      <div className={styles.card_menu}>
        <div className={styles.menu}>
          <i className="far fa-folder-open fa-4x" />
          <p>Buka Data</p>
          <Ink />
        </div>
      </div>
    </Row>
    <Row className="d-flex justify-content-center">
      <div className={styles.card_menu}>
        <div className={styles.menu}>
          <i className="far fa-folders fa-4x" />
          <p>Contoh Data</p>
          <Ink />
        </div>
      </div>
      <div className={styles.card_menu}>
        <div className={styles.menu}>
          <i className="far fa-tasks fa-4x" />
          <p>Daftar Data</p>
          <Ink />
        </div>
      </div>
    </Row>
  </Container>
);

export default Menu;
