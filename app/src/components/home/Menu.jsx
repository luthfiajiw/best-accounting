import React from 'react';
import { Container, Row } from 'react-bootstrap';

import styles from './styles/menu.css';

const Menu = () => (
  <Container className={styles.menu_background}>
    <Row className="d-flex justify-content-center">
      <div className={styles.card_menu}>
        <div className={styles.menu}>
          <i className="far fa-folder-plus fa-4x" />
          <p>Membuat Data Baru</p>
        </div>
      </div>
      <div className={styles.card_menu}>
        <div className={styles.menu}>
          <i className="far fa-folder-open fa-4x" />
          <p>Buka Data</p>
        </div>
      </div>
    </Row>
    <Row className="d-flex justify-content-center">
      <div className={styles.card_menu}>
        <div className={styles.menu}>
          <i className="far fa-folders fa-4x" />
          <p>Contoh Data</p>
        </div>
      </div>
      <div className={styles.card_menu}>
        <div className={styles.menu}>
          <i className="far fa-tasks fa-4x" />
          <p>Daftar Data</p>
        </div>
      </div>
    </Row>
  </Container>
);

export default Menu;
