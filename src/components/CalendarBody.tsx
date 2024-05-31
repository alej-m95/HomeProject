import React from 'react';
import CalendarCell from './CalendarCell';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

interface Match {
  id: number;
  teamName: string;
  dateTime: string;
}

interface CalendarBodyProps {
  matches: Match[];
}

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const CalendarBody: React.FC<CalendarBodyProps> = ({ matches }) => {
  const getMatchesForDay = (day: string) => {
    return matches.filter(match => dayjs(match.dateTime).format('dddd') === day);
  };

  return (
    <div className="calendar-body">
      <div className="calendar-row">
        {daysOfWeek.map(day => (
          <div key={day} className="calendar-cell">
            <div className="calendar-cell-header">{day}</div>
            {getMatchesForDay(day).map(match => (
              <div key={match.id} className="calendar-match">
                <p>{match.teamName}</p>
                <p>{dayjs(match.dateTime).format('h:mm A')}</p>
                <Link to={`/match-details/${match.id}`}>
                  <button>View Details</button>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarBody;
