import React from 'react';

interface CalendarCellProps {
  timeSlot: string;
}

const CalendarCell: React.FC<CalendarCellProps> = ({ timeSlot }) => {
  return <div className="calendar-cell">{timeSlot}</div>;
};

export default CalendarCell;
