import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'office-ui-fabric-react';

const propTypes = {
  label: PropTypes.string,
  selectedKey: PropTypes.instanceOf(Object),
  onChange: PropTypes.func,
};

const defaultProps = {
  label: '',
  selectedKey: {},
  onChange: () => undefined,
};

const monthOptions = [
  { key: 1, text: 'January' },
  { key: 2, text: 'February' },
  { key: 3, text: 'March' },
  { key: 4, text: 'April' },
  { key: 5, text: 'May' },
  { key: 6, text: 'June' },
  { key: 7, text: 'July' },
  { key: 8, text: 'August' },
  { key: 9, text: 'September' },
  { key: 10, text: 'October' },
  { key: 11, text: 'November' },
  { key: 12, text: 'December' },
];

const MonthOptions = ({ label, selectedKey, onChange }) => (
  <Dropdown
    label={label}
    selectedKey={selectedKey ? selectedKey.key : undefined}
    onChange={onChange}
    placeholder="Select a month"
    options={monthOptions}
  />
);

MonthOptions.propTypes = propTypes;
MonthOptions.defaultProps = defaultProps;

export default MonthOptions;
