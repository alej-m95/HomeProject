import React from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';

interface Match {
  id: number;
  teamName: string;
  dateTime: string;
}

interface CalendarProps {
  matches: Match[];
}

const Calendar: React.FC<CalendarProps> = ({ matches }) => {
  return (
    <div className="calendar">
      <CalendarHeader />
      <CalendarBody matches={matches} />
    </div>
  );
};

export default Calendar;
