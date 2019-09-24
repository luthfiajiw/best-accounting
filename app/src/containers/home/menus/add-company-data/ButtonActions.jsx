import React from 'react';
import PropTypes from 'prop-types';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react';

const ButtonActions = ({
  hasPrevButton, nextLabel, onPrevTab,
  onCloseWindow, onNextTab,
}) => (
  <div className="d-flex justify-content-end pt-3">
    <DefaultButton
      text="Help"
    />
    <DefaultButton
      text="Close"
      className="mx-2"
      onClick={onCloseWindow}
    />
    <div hidden={!hasPrevButton}>
      <PrimaryButton
        text="Prev"
        className="mr-2"
        onClick={onPrevTab}
      />
    </div>
    <PrimaryButton
      text={nextLabel}
      onClick={onNextTab}
    />
  </div>
);

ButtonActions.propTypes = {
  hasPrevButton: PropTypes.bool,
  nextLabel: PropTypes.string,
  onPrevTab: PropTypes.func,
  onNextTab: PropTypes.func.isRequired,
  onCloseWindow: PropTypes.func.isRequired,
};

ButtonActions.defaultProps = {
  hasPrevButton: true,
  nextLabel: 'Next',
  onPrevTab: () => undefined,
};

export default ButtonActions;
