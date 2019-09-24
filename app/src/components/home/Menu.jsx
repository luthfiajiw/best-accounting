import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import Ink from 'react-ink';

import styles from './styles/menu.css';

const Menu = ({ handleClick }) => (
  <Container className={styles.menu_background}>
    <Row className="d-flex justify-content-center">
      <div className={styles.card_menu}>
        <div
          role="presentation"
          className={styles.menu}
          onClick={() => handleClick('AddCompanyData')}
          onKeyPress={() => {}}
        >
          <i className="far fa-folder-plus fa-4x" />
          <p>Create Company Data</p>
          <Ink />
        </div>
      </div>
      <div className={styles.card_menu}>
        <div className={styles.menu}>
          <i className="far fa-folder-open fa-4x" />
          <p>Open Existing Data</p>
          <Ink />
        </div>
      </div>
    </Row>
    <Row className="d-flex justify-content-center">
      <div className={styles.card_menu}>
        <div className={styles.menu}>
          <i className="far fa-folders fa-4x" />
          <p>Open Sample Data</p>
          <Ink />
        </div>
      </div>
      <div className={styles.card_menu}>
        <div className={styles.menu}>
          <i className="far fa-registered fa-4x" />
          <p>Register</p>
          <Ink />
        </div>
      </div>
    </Row>
  </Container>
);

Menu.propTypes = {
  handleClick: PropTypes.func,
};
Menu.defaultProps = {
  handleClick: () => undefined,
};

export default Menu;
