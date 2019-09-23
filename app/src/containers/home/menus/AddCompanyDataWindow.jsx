import React from 'react';
import PropTypes from 'prop-types';
import { DefaultButton } from 'office-ui-fabric-react';
import { Tabs, Tab } from 'react-bootstrap';

import Window from '../../../components/home/Window';
import { General } from './add-company-data';

const propTypes = {
  isOpen: PropTypes.bool,
  onCloseWindow: PropTypes.func,
};

const defaultProps = {
  isOpen: false,
  onCloseWindow: () => undefined,
};

const AddCompanyDataWindow = ({ isOpen, onCloseWindow }) => (
  <Window isOpen={isOpen} titleWindow="Company Information">
    <Tabs id="company-information" className="py-3">
      <Tab eventKey="general" title="General">
        <General />
      </Tab>
      <Tab eventKey="accounting-period" title="Accounting Period">
        <General />
      </Tab>
      <Tab eventKey="taxation" title="Taxation">
        <General />
      </Tab>
    </Tabs>
    <DefaultButton
      text="Close"
      onClick={() => onCloseWindow('AddCompanyDataWindow')}
    />
  </Window>
);

AddCompanyDataWindow.propTypes = propTypes;
AddCompanyDataWindow.defaultProps = defaultProps;

export default AddCompanyDataWindow;
