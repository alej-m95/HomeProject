import React from 'react';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const CalendarHeader: React.FC = () => {
  return (
    <div className="calendar-header">
      {daysOfWeek.map((day) => (
        <div key={day} className="calendar-cell calendar-cell-header">
          {day}
        </div>
      ))}
    </div>
  );
};

export default CalendarHeader;
