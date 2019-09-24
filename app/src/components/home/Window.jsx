import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'office-ui-fabric-react';
import { Container } from 'react-bootstrap';

const propTypes = {
  isOpen: PropTypes.bool,
  titleWindow: PropTypes.string,
  icon: PropTypes.string,
  windowStyle: PropTypes.instanceOf(Object),
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  isOpen: false,
  titleWindow: '',
  icon: '',
  windowStyle: {},
};

const Window = ({
  isOpen, titleWindow, icon, children, windowStyle,
}) => (
  <Modal
    isOpen={isOpen}
    isBlocking
  >
    <Container className="p-4" style={windowStyle}>
      <div className="d-flex justify-content-start">
        <h5 className="font-weight-bold">
          <i className={`${icon} mr-2`} />
          {' '}
          {titleWindow}
        </h5>
      </div>

      {children}

    </Container>
  </Modal>
);

Window.propTypes = propTypes;
Window.defaultProps = defaultProps;

export default Window;
