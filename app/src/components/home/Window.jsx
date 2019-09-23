import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'office-ui-fabric-react';
import { Container } from 'react-bootstrap';

const propTypes = {
  isOpen: PropTypes.bool,
  titleWindow: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  isOpen: false,
  titleWindow: '',
};

const Window = ({ isOpen, titleWindow, children }) => (
  <Modal
    isOpen={isOpen}
    isBlocking
  >
    <Container className="px-3 py-4">
      <div className="d-flex justify-content-start">
        <h5>{titleWindow}</h5>
      </div>

      {children}

    </Container>
  </Modal>
);

Window.propTypes = propTypes;
Window.defaultProps = defaultProps;

export default Window;
