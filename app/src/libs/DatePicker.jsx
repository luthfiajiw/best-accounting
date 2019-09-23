import React, { useState } from 'react';
import { DatePicker as Calendar, DayOfWeek } from 'office-ui-fabric-react';

const dayPickerStrings = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};

const DatePicker = ({ label }) => {
  const [date, setDate] = useState(null);
  const handleSelectDate = (value) => {
    setDate(value);
  };

  return (
    <Calendar
      label={label}
      isRequired={false}
      firstDayOfWeek={DayOfWeek.Sunday}
      strings={dayPickerStrings}
      value={date}
      onSelectDate={handleSelectDate}
    />
  );
};


export default DatePicker;
