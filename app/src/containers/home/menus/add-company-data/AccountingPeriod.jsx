import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col } from 'react-bootstrap';
import {
  DefaultButton, PrimaryButton, Checkbox, Dropdown,
} from 'office-ui-fabric-react';

import { DatePicker, MonthOptions } from '../../../../libs';

const AccountingPeriod = ({
  onPrevTab, onCloseWindow, onNextTab,
}) => {
  const [convertionDate, setConvertionDate] = useState(null);
  const [lockFrom, setLockFrom] = useState(null);
  const [lockTo, setLockTo] = useState(null);
  const [warnFrom, setWarnFrom] = useState(null);
  const [warnTo, setWarnTo] = useState(null);
  const [isLockPeriod, setLockPeriod] = useState(false);
  const [isWarnPeriod, setWarnPeriod] = useState(false);
  const [convertionMonth, setConvertionMonth] = useState({
    key: 1,
    text: 'January',
  });
  const [lastMonth, setLastMonth] = useState({
    key: 12,
    text: 'December',
  });
  const [noAccPer, setNoAccPer] = useState({
    key: 13,
    text: '13',
  });

  const handleSelectDate = (value, field) => {
    switch (field) {
      case 'convertionDate':
        setConvertionDate(value);
        break;
      case 'lockFrom':
        setLockFrom(value);
        break;
      case 'lockTo':
        setLockTo(value);
        break;
      case 'warnFrom':
        setWarnFrom(value);
        break;
      case 'warnTo':
        setWarnTo(value);
        break;
      default:
    }
  };
  const handleSelectItem = (e, item, field) => {
    switch (field) {
      case 'convertionDate':
        setConvertionMonth(item);
        break;
      case 'lastMonth':
        setLastMonth(item);
        break;
      case 'noAccPer':
        setNoAccPer(item);
        break;
      default:
    }
  };
  const handleChecked = (e, checked, field) => {
    switch (field) {
      case 'isLockPeriod':
        setLockPeriod(checked);
        break;
      case 'isWarnPeriod':
        setWarnPeriod(checked);
        break;
      default:
    }
  };


  return (
    <Form>
      <DatePicker
        label="Convertion Date"
        value={convertionDate}
        onSelectDate={handleSelectDate}
      />

      <MonthOptions
        label="Convertion Month"
        selectedKey={convertionMonth}
        onChange={(e, item) => handleSelectItem(e, item, 'convertionDate')}
      />

      <MonthOptions
        label="Last Month in Financial Year"
        selectedKey={lastMonth}
        onChange={(e, item) => handleSelectItem(e, item, 'lastMonth')}
      />

      <Checkbox
        className="pt-2"
        label="Lock Period"
        checked={isLockPeriod}
        onChange={(e, checked) => handleChecked(e, checked, 'isLockPeriod')}
      />

      <Row hidden={!isLockPeriod} className="pb-3">
        <Col>
          <DatePicker
            label="Start From"
            value={lockFrom}
            onSelectDate={handleSelectDate}
          />
        </Col>
        <Col>
          <DatePicker
            label="To"
            value={lockTo}
            onSelectDate={handleSelectDate}
          />
        </Col>
      </Row>

      <Checkbox
        label="Warn Period"
        checked={isWarnPeriod}
        onChange={(e, checked) => handleChecked(e, checked, 'isWarnPeriod')}
      />

      <Row hidden={!isWarnPeriod}>
        <Col>
          <DatePicker
            label="Start From"
            value={warnFrom}
            onSelectDate={handleSelectDate}
          />
        </Col>
        <Col>
          <DatePicker
            label="To"
            value={warnTo}
            onSelectDate={handleSelectDate}
          />
        </Col>
      </Row>

      <Dropdown
        label="Number Accounting Period"
        selectedKey={noAccPer.key}
        onChange={(e, item) => handleSelectItem(e, item, 'noAccPer')}
        options={[
          { key: 13, text: '13 (Thirteen)' },
          { key: 12, text: '12 (Twelve)' },
        ]}
      />

      <div className="d-flex justify-content-end pt-3">
        <DefaultButton
          text="Help"
        />
        <DefaultButton
          text="Close"
          className="mx-2"
          onClick={onCloseWindow}
        />
        <PrimaryButton
          text="Prev"
          className="mr-2"
          onClick={onPrevTab}
        />
        <PrimaryButton
          text="Next"
          onClick={onNextTab}
        />
      </div>
    </Form>
  );
};

AccountingPeriod.propTypes = {
  onPrevTab: PropTypes.func.isRequired,
  onNextTab: PropTypes.func.isRequired,
  onCloseWindow: PropTypes.func.isRequired,
};

export default AccountingPeriod;
