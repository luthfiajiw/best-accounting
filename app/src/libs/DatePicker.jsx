import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker as Calendar, DayOfWeek } from 'office-ui-fabric-react';

const dayPickerStrings = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  goToToday: 'Go to today',
  closeButtonAriaLabel: 'Close date picker',
};

const DatePicker = ({ label, value, onSelectDate }) => (
  <Calendar
    label={label}
    ariaLabel="Select a date"
    placeholder="Select a date ..."
    isRequired={false}
    firstDayOfWeek={DayOfWeek.Sunday}
    strings={dayPickerStrings}
    value={value}
    onSelectDate={onSelectDate}
  />
);

DatePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onSelectDate: PropTypes.func,
};

DatePicker.defaultProps = {
  label: '',
  value: null,
  onSelectDate: () => undefined,
};


export default DatePicker;
