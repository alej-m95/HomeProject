import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from '../components/Calendar';
import dayjs from 'dayjs';

interface Match {
  id: number;
  teamName: string;
  dateTime: string;
}

const HomeScreen: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([
    { id: 1, teamName: 'Forza 11-1', dateTime: '2024-05-20 10:00' },
    {id: 3, teamName: 'Buitenboys 11-2', dateTime: '2024-05-20 10:00'},
    { id: 4, teamName: 'Forza 11-1', dateTime: '2024-05-20 10:00' },
    {id: 5, teamName: 'Buitenboys 11-2', dateTime: '2024-05-20 10:00'},
    { id: 6, teamName: 'Forza 11-1', dateTime: '2024-05-20 10:00' },
    {id: 7, teamName: 'Buitenboys 11-2', dateTime: '2024-05-20 10:00'},
    { id: 2, teamName: 'Almere 11-2', dateTime: '2024-05-21 15:00' }
  ]);

  const addMatch = (newMatch: Match) => {
    setMatches([...matches, newMatch]);
  };

  return (
    <div className="container">
      <Link to="/add-match">
        <button className="add-match-button">Add Match</button>
      </Link>
      <Calendar matches={matches} />
    </div>
  );
};

export default HomeScreen;
