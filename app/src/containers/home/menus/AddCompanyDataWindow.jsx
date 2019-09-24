import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';

import Window from '../../../components/home/Window';
import { General, AccountingPeriod, Taxation } from './add-company-data';

const propTypes = {
  isOpen: PropTypes.bool,
  onCloseWindow: PropTypes.func,
};

const defaultProps = {
  isOpen: false,
  onCloseWindow: () => undefined,
};

const AddCompanyDataWindow = ({ isOpen, onCloseWindow }) => {
  const [tabActive, setTabActive] = useState('general');
  useEffect(() => {
    setTimeout(() => {
      setTabActive('general');
    }, 1000);
  }, [isOpen]);

  return (
    <Window isOpen={isOpen} titleWindow="Company Information" icon="fal fa-building">
      <Tabs className="py-3" activeKey={tabActive} onSelect={(key) => setTabActive(key)}>
        <Tab
          eventKey="general"
          title="General"
          disabled={tabActive !== 'general'}
        >
          <General
            onCloseWindow={() => onCloseWindow('AddCompanyDataWindow')}
            onNextTab={() => setTabActive('accounting-period')}
          />
        </Tab>
        <Tab
          eventKey="accounting-period"
          title="Accounting Period"
          disabled={tabActive !== 'accounting-period'}
        >
          <AccountingPeriod
            onCloseWindow={() => onCloseWindow('AddCompanyDataWindow')}
            onNextTab={() => setTabActive('taxation')}
            onPrevTab={() => setTabActive('general')}
          />
        </Tab>
        <Tab
          eventKey="taxation"
          title="Taxation"
          disabled={tabActive !== 'taxation'}
        >
          <Taxation
            onCloseWindow={() => onCloseWindow('AddCompanyDataWindow')}
            onPrevTab={() => setTabActive('accounting-period')}
          />
        </Tab>
      </Tabs>
    </Window>
  );
};


AddCompanyDataWindow.propTypes = propTypes;
AddCompanyDataWindow.defaultProps = defaultProps;

export default AddCompanyDataWindow;
